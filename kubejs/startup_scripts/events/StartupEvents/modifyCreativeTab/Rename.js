// 此脚本用于为整合包创造模式物品栏修改名称
// priority: 30

StartupEvents.modifyCreativeTab("kubejs:greedycraft_material", event => {
    event.displayName = Text.darkAqua(Component.translatable("greedycraft.creativetab.greedycraft_material.name"))
})
StartupEvents.modifyCreativeTab("kubejs:greedycraft_ore", event => {
    event.displayName = Text.darkAqua(Component.translatable("greedycraft.creativetab.greedycraft_ore.name"))
})
StartupEvents.modifyCreativeTab("kubejs:greedycraft_block", event => {
    event.displayName = Text.darkAqua(Component.translatable("greedycraft.creativetab.greedycraft_block.name"))
})
StartupEvents.modifyCreativeTab("kubejs:greedycraft_item", event => {
    event.displayName = Text.darkAqua(Component.translatable("greedycraft.creativetab.greedycraft_item.name"))
})
