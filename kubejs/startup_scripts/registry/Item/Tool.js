// 此脚本用于为整合包注册工具类物品
// priority: 50

StartupEvents.registry("item", event => {
    // 简易手斧
    event.create("greedycraft:crude_hatchet", "kubejs:axe")
        .maxStackSize(1)
        .tier("pebble")
        .tooltip(Component.translatable("greedycraft.item.crude_hatchet.tooltip.1.text"))
        .tag("greedycraft:item")
    // 一拳
    event.create("greedycraft:one_punch", "kubejs:sword")
        .maxStackSize(1)
        .tier("one_punch")
        .attackDamageBaseline(9999998.0)
        .tooltip(Component.translatable("greedycraft.item.one_punch.tooltip.1.text"))
        .tag("greedycraft:item")
})
