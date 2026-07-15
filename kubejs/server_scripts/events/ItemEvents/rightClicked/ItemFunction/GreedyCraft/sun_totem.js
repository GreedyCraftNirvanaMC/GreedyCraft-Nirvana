// 物品事件-右键事件
// 此脚本用于实现整合包内自定义物品的功能-太阳图腾
// priority: 50

let packMode = KJSutils.Analysis("config/greedycraft/config.json", "$.packMode")

ItemEvents.rightClicked("greedycraft:sun_totem", event => {
    let level = event.getLevel()
    let player = event.getPlayer()

    let hasReturn = false

    // 必须在晴天
    if (level.isRaining()) {
        // 发送消息
        player.tell(Component.translatable("greedycraft.message.spawn.error.umvuthi.weather"))
        return
    }

    // 必须在主世界时才能召唤
    if (!(level.isOverworld())) {
        // 发送消息
        player.tell(Component.translatable("greedycraft.message.spawn.error.umvuthi.world"))
        return
    }

    // 必须是白天
    if (!(level.isDay())) {
        // 发送消息
        player.tell(Component.translatable("greedycraft.message.spawn.error.umvuthi.time"))
        return
    }

    // 生成太阳鸟
    level.spawnEntity("mowziesmobs:umvuthi", entity => {
        // 确保是活动实体
        if (!(entity.isLiving())) {
            return
        }

        // 根据整合包模式设置最大血量
        let maxHealth = entity.getMaxHealth()

        if (packMode == "casual") {
            maxHealth = Math.floor(maxHealth / 2)
        }

        if (packMode == "adventure") {
            maxHealth = Math.floor(maxHealth * 1.5)
        }

        if (packMode == "expert") {
            maxHealth = Math.floor(maxHealth * 2)
        }

        // 在玩家 y 轴加 4 格位置生成
        entity.setPos(player.getX(), player.getY() + 4, player.getZ())

        // 设置最大血量
        entity.setMaxHealth(maxHealth)
        // 设置血量
        entity.setHealth(maxHealth)
    })

    // 根据整合包模式设置召唤随从的数量
    let maxCount = 4;

    if (packMode == "casual") {
        maxCount = 2
    }

    if (packMode == "expert") {
        maxCount = 8
    }

    for (let i = 0; i < maxCount; i++) {
        // 获取玩家周围随机的格子
        let pos = randomSpawnAroundPlayer(player, 10)

        // 如果不是空气跳过这个循环
        if (!(level.isEmptyBlock(pos))) {
            continue
        }

        // 生成
        level.spawnEntity("mowziesmobs:umvuthana_raptor", entity => {
            // 设置坐标
            entity.setPos(pos)
        })
    }

    // 发送消息
    player.tell(Component.translatable("greedycraft.message.right_clicked.sun_totem"))
})
