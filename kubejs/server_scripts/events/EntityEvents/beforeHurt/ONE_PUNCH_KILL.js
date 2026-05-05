// 实体事件-受伤前事件
// 此脚本用于玩家使用一拳攻击生物时击杀对象
// priority: 50

EntityEvents.beforeHurt(event => {
    let entity = event.entity
    let source = event.source

    // 如果造成伤害的是玩家并且是近战造成且主手手持 greedycraft:one_punch 时直接 kill 攻击对象
    if (source.player && source.direct && source.player.mainHandItem.id.toString() == "greedycraft:one_punch") {
        entity.kill()
    }
})
