// priority: 100

// 创建初始计分板
PlayerEvents.loggedIn(event => {
    let player = event.player
    let server = event.server
    
    let scoreboard = server.scoreboard.getObjective("packinfo")

    // 判断当前是否存在计分板
    if (scoreboard) {
        // 如果存在则删除
        server.runCommandSilent("scoreboard objectives remove packinfo")
    }

    // 创建计分板
    addScoreBoard(player, server)
})