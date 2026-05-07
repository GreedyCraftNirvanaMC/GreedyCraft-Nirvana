// 物品事件-右键事件
// 此脚本用于实现整合包内自定义物品的功能-肾上腺素
// priority: 50

let MobEffectInstance = Java.loadClass("net.minecraft.world.effect.MobEffectInstance")
let MobEffects = Java.loadClass("net.minecraft.world.effect.MobEffects")

ItemEvents.rightClicked("greedycraft:adrenaline", event => {
    // 速度效果
    event.player.addEffect(new MobEffectInstance(MobEffects.MOVEMENT_SPEED, 200, 4))
    // 力量效果
    event.player.addEffect(new MobEffectInstance(MobEffects.DAMAGE_BOOST, 200, 3))
    // 将物品减 1
    event.item.shrink(1)
})
