// 生物生成事件

EntityEvents.spawned(event => {
    if (event.entity.isLiving() && event.entity.getMaxHealth() > 1048576.0) {
        event.cancel()
    }
})
