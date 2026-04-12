// priority: 200

// 进入游戏是发送初始消息
PlayerEvents.loggedIn(event => {
    let player = event.player
    let server = event.server

    let cheat = checkCheat(player, server)

    let antiCheatMode = KJSutils.Analysis("config/greedycraft/config.json", "$.antiCheatMode")
    let antiCheat = KJSutils.Analysis("config/greedycraft/config.json", "$.antiCheat")

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

    let unofficialModList = checkModList()
    // 判断玩家是否没有 init 阶段
    if (!(AStages.playerHasStage("init", player))) {
        // 没有则是第一次进入游戏，发送消息
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
    } else {
        // 从全局变量中随机选一条消息发送
        let message = global.playerLogging_Message[randomInt(0, global.playerLogging_Message.length - 1)]
        player.tell(Component.translatable(message))
    }

    // 判断是否是以创造模式创建的存档
    if (AStages.serverHasStage("init_creative", server)) {
        // 发送消息
        player.tell(Component.translatable("greedycraft.message.creative.text"))
        // 保险
    } else if (!(AStages.serverHasStage("init_start", server))) {
        if (player.isCreative()) {
            player.tell(Component.translatable("greedycraft.message.creative.text"))
        }
    }

    // 判断反作弊是否开启
    if (antiCheat) {
        player.tell(Component.translatable("greedycraft.message.anticheat.runing.text").append(Component.literal(antiCheatMode)))
    } else {
        player.tell(Component.translatable("greedycraft.message.anticheat.off.text"))
    }

    // 判断是否作弊
    if (cheat) {
        // 判断作弊类型是否是安装了非官方模组并发送对应消息
        if (unofficialModList.length != 0) {
            player.tell(Component.translatable("greedycraft.message.cheat.modlist.text"))
            unofficialModList.forEach(modID => player.tell(modID))
            console.warn(`UnofficialModList: ${unofficialModList}`)
        } else if (!(AStages.serverHasStage("init_creative", server)) || !(AStages.playerHasStage("init", player))) {
            // 否则发送默认作弊消息
            player.tell(Component.translatable("greedycraft.message.cheat.text"))
        }
    }

    // 判断是否是 "真英雄"
    if (AStages.playerHasStage("truehero", player) && !(cheat)) {
        player.tell(Component.translatable("greedycraft.message.playerlogging.truehero"))
    }
})
