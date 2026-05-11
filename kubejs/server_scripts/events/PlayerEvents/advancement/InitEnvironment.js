// 玩家事件-进度事件
// 此脚本为整合包 Init 系统的第二环，为游戏提供基础环境与交互
// priority: 50

PlayerEvents.advancement("greedycraft:stages/init", event => {
    let server = event.server
    let player = event.player
    let playerName = player.username

    let scoreboard = server.scoreboard.getObjective("packinfo")

    let packMode = KJSutils.Analysis("config/greedycraft/config.json", "$.packMode")

    // 判断服务器上是否有 init_creative 阶段
    if (AStages.serverHasStage("init_creative", server)) {
        // 给予玩家 init_creative 进度
        server.runCommandSilent(`advancement grant ${playerName} only greedycraft:stages/init_creative`)
        // 给予玩家全部阶段与进度
        givePlayerAllStage(server, player)
        // 如果没有判断服务器上是否有 init_start 阶段
    } else if (AStages.serverHasStage("init_start", server)) {
        // 给予玩家 init_start 进度
        server.runCommandSilent(`advancement grant ${playerName} only greedycraft:stages/init_start`)

        // 如果以上条件全部未达到则判定为这是一个新世界，用以下条件判断
        // 判断玩家是否是创造模式
    } else if (player.isCreative()) {
        // 给予服务器 init_creative 阶段
        AStages.addStageToServer("init_creative", server)
        // 给予玩家 init_creative 进度
        server.runCommandSilent(`advancement grant ${playerName} only greedycraft:stages/init_creative`)
        // 给予玩家全部阶段与进度
        givePlayerAllStage(server, player)
    } else {
        // 给予玩家 init_start 进度
        server.runCommandSilent(`advancement grant ${playerName} only greedycraft:stages/init_start`)
    }

    // 判断整合包模式是否等于 expert 且玩家没有 expert 阶段
    if (packMode == "expert" && !(AStages.playerHasStage("expert", player))) {
        // 给予玩家 expert 进度
        server.runCommandSilent(`advancement grant ${playerName} only greedycraft:stages/expert`)
    }

    // 如果整合包模式不是 expert 但是玩家有 expert 阶段则修正
    if (!(packMode == "expert") && AStages.playerHasStage("expert", player)) {
        // 删除玩家 expert 阶段
        AStages.removeStageFromPlayer("expert", player)
        // 删除玩家进度
        server.runCommandSilent(`advancement revoke ${playerName} only greedycraft:stages/expert`)
    }

    // 判断是否存在计分板
    if (scoreboard) {
        // 如果存在则删除
        server.runCommandSilent("scoreboard objectives remove packinfo")
    }

    // 创建计分板 *此为自定义函数*
    addScoreBoard(player, server)

    // 输出日志
    console.log(`New player ${player.username} joined the game at X:${player.x} Y:${player.y} Z:${player.z}`)
})
