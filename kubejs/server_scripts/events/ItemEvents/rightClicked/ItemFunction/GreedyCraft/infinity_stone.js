// 物品事件-右键事件
// 此脚本用于实现整合包内自定义物品的功能-无限宝石
// priority: 50

let MobEffectInstance = Java.loadClass("net.minecraft.world.effect.MobEffectInstance")
let MobEffects = Java.loadClass("net.minecraft.world.effect.MobEffects")

ItemEvents.rightClicked("greedycraft:infinity_stone", event => {
    let player = event.getPlayer()
    let server = event.getServer()

    // 判断是否是开发者或者是以创造模式创建的存档
    if (global.VARIABLE_CREATOR_LIST.includes(player.getUuid().toString()) || AStages.serverHasStage("init_creative", server)) {
        // 抗性效果
        player.addEffect(new MobEffectInstance(MobEffects.DAMAGE_RESISTANCE, 50, 5))
        // 力量效果
        player.addEffect(new MobEffectInstance(MobEffects.DAMAGE_BOOST, 50, 10))
        // 否侧判断是否拥有 truehero 阶段并且没有作弊
    } else if (!(checkCheat(player, server)) && AStages.playerHasStage("end", player)) {
        // 抗性效果
        player.addEffect(new MobEffectInstance(MobEffects.DAMAGE_RESISTANCE, 50, 4))
        // 力量效果
        player.addEffect(new MobEffectInstance(MobEffects.DAMAGE_BOOST, 50, 8))
        // 生命恢复效果
        player.addEffect(new MobEffectInstance(MobEffects.REGENERATION, 50, 5))
        // 以上条件都不满足则发送文本消息并kill
    } else {
        player.tell(Component.translatable("greedycraft.message.right_clicked.infinity_stone"))
        player.kill()
    }
})
