// 修改战利品列表

LootJS.modifiers(event => {
    event.addTableModifier("projectvibrantjourneys:blocks/rocks").replaceLoot("projectvibrantjourneys:rocks", "greedycraft:pebble", true)
    event.addTableModifier("projectvibrantjourneys:blocks/mossy_rocks").replaceLoot("projectvibrantjourneys:mossy_rocks", "greedycraft:pebble", true)
    event.addBlockModifier("minecraft:short_grass").randomChance(0.2).addLoot("greedycraft:plant_fibre")
})
