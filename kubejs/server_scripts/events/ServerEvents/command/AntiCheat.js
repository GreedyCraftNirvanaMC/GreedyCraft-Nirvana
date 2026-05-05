// 服务器事件-命令事件
// 此脚本用于反作弊系统
// priority: 50

ServerEvents.command(event => {
    let command = event.commandName
    let commandSource = event.parseResults.context.source
    let player = commandSource.player
    let server = commandSource.server

    // 拦截功能不应随着游戏模式切换而热切换
    let antiCheatMode = global.ANTI_CHEAT_MODE
    let antiCheat = global.ANTI_CHEAT

    // 判断执行命令的是否是玩家
    if (commandSource.isPlayer()) {
        let playerUUID = player.uuid.toString()
        let playerName = player.username
        // 判断玩家 UUID 是否在开发者列表之外
        if (!(global.VARIABLE_CREATOR_LIST.includes(playerUUID))) {
            // 判断是否是以创造模式创建的存档
            if (!(AStages.serverHasStage("init_creative", server))) {
                // 判断反作弊是否开启
                if (antiCheat) {
                    // 判断反作弊模式是否为冒险模式
                    if (antiCheatMode == "adventure") {
                        // 判断执行的命令是否在黑名单里
                        if (global.VARIABLE_COMMANDBLACK_LIST.includes(command)) {
                            // 发送消息并取消
                            player.tell(Component.translatable("greedycraft.message.anticheat.text").append(Component.literal(command)))
                            console.warn(`The Player Tried to Execute an Illegal Command: ${command}.\nPlayer Name: ${playerName}\nPlayer UUID: ${playerUUID}`)
                            event.cancel()
                        }
                        // 判断反作弊模式模式是否为专家模式
                    } else if (antiCheatMode == "expert") {
                        // 判断执行的命令是否不在白名单里
                        if (!(global.VARIABLE_COMMANDWHITE_LIST.includes(command))) {
                            // 发送消息并取消
                            player.tell(Component.translatable("greedycraft.message.anticheat.text").append(Component.literal(command)))
                            console.warn(`The Player Tried to Execute an Illegal Command: ${command}.\nPlayer Name: ${playerName}\nPlayer UUID: ${playerUUID}`)
                            event.cancel()
                        }
                    }
                }
            }
        }
    }
})
