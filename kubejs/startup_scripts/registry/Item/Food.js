// 此脚本用于为整合包注册食物类物品
// priority: 50

StartupEvents.registry("item", event => {
    // 熟人肉
    event.create("greedycraft:cooked_human_meat").food(food => {
        food.nutrition(8)
        food.saturation(0.45)
    })
        .tag("greedycraft:item")
    // 滑稽果
    event.create("greedycraft:huaji").food(food => {
        food.nutrition(10)
        food.saturation(2.0)
        food.effect("minecraft:health_boost", 800, 3, 1.0)
    })
        .tooltip(Component.translatable("greedycraft.item.huaji.tooltip.1.text"))
        .tag("greedycraft:item")
    // 医疗包
    event.create("greedycraft:medkit_small").food(food => {
        food.eatSeconds(4.0)
        food.nutrition(0)
        food.saturation(0.0)
        food.effect("minecraft:instant_health", 0, 1, 1.0)
        food.effect("minecraft:regeneration", 400, 0, 1.0)
    })
        .useAnimation("drink")
        .tooltip(Component.translatable("greedycraft.item.medkit_small.tooltip.1.text"))
        .tooltip(Component.translatable("greedycraft.item.medkit_small.tooltip.2.text"))
        .tag("greedycraft:item")
    // 高级医疗包
    event.create("greedycraft:medkit_big").food(food => {
        food.eatSeconds(3.0)
        food.nutrition(0)
        food.saturation(0.0)
        food.effect("minecraft:instant_health", 0, 2, 1.0)
        food.effect("minecraft:regeneration", 800, 1, 1.0)
        food.effect("minecraft:health_boost", 800, 4, 1.0)
    })
        .useAnimation("drink")
        .tooltip(Component.translatable("greedycraft.item.medkit_big.tooltip.1.text"))
        .tooltip(Component.translatable("greedycraft.item.medkit_big.tooltip.2.text"))
        .tooltip(Component.translatable("greedycraft.item.medkit_big.tooltip.3.text"))
        .tag("greedycraft:item")
    // 超级医疗包
    event.create("greedycraft:medkit_super").food(food => {
        food.eatSeconds(4.0)
        food.nutrition(0)
        food.saturation(0.0)
        food.effect("minecraft:instant_health", 0, 4, 1.0)
        food.effect("minecraft:regeneration", 1200, 3, 1.0)
        food.effect("minecraft:health_boost", 1200, 9, 1.0)
    })
        .useAnimation("drink")
        .tooltip(Component.translatable("greedycraft.item.medkit_super.tooltip.1.text"))
        .tooltip(Component.translatable("greedycraft.item.medkit_super.tooltip.2.text"))
        .tooltip(Component.translatable("greedycraft.item.medkit_super.tooltip.3.text"))
        .tag("greedycraft:item")
    // 松果
    event.create("greedycraft:pinecone").food(food => {
        food.nutrition(2)
        food.saturation(0.15)
        food.effect("minecraft:speed", 200, 0, 0.35)
    })
        .tag("greedycraft:item")
    // 老八秘制小汉堡
    event.create("greedycraft:poopburger").food(food => {
        food.nutrition(20)
        food.saturation(0.5)
        food.effect("minecraft:health_boost", 1200, 10, 1.0)
    })
        .tag("minecraft:wolf_food")
        .tooltip(Component.translatable("greedycraft.item.poopburger.tooltip.1.text"))
        .tag("greedycraft:item")
    // 便便
    event.create("greedycraft:poop").food(food => {
        food.nutrition(1)
        food.saturation(1.0)
        food.effect("minecraft:nausea", 1200, 127, 1.0)
        food.effect("minecraft:poison", 300, 3, 1.0)
    })
        .burnTime(600)
        .tag("minecraft:wolf_food")
        .tooltip(Component.translatable("greedycraft.item.poop.tooltip.1.text"))
        .tooltip(Component.translatable("greedycraft.item.poop.tooltip.2.text"))
        .tooltip(Component.translatable("greedycraft.item.poop.tooltip.3.text"))
        .tag("greedycraft:item")
    // 生人肉
    event.create("greedycraft:raw_human_meat").food(food => {
        food.nutrition(2)
        food.saturation(0.75)
        food.effect("minecraft:nausea", 160, 0, 0.5)
    })
        .tag("greedycraft:item")
    // 盾牌软糖 专家模式专属
    event.create("greedycraft:shield_gum").food(food => {
        food.nutrition(8)
        food.saturation(0.625)
        food.eatSeconds(3.0)
        food.effect("minecraft:resistance", 200, 3, 1.0)
    })
        .tooltip(Component.translatable("greedycraft.item.shield_gum.tooltip.1.text"))
        .tooltip(Component.translatable("greedycraft.item.shield_gum.tooltip.2.text"))
        .tooltip(Component.translatable("greedycraft.item.shield_gum.tooltip.3.text"))
        .tag("greedycraft:item")
    // 古怪的棒棒糖 专家模式专属
    event.create("greedycraft:strange_lolipop").food(food => {
        food.nutrition(10)
        food.saturation(0.5)
        food.effect("minecraft:slowness", 300, 4, 1.0)
        food.effect("minecraft:strength", 300, 5, 1.0)
    })
        .tooltip(Component.translatable("greedycraft.item.strange_lolipop.tooltip.1.text"))
        .tooltip(Component.translatable("greedycraft.item.strange_lolipop.tooltip.2.text"))
        .tooltip(Component.translatable("greedycraft.item.strange_lolipop.tooltip.3.text"))
        .tag("greedycraft:item")
})
