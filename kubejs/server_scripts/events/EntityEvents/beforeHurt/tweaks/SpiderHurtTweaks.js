// 实体事件-受伤前事件
// 此脚本用于调整整合包蜘蛛类生物的伤害
// priority: 50

let MobEffectInstance = Java.loadClass("net.minecraft.world.effect.MobEffectInstance")
let MobEffects = Java.loadClass("net.minecraft.world.effect.MobEffects")

EntityEvents.beforeHurt("minecraft:player", event => {
    let source = event.source
    let entity = event.entity
    let player = event.player
    let level = event.level

    // 判断造成伤害的是否是蜘蛛
    // 防止空指针并判断攻击的对象是否在常量 global.VARIABLE_SPIDER_LIST 中
    if (source.actual && global.VARIABLE_SPIDER_LIST.includes(source.actual.type)) {
        // 判断玩家是否有缓慢效果
        if (player.hasEffect("minecraft:slowness")) {
            // 66% 的概率执行以下操作
            if (Math.random() < 0.66) {
                // 获取缓慢效果等级
                let effectLevel = player.getEffect("minecraft:slowness").amplifier

                // 如果等级小于 3 级
                if (effectLevel < 3) {
                    // 设置累加等级为 1
                    let addEffectLevel = 1

                    // 33% 的概率设置为 2
                    if (Math.random() < 0.33) {
                        addEffectLevel = 2
                    }

                    // 添加累加等级的缓慢效果
                    player.addEffect(new MobEffectInstance(MobEffects.MOVEMENT_SLOWDOWN, 200, effectLevel + addEffectLevel))
                } else {
                    // 添加 4 级的缓慢效果 持续时间 200 tick
                    player.addEffect(new MobEffectInstance(MobEffects.MOVEMENT_SLOWDOWN, 200, 4))
                    // 判断玩家位置的方块是否为空
                    if (level.isEmptyBlock(player.blockPosition())) {
                        // 在玩家位置放置蜘蛛网
                        level.setBlock(player.blockPosition(), "minecraft:cobweb", 3)
                    }
                }
            }
        } else {
            // 没有则直接给予缓慢效果
            player.addEffect(new MobEffectInstance(MobEffects.MOVEMENT_SLOWDOWN, 200, 0))
        }
    }
})
