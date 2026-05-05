// 此脚本用于为整合包注册自定义工具等级
// priority: 60

ItemEvents.toolTierRegistry(event => {
    event.add("pebble", tier => {
        tier.uses = 6
        tier.speed = 0.6
        tier.attackDamageBonus = 0.0
        tier.repairIngredient = "minecraft:cobblestone"
        tier.enchantmentValue = 2
    })
    event.add("one_punch", tier => {
        tier.uses = 0
        tier.speed = 20.0
        tier.attackDamageBonus = 0.0
        tier.enchantmentValue = 10
    })
})
