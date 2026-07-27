// 此脚本用于为整合包注册通用机械化学品中的化学品
// priority: 50

StartupEvents.registry("mekanism:chemical", event => {
    event.create(`greedycraft:sodium_chloride_chemical`).tint(0xe1e7e0)
})
