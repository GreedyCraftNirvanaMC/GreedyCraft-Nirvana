// 实体死亡事件

EntityEvents.death("minecraft:player", event => {
    let server = event.server
    let level = event.level
    let source = event.source
    let player = event.player
    let entity = event.entity
    let actual = source.actual

    // 获取原版死亡消息并替换玩家名称样式
    let message = source.getLocalizedDeathMessage(entity).getString().toString().replace(player.username, "§c☠" + ` §e${player.username} ` + "§7")

    // 判断造成死亡的是否是实体
    if (actual) {
        // 判断是否是玩家
        if (actual.isPlayer()) {
            message = message.replace(actual.name.getString(), "☻" + ` §n§e${actual.name.getString()} ` + "§7")
        } else {
            message = message.replace(actual.name.getString(), "§c" + ` §n§e${actual.name.getString()} ` + "§7")
        }
    }

    // 向服务器发送自定义死亡消息
    server.tell(Component.literal(message))

    // 判断攻击来源是否是以下 boss
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
})
