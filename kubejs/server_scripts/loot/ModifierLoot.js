// 此脚本用于修改战利品列表
// priority: 50

LootJS.modifiers(event => {
    event.addTableModifier("projectvibrantjourneys:blocks/rocks").replaceLoot("projectvibrantjourneys:rocks", "greedycraft:pebble", true)
    event.addTableModifier("projectvibrantjourneys:blocks/mossy_rocks").replaceLoot("projectvibrantjourneys:mossy_rocks", "greedycraft:pebble", true)
})

LootJS.lootTables(event => {
    event.getLootTable("minecraft:blocks/short_grass").firstPool().addEntry(LootEntry.of("greedycraft:plant_fibre").randomChance(0.2))
    event.getLootTable("minecraft:blocks/short_grass").firstPool().addEntry(LootEntry.of("greedycraft:lucky_clover").randomChance(0.5))
})
