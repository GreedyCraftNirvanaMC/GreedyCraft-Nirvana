// 实体死亡事件

EntityEvents.death("minecraft:player", event => {
    let server = event.server
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
})
