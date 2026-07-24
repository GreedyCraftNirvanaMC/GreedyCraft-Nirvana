// priority: 40

StartupEvents.registry("creative_mode_tab", event => {
    event.create("greedycraft_material").icon(() => "greedycraft:cryonium_ingot").content(() => Ingredient.of("#greedycraft:material").itemIds.toArray())
    event.create("greedycraft_ore").icon(() => "greedycraft:aeroite_ore").content(() => Ingredient.of("#greedycraft:ore").itemIds.toArray())
    event.create("greedycraft_block").icon(() => "greedycraft:aeonsteel_block").content(() => Ingredient.of("#greedycraft:block").itemIds.toArray())
    event.create("greedycraft_item").icon(() => "greedycraft:creative_soul").content(() => Ingredient.of("#greedycraft:item").itemIds.toArray())
})