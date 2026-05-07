// 实体事件-受伤前事件
// 此脚本用于调整整合包内 Boss 的伤害
// priority: 50

let PsAttachmentTypes = Java.loadClass("net.silentchaos512.powerscale.setup.PsAttachmentTypes")

EntityEvents.beforeHurt(event => {
    let source = event.source
    let entity = event.entity

    // 判断造成伤害的是否是 Boss 并且不在黑名单中
    if (source.actual && global.VARIABLE_BOSS_LIST.includes(source.actual.type) && !(global.VARIABLE_DAMAGE_BLACK_LIST.includes(source.actual.type))) {
        // 根据难度设置伤害
        event.setDamage(event.damage * (1.0 + 0.0032 * entity.getData(PsAttachmentTypes.DIFFICULTY)))
    }
})
