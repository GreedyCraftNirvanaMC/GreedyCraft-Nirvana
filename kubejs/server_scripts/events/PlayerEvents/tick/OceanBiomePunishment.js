// 玩家事件-tick事件
// 此脚本用于海洋生物群系窒息惩罚
// priority: 50

PlayerEvents.tick(event => {
    let player = event.getPlayer()
    let level = event.getLevel()
    let server = player.getServer()
    let biome = level.getBiome(player.blockPosition())

    let $MobEffectInstance = Java.loadClass("net.minecraft.world.effect.MobEffectInstance")
    let $MobEffects = Java.loadClass("net.minecraft.world.effect.MobEffects")

    // 限制 20 tick 执行一次
    if (server.overworld().time % 20 == 0) {
        // 判断是否在主世界
        if (!(level.isOverworld())) {
            return
        }

        if (!(player.isSpectator())) {
            // 判断生物群系是否是海洋
            if (biome.isTag("c:is_ocean")) {
                // 判断玩家眼睛是否不在水中
                if (!player.isUnderWater()) {
                    // 判断 Y 轴是否小于 40 并且没有水下呼吸效果
                    if (player.y < 40.0 && !(player.hasEffect("minecraft:water_breathing"))) {
                        // 计算“深度”（只在高度低于 40 时才开始计算）
                        // 40 - 当前高度：表示离 40 的距离（越往下数值越大）
                        // Math.max(0, ...)：防止结果为负数（比如玩家在 40 以上时）
                        let depth = Math.max(0, 40 - player.block.getY())

                        // 根据深度计算效果等级
                        // depth / 10：每下降 10 格，等级 +1
                        // Math.floor(...)：向下取整（比如 1.9 → 1，保证等级是整数）
                        // Math.min(10, ...)：限制最大等级为 10，防止效果过强
                        let amplifier = Math.min(10, Math.floor(depth / 10))

                        // 给予玩家凋零效果，持续时间 40 tick，等级为 1 + 玩家当前高度除以 10 - 4 的四舍五入结果
                        player.addEffect(new $MobEffectInstance($MobEffects.WITHER, 40, amplifier))
                        // 给予玩家失明效果，持续时间 40 tick，等级为 1 + 玩家当前高度除以 10 - 4 的四舍五入结果
                        player.addEffect(new $MobEffectInstance($MobEffects.BLINDNESS, 40, amplifier))
                        // 显示警告信息
                        player.setStatusMessage(Component.translatable("greedycraft.message.warn.deep_ocean"))
                    }
                }
            }
        }
    }
})
