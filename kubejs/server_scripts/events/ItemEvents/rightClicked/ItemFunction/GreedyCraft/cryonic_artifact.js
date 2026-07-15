// 物品事件-右键事件
// 此脚本用于实现整合包内自定义物品的功能-极寒圣物
// priority: 50

ItemEvents.rightClicked("greedycraft:cryonic_artifact", event => {
    let player = event.getPlayer()
    let level = event.getLevel()

    let trigger = false

    // 将范围设置为以玩家为中心周围 20 格
    let box = player.getBoundingBox().inflate(20.0)

    // 获取该 20 格内的所有实体列表
    let entitys = level.getEntitiesWithin(box)

    // 从列表提取单个实体
    entitys.forEach(entity => {
        // 判断实体 id 是否等于 aether:sun_spirit 并且处于活动状态
        if (entity.getType() == "aether:sun_spirit" && entity.isLiving()) {
            // 设置血量为 1
            entity.setHealth(1.0)

            // 生成粒子
            level.spawnParticles("minecraft:snowflake", true, player.getX(), player.getY(), player.getZ(), 2.0, 2.0, 2.0, 200, 0.1)

            // 将物品减 1
            event.getItem().shrink(1)

            trigger = true

            // 输出日志
            console.log(`${player.getUsername()} used greedycraft:cryonic_artifact to set the health of aether:sun_spirit to 1.
                Player X:${player.getX()} Y:${player.getY()} Z:${player.getZ()}
                Entity X:${entity.getX()} Y:${entity.getY()} Z:${entity.getZ()}`)
        }
    })

    if (!(trigger)) {
        // 发送消息
        player.tell(Component.translatable("greedycraft.message.right_clicked.cryonic_artifact"))
    }
})
