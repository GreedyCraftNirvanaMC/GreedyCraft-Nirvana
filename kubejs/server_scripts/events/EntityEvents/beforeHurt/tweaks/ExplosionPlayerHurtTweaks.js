// 实体事件-受伤前事件
// 此脚本用于调整整合包对玩家的爆炸伤害
// priority: 50

EntityEvents.beforeHurt("minecraft:player", event => {
    let source = event.getSource()
    let player = event.getPlayer()

    if (source.getType() == "explosion.player") {
        // 判断玩家是否有 nether 阶段
        if (AStages.playerHasStage(player, "nether")) {
            // 设置伤害为 2.5 倍
            event.setDamage(event.getDamage() * 2.5)
        }

        // 判断玩家是否有 hardmode 阶段
        if (AStages.playerHasStage(player, "hardmode")) {
            // 设置伤害为 3.0 倍
            event.setDamage(event.getDamage() * 3.0)
        }
    }
})
