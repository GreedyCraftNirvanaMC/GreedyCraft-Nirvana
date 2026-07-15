// 实体事件-死亡事件
// 此脚本用于在指定 Boss 死亡时根据条件判断是否清除
// priority: 50

EntityEvents.death("minecraft:player", event => {
    let source = event.getSource()
    let actual = source.getActual()
    let server = event.getServer()
    let level = event.getLevel()
    let player = event.getPlayer()

    if (actual && actual.isLiving()) {
        if (actual.getType() == "mowziesmobs:frostmaw" || actual.getType() == "mowziesmobs:umvuthi" || actual.getType() == "twilightforest:alpha_yeti") {
            // 将范围设置为以玩家为中心周围 20 格
            let box = player.getBoundingBox().inflate(20.0)

            // 获取该 20 格内的所有实体列表
            let entitys = level.getEntitiesWithin(box)

            // 设置基础数量为 0
            let count = 0

            // 遍历实体列表
            entitys.forEach(e => {
                // 判断实体是否是玩家
                if (e.getType() == "minecraft:player") {
                    // 自增加
                    count++
                }
            })

            // 如果玩家数量不大于一
            if (!(count > 1)) {
                // 删除实体
                actual.discard()
                // 输出日志
                console.log(`The boss ${actual.getType()} has been removed because there were no other players nearby. Entity X:${actual.getX()} Y:${actual.getY()} Z:${actual.getZ()}`)
            }
        }
    }
})
