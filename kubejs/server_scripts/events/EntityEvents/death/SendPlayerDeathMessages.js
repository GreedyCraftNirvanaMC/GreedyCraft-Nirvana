// 实体事件-死亡事件
// 此脚本用于在玩家死亡时发送自定义消息
// priority: 50

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
        message = message.replace(actual.name.getString(), `§c§n${actual.name.getString()}§7`)
        // 判断是否是被 kill 的
    } else if (source.getType() == "genericKill") {
        message = Component.literal("§c☠ ").append(Component.translatable("greedycraft.messages.death.kill", Component.literal(player.username).color(0xFFAA00).italic())).getString().toString()
    }

    // 向服务器发送自定义死亡消息
    server.tell(Component.literal(message))

    // 从全局变量中随机选一条消息发送
    let MESSAGE_DATA = global.MESSAGE_PLAYER_DEATH[randomInt(0, global.MESSAGE_PLAYER_DEATH.length - 1)]
    player.tell(Component.translatable(MESSAGE_DATA, Component.literal(player.username).color(0xFFAA00).underlined()))
})
