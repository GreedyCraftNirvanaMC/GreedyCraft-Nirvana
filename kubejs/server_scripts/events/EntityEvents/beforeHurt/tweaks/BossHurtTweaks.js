// 实体事件-受伤前事件
// 此脚本用于调整整合包内 Boss 的伤害
// priority: 50

let PsAttachmentTypes = Java.loadClass("net.silentchaos512.powerscale.setup.PsAttachmentTypes")

EntityEvents.beforeHurt(event => {
    let source = event.getSource()
    let entity = event.getEntity()

    // 判断造成伤害的是否是 Boss 并且不在黑名单中
    if (source.getActual() && global.VARIABLE_BOSS_LIST.includes(source.getActual().getType()) && !(global.VARIABLE_DAMAGE_BLACK_LIST.includes(source.getActual().getType()))) {
        // 根据难度设置伤害
        let damage = 1.0

        if (entity.getData(PsAttachmentTypes.DIFFICULTY) >= 1.0) {
            damage = entity.getData(PsAttachmentTypes.DIFFICULTY)
        }

        event.setDamage(event.getDamage() * damage)
    }
})
