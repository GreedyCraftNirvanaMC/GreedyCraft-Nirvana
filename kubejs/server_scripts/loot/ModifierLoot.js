// 修改战利品列表

LootJS.modifiers(event => {
    event.addTableModifier("projectvibrantjourneys:blocks/rocks").replaceLoot("projectvibrantjourneys:rocks", "greedycraft:pebble", true)
    event.addTableModifier("projectvibrantjourneys:blocks/mossy_rocks").replaceLoot("projectvibrantjourneys:mossy_rocks", "greedycraft:pebble", true)
})

LootJS.lootTables(event => {
    event.getLootTable("minecraft:blocks/short_grass").firstPool().addEntry(LootEntry.of("greedycraft:plant_fibre").randomChance(0.2))
    event.getLootTable("minecraft:blocks/short_grass").firstPool().addEntry(LootEntry.of("greedycraft:lucky_clover").randomChance(0.5))
})

new mainLootTableAddModifier(50, 1, 2, 10).item("minecraft:bone")
new mainLootTableAddModifier(40, 1, 2, 15).item("minecraft:cobweb")
new mainLootTableAddModifier(10, 1, 2, 12).item('minecraft:string')
new mainLootTableAddModifier(20, 1, 4, 12).item('minecraft:gunpowder')
new mainLootTableAddModifier(6, 1, 5, 10).item('minecraft:leather')
new mainLootTableAddModifier(60, 1, 2, 12).item('minecraft:rotten_flesh')
new mainLootTableAddModifier(25, 1, 2, 10).item('minecraft:bone_meal')
new mainLootTableAddModifier(15, 1, 2, 16).item('minecraft:paper')
new mainLootTableAddModifier(10, 1, 12, 24).item('minecraft:clay_ball')
new mainLootTableAddModifier(10, 1, 16, 32).item('minecraft:redstone')
new mainLootTableAddModifier(10, 1, 16, 32).item('minecraft:lapis_lazuli')
new mainLootTableAddModifier(10, 1, 4, 12).item('minecraft:wheat')
new mainLootTableAddModifier(4, 1, 4, 8).item('minecraft:wheat_seeds')
new mainLootTableAddModifier(4, 1, 4, 8).item('minecraft:melon_seeds')
new mainLootTableAddModifier(4, 1, 4, 8).item('minecraft:pumpkin_seeds')
new mainLootTableAddModifier(15, 1, 1, 6).item('minecraft:book')
