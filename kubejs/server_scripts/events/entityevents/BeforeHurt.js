// 实体受伤事件

EntityEvents.beforeHurt(event => {
    let entity = event.entity
    let source = event.source

    if (source.player && source.direct && source.player.mainHandItem.id.toString() == "greedycraft:one_punch") {
        entity.kill()
    }
})
