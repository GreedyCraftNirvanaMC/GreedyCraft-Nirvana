// 物品事件-右键事件
// 此脚本用于实现整合包内阶段物品给予阶段功能
// priority: 50

ItemEvents.rightClicked(event => {
    let player = event.player
    let playerName = player.username
    let server = event.server
    let level = event.level
    let item = event.item
    let tags = item.tags

    // 从物品 tag 列表提取单个 tag
    tags.forEach(tag => {
        // 判断命名空间是否等于 greedycraft
        if (tag.namespace == "greedycraft") {
            // 判断 tag 路径是否是 unlock_stage/ 开头
            if (tag.path.toString().startsWith("unlock_stage/")) {
                // 截断字符串，留下截断名称
                let stage = tag.path.toString().replace("unlock_stage/", "")

                // 判断该阶段是否已解锁
                if (!(AStages.playerHasStage(stage, player))) {
                    // 给予进度
                    server.runCommandSilent(`advancement grant ${playerName} only greedycraft:stages/${stage}`)

                    // 生成粒子
                    level.spawnParticles("minecraft:totem_of_undying", true, player.x, player.y, player.z, 2.0, 2.0, 2.0, 1000, 5)

                    // 将物品减 1
                    event.item.shrink(1)
                } else {
                    // 已解锁发送提示
                    player.tell(Component.translatable("greedycraft.message.right_clicked.has_stage"))
                }
            }
        }
    })
})
