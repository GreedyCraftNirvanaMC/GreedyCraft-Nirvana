// 设置物品 EMC

ProjectEEvents.setEMC(event => {
    Object.entries(global.customEMC).forEach(([item, emc]) => {
        event.setEMCBefore(item, emc)
    })
})