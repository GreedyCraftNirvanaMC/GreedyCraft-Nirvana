// 实体事件-受伤前事件
// 此脚本用于调整整合包的各种伤害
// priority: 50

let MobEffectInstance = Java.loadClass("net.minecraft.world.effect.MobEffectInstance")
let MobEffects = Java.loadClass("net.minecraft.world.effect.MobEffects")
let PsAttachmentTypes = Java.loadClass("net.silentchaos512.powerscale.setup.PsAttachmentTypes")

EntityEvents.beforeHurt(event => {
    let entity = event.entity
    let source = event.source
    let server = event.server
    let player = event.player
    let level = event.level

    // 判断受伤实体是否是亡灵生物
    if (entity.isUndead()) {
        // 判断伤害类型是否是火焰
        if (source.getType() == "inFire" || source.getType() == "onFire" || source.getType() == "lava") {
            // 判断实体是否能看见天空且时间是白天且不是 Boss
            if (entity.level.canSeeSky(entity.pos) && entity.level.isDay() && !(global.VARIABLE_BOSS_LIST.includes(entity.type))) {
                // 设置火焰伤害为加上该实体最大血量的二十分之一
                event.setDamage(event.damage + entity.getMaxHealth() / 20.0)
            }
        }
    }

    // 判断伤害类型是否是荆棘
    if (source.getType() == "thorns") {
        // 判断造成伤害的是否是玩家
        if (source.player) {
            // 如果反弹的伤害大于 50 则设置伤害为 50
            if (event.damage > 50.0) {
                event.setDamage(50.0)
            }
            // 如果造成的伤害大于实体最大生命值的 5% 则设置伤害为该实体最大生命值的 5%
            if (event.damage > entity.getMaxHealth() * 0.05) {
                event.setDamage(entity.getMaxHealth() * 0.05)
            }
            // 如果实体是 Boss 则取消受伤
            if (global.VARIABLE_BOSS_LIST.includes(entity.type)) {
                event.cancel()
            }
        }
    }

    // 判断造成伤害的是否是蜘蛛
    // source.actual 是为防止空指针，此注释只出现一次
    if (source.actual && global.VARIABLE_SPIDER_LIST.includes(source.actual.type)) {
        // 如果受伤的不是玩家则直接返回
        if (!(entity.isPlayer())) {
            return
        }

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
                    if (level.getBlock(player.pos).getBlock().isEmpty()) {
                        // 在玩家位置放置蜘蛛网
                        level.setBlock(player.pos, "minecraft:cobweb", 3)
                    }
                }
            }
        } else {
            player.addEffect(new MobEffectInstance(MobEffects.MOVEMENT_SLOWDOWN, 200, 0))
        }
    }

    // 判断伤害类型是否是爆炸伤害
    if (source.getType() == "explosion.player") {
        // 判断玩家是否有 nether 阶段
        if (AStages.playerHasStage(player, "nether")) {
            // 设置伤害为 2.5 倍
            event.setDamage(event.damage * 2.5)
        }

        // 判断玩家是否有 hardmode 阶段
        if (AStages.playerHasStage(player, "hardmode")) {
            // 设置伤害为 3.0 倍
            event.setDamage(event.damage * 3.0)
        }
    }

    // 判断伤害类型是否是箭矢
    if (source.getType() == "arrow" || source.getType() == "twilightforest.leafBrain") {
        // 排除 Boss
        if (source.actual && !(global.VARIABLE_BOSS_LIST.includes(source.actual.type))) {
            // 根据游戏难度设置伤害
            event.setDamage(event.damage * (1.0 + 0.003 * entity.getData(PsAttachmentTypes.DIFFICULTY)))
            // 如果造成伤害的是骷髅类实体则伤害翻倍
            if (source.actual && global.VARIABLE_SKELETON_LIST.includes(source.actual.type)) {
                event.setDamage(event.damage * 2.0)
            }
        }
    }

    // 判断造成伤害的是否是 Boss 并且不在黑名单中
    if (source.actual && global.VARIABLE_BOSS_LIST.includes(source.actual.type) && !(global.VARIABLE_DAMAGE_BLACK_LIST.includes(source.actual.type))) {
        // 根据难度设置伤害
        event.setDamage(event.damage * (1.0 + 0.0032 * entity.getData(PsAttachmentTypes.DIFFICULTY)))
    }
})
