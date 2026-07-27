// 此脚本用于为整合包注册通用机械化学品中的浆液
// priority: 50

// 注册材料浆液

StartupEvents.registry("mekanism:chemical", event => {
    /** @type {registryMetals[]} */
    let materialList = []

    materialList = global.materialList

    materialList.forEach(material => {
        material.types.forEach(type => {
            if (type == "slurry") {
                event.create(`greedycraft:${material.name}_dirtyslurry`, "mekanism:dirty_slurry").tint(material.color)
                event.create(`greedycraft:${material.name}_cleanslurry`, "mekanism:clean_slurry").tint(material.color)
            }
        })
    })
})
