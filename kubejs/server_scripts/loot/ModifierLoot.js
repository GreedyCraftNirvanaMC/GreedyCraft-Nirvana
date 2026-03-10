// 修改战利品列表

LootJS.lootTables(event => {
    event.getLootTable("projectvibrantjourneys:blocks/rocks").firstPool().removeItem("projectvibrantjourneys:rocks")
    event.getLootTable("projectvibrantjourneys:blocks/mossy_rocks").firstPool().removeItem("mossy_rocks")
    event.getLootTable("projectvibrantjourneys:blocks/rocks").firstPool().addEntry("greedycraft:pebble")
    event.getLootTable("projectvibrantjourneys:blocks/mossy_rocks").firstPool().addEntry("greedycraft:pebble")
})