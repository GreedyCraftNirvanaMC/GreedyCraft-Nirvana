// 实体事件-受伤前事件
// 此脚本用于调整整合包对于亡灵在太阳下的火焰伤害
// priority: 50

EntityEvents.beforeHurt(event => {
    let entity = event.getEntity()
    let source = event.getSource()

    // 判断受伤实体是否是亡灵生物
    if (entity.isUndead()) {
        // 判断伤害类型是否是火焰
        if (source.getType() == "inFire" || source.getType() == "onFire" || source.getType() == "lava") {
            // 判断实体是否能看见天空且时间是白天且不是 Boss
            if (entity.getLevel().canSeeSky(entity.blockPosition()) && entity.getLevel().isDay() && !(global.VARIABLE_BOSS_LIST.includes(entity.getType()))) {
                // 设置火焰伤害为加上该实体最大血量的二十分之一
                event.setDamage(event.getDamage() + entity.getMaxHealth() / 20.0)
            }
        }
    }
})
