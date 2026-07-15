// 物品事件-右键事件
// 此脚本用于实现整合包内自定义物品的功能-净化之尘
// priority: 50

let hasPrePurifyingDustRecipes = false
let PrePurifyingDustRecipes = {}

ItemEvents.rightClicked("greedycraft:purifying_dust", event => {
    let level = event.getLevel()
    let player = event.getPlayer()
    let blockTarget = event.getTarget().block

    // 判断是否右键的方块
    if (blockTarget == null) {
        player.tell(Component.translatable("greedycraft.message.right_clicked.purifying_dust.2"))
        return
    }

    let startTime = Date.now()
    let baseX = blockTarget.getX()
    let baseY = blockTarget.getY()
    let baseZ = blockTarget.getZ()

    let setBlockNumber = 0

    let recipesMap = {}

    // 判断是否使用缓存
    if (hasPrePurifyingDustRecipes) {
        recipesMap = PrePurifyingDustRecipes
    } else {
        // 预处理净化之尘配方展开 tag 并反向映射
        Object.entries(global.MAP_PURIFYINGDUST_RECIPES).forEach(([product, sources]) => {
            sources.forEach(source => {
                if (source.startsWith("#")) {
                    let tag = source.substring(1)
                    Block.getTaggedIds(tag).forEach(blockID => {
                        recipesMap[blockID.toString()] = product
                    })
                } else {
                    recipesMap[source] = product
                }
            })
        })
        // 将结果缓存
        hasPrePurifyingDustRecipes = true
        PrePurifyingDustRecipes = recipesMap
    }

    // 遍历以右键方块为中心的 15x15x15 范围内的所有方块
    for (let dx = -15; dx <= 15; dx++) {
        for (let dy = -15; dy <= 15; dy++) {
            for (let dz = -15; dz <= 15; dz++) {
                // 计算坐标
                let x = baseX + dx
                let y = baseY + dy
                let z = baseZ + dz

                let blockID = level.getBlock(x, y, z).getId()

                // 如果是空气跳过本次循环
                if (blockID == "minecraft:air" || blockID == "minecraft:cave_air" || blockID == "minecraft:void_air") {
                    continue
                }

                // 通过映射表替换方块
                let product = recipesMap[blockID]
                if (product) {
                    level.setBlock([x, y, z], product, 3)
                    setBlockNumber++
                }
            }
        }
    }

    let endTime = Date.now()

    // 判断是否有方块被替换
    if (setBlockNumber > 0) {
        // 发送消息
        player.tell(Component.translatable("greedycraft.message.right_clicked.purifying_dust", Component.literal(setBlockNumber).color(0xFFAA00), endTime - startTime))
        // 生成粒子
        level.spawnParticles("minecraft:poof", true, player.getX(), player.getY(), player.getZ(), 8.0, 8.0, 8.0, 1500, 0.2)
        // 输出日志
        console.log(`${player.username} used greedycraft:purifying_dust at X:${player.getX()} Y:${player.getY()} Z:${player.getZ()}, causing ${endTime - startTime}ms of lag`)
        // 将物品减 1
        event.getItem().shrink(1)
    } else {
        // 发送消息
        player.tell(Component.translatable("greedycraft.message.right_clicked.purifying_dust.1"))
    }
})
