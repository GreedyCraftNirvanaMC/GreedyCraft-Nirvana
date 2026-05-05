// 玩家事件-登录事件
// 此脚本为整合包 Init 系统的第一环，由此为入口触发其余初始化操作
// priority: 50

PlayerEvents.loggedIn(event => {
    let server = event.server
    let player = event.player
    let playerName = player.username

    let messageTitle = Component.translatable("greedycraft.message.playerlogging.system.title")
    let messageText1 = Component.translatable("greedycraft.message.playerlogging.system.text.1").append(Component.literal(player.username).color(0xFFAA00))
    let messageText2 = Component.translatable("greedycraft.message.playerlogging.system.text.2")
    let messageText3 = Component.translatable("greedycraft.message.playerlogging.system.text.3")
    let messageText4 = Component.translatable("greedycraft.message.playerlogging.system.text.4")
    let messageText5 = Component.translatable("greedycraft.message.playerlogging.system.text.5")
    let messageText6 = Component.translatable("greedycraft.message.playerlogging.system.text.6")
    let messageText7 = Component.translatable("greedycraft.message.playerlogging.system.text.7")
    let messageText8 = Component.translatable("greedycraft.message.playerlogging.system.text.8")
    let messageText9 = Component.translatable("greedycraft.message.playerlogging.system.text.9")
    let messageEnd = Component.translatable("greedycraft.message.playerlogging.system.text.end")

    let randomMessage = global.MESSAGE_PLAYERLOGGEDIN[randomInt(0, global.MESSAGE_PLAYERLOGGEDIN.length - 1)]

    let scoreboard = server.scoreboard.getObjective("packinfo")

    let antiCheatMode = KJSutils.Analysis("config/greedycraft/config.json", "$.antiCheatMode")
    let antiCheat = KJSutils.Analysis("config/greedycraft/config.json", "$.antiCheat")

    // 判断玩家是否有 init 阶段
    if (!(AStages.playerHasStage("init", player))) {
        // 没有则是第一次进入游戏，发送消息并触发 Init 操作
        player.tell(messageTitle)
        player.tell(messageText1)
        player.tell(messageText2)
        player.tell(messageText3)
        player.tell(messageText4)
        player.tell(messageText5)
        player.tell(messageText6)
        player.tell(messageText7)
        player.tell(messageText8)
        player.tell(messageText9)
        player.tell(messageEnd)

        // init 进度为所有进度的根进度，也是触发其余初始化条件的入口
        server.runCommandSilent(`advancement grant ${playerName} only greedycraft:stages/init`)
    } else {
        // 从全局变量中随机选一条消息发送
        player.tell(Component.translatable(randomMessage))

        // 判断是否是以创造模式创建的存档
        if (AStages.serverHasStage("init_creative", server)) {
            // 发送消息
            player.tell(Component.translatable("greedycraft.message.creative.text"))
        }

        // 判断反作弊是否开启
        if (antiCheat) {
            player.tell(Component.translatable("greedycraft.message.anticheat.runing.text").append(Component.literal(antiCheatMode)))
        } else {
            player.tell(Component.translatable("greedycraft.message.anticheat.off.text"))
        }

        // 判断是否作弊
        if (checkCheat(player, server)) {
            // 判断作弊类型是否是安装了非官方模组并发送对应消息
            if (checkModList().length != 0) {
                player.tell(Component.translatable("greedycraft.message.cheat.modlist.text"))
                unofficialModList.forEach(modID => player.tell(modID))
                console.warn(`UnofficialModList: ${unofficialModList}`)
            } else {
                // 否则发送默认作弊消息
                player.tell(Component.translatable("greedycraft.message.cheat.text"))
            }
        }

        // 判断是否是 "真英雄"
        if (AStages.playerHasStage("truehero", player) && !(checkCheat(player, server))) {
            player.tell(Component.translatable("greedycraft.message.playerlogging.truehero", Component.literal(player.username).color(0xFFFF55)))
        }
    }

    // 判断是否存在计分板
    if (scoreboard) {
        // 如果存在则删除
        server.runCommandSilent("scoreboard objectives remove packinfo")
    }

    // 创建计分板 *此为自定义函数*
    addScoreBoard(player, server)
})
