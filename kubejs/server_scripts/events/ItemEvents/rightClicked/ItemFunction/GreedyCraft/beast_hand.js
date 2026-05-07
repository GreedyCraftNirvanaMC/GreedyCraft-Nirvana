// 物品事件-右键事件
// 此脚本用于实现整合包内自定义物品的功能-巨兽之手
// priority: 50

let SeasonHelper = Java.loadClass("sereneseasons.api.season.SeasonHelper")
let Season = Java.loadClass("sereneseasons.api.season.Season")

let packMode = KJSutils.Analysis("config/greedycraft/config.json", "$.packMode")

ItemEvents.rightClicked("greedycraft:beast_hand", event => {
    let level = event.level
    let player = event.player

    // 获取当前世界的季节
    let season = SeasonHelper.getSeasonState(level).getSeason()

    // 判断季节是否是冬季
    if (season != Season.WINTER) {
        // 判断当前群系是否是雪地
        if (!(level.getBiome(player.blockPosition()).isTag("c:is_ocean"))) {
            // 发送消息
            player.tell(Component.translatable("greedycraft.message.spawn.error.frostmaw.biome"))
            return
        }

        // 必须要下雨
        if (!(level.isRaining())) {
            // 发送消息
            player.tell(Component.translatable("greedycraft.message.spawn.error.frostmaw.weather"))
            return
        }

        // 必须在主世界时才能召唤
        if (!(level.isOverworld())) {
            // 发送消息
            player.tell(Component.translatable("greedycraft.message.spawn.error.frostmaw.world"))
            return
        }
    }

    // 生成霜冻巨兽
    level.spawnEntity("mowziesmobs:frostmaw", entity => {
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
            maxHeal
            th = Math.floor(maxHealth * 1.5)
        }

        if (packMode == "expert") {
            maxHealth = Math.floor(maxHealth * 2)
        }

        // 在玩家 y 轴加 4 格位置生成
        entity.setPos(player.x, player.y + 4, player.z)

        // 设置最大血量
        entity.setMaxHealth(maxHealth)

        // 设置血量
        entity.setHealth(maxHealth)
    })

    // 根据整合包模式设置召唤雪怪的数量
    let maxCount = 6;
    if (packMode == "casual") {
        maxCount = 3
    }

    if (packMode == "expert") {
        maxCount = 10
    }

    for (let i = 0; i < maxCount; i++) {
        let levelBlock = level.getBlock(pos)

        // 获取玩家周围随机的格子
        let pos = randomSpawnAroundPlayer(player, 10)

        // 如果不是空气跳过这个循环
        if (!(level.isEmptyBlock(pos))) {
            continue
        }

        // 生成
        level.spawnEntity("twilightforest:yeti", entity => {
            // 设置坐标
            entity.setPos(pos)
        })
    }

    // 发送消息
    player.tell(Component.translatable("greedycraft.message.right_clicked.beast_hand"))
})
