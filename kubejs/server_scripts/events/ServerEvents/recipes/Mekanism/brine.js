// 服务器事件-配方事件
// 此脚本用于注册氯化钠生产盐水配方
// priority: 50

ServerEvents.recipes(event => {
    event.recipes.mekanism.chemical_infusing("10000x greedycraft:sodium_chloride_chemical", "10x mekanism:chlorine", "10x mekanism:sodium")
    event.custom(
        {
            "type": "mekanism:reaction",
            "chemical_input": {
                "amount": 1000,
                "chemical": "greedycraft:sodium_chloride_chemical"
            },
            "duration": 200,
            "energy_required": 1000,
            "fluid_input": {
                "amount": 100,
                "tag": "minecraft:water"
            },
            "item_input": {
                "count": 1,
                "item": "aether:ambrosium_shard"
            },
            "item_output": {
                "count": 10,
                "id": "greedycraft:sodium_chloride_crystal"
            }
        }
    )
})