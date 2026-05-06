// 实体事件-受伤前事件
// 此脚本用于调整整合包箭矢伤害
// priority: 50

let PsAttachmentTypes = Java.loadClass("net.silentchaos512.powerscale.setup.PsAttachmentTypes")

EntityEvents.beforeHurt(event => {
    let source = event.source
    let entity = event.entity

    // 判断伤害类型是否是箭矢
    if (source.getType() == "arrow") {
        // 排除 Boss
        if (source.actual && !(global.VARIABLE_BOSS_LIST.includes(source.actual.type))) {
            // 根据游戏难度设置伤害
            event.setDamage(event.damage * (1.0 + 0.003 * entity.getData(PsAttachmentTypes.DIFFICULTY)))
            // 如果造成伤害的是骷髅类实体则伤害翻倍
            if (source.actual && global.VARIABLE_SKELETON_LIST.includes(source.actual.type)) {
                event.setDamage(event.damage * 2.0)
            }
        }
    }
})
