// 实体事件-受伤前事件
// 此脚本用于调整整合包荆棘附魔的伤害
// priority: 50

EntityEvents.beforeHurt(event => {
    let source = event.getSource()
    let entity = event.getEntity()

    // 判断伤害类型是否是荆棘
    if (source.getType() == "thorns") {
        // 判断造成伤害的是否是玩家
        if (source.player) {
            // 如果反弹的伤害大于 50 则设置伤害为 50
            if (event.getDamage() > 50.0) {
                event.setDamage(50.0)
            }
            // 如果造成的伤害大于实体最大生命值的 5% 则设置伤害为该实体最大生命值的 5%
            if (event.getDamage() > entity.getMaxHealth() * 0.05) {
                event.setDamage(entity.getMaxHealth() * 0.05)
            }
            // 如果实体是 Boss 则取消受伤
            if (global.VARIABLE_BOSS_LIST.includes(entity.getType())) {
                event.cancel()
            }
        }
    }
})
