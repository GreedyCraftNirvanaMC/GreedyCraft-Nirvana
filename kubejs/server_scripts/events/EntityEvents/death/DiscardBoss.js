// 实体事件-死亡事件
// 此脚本用于在指定 Boss 死亡时根据条件判断是否清除
// priority: 50

EntityEvents.death("minecraft:player", event => {
    let source = event.source
    let actual = source.actual
    let server = event.server
    let level = event.level
    let player = event.player

    if (actual && actual.isLiving()) {
        if (actual.type == "mowziesmobs:frostmaw" || actual.type == "mowziesmobs:umvuthi" || actual.type == "twilightforest:alpha_yeti") {
            // 将范围设置为以玩家为中心周围 20 格
            let box = player.boundingBox.inflate(20.0)

            // 获取该 20 格内的所有实体列表
            let entitys = level.getEntitiesWithin(box)

            // 设置基础数量为 0
            let count = 0

            // 遍历实体列表
            entitys.forEach(e => {
                // 判断实体是否是玩家
                if (e.type == "minecraft:player") {
                    // 自增加
                    count++
                }
            })

            // 如果玩家数量不大于一
            if (!(count > 1)) {
                // 删除实体
                actual.discard()
            }
        }
    }
})
