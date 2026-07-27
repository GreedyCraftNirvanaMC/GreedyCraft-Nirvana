// 物品事件-右键事件
// 此脚本用于实现整合包内自定义物品的功能-肾上腺素
// priority: 50

ItemEvents.rightClicked("greedycraft:adrenaline", event => {
    let $MobEffectInstance = Java.loadClass("net.minecraft.world.effect.MobEffectInstance")
    let $MobEffects = Java.loadClass("net.minecraft.world.effect.MobEffects")

    // 速度效果
    event.getPlayer().addEffect(new $MobEffectInstance($MobEffects.MOVEMENT_SPEED, 200, 4))
    // 力量效果
    event.getPlayer().addEffect(new $MobEffectInstance($MobEffects.DAMAGE_BOOST, 200, 3))
    // 将物品减 1
    event.getItem().shrink(1)
})
