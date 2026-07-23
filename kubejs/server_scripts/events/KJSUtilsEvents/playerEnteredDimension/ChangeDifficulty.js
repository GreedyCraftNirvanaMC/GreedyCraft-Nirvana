// KJSUtils 事件-玩家进入维度事件
// 此脚本用于在玩家进入指定维度时增加对应难度
// priority: 50

KJSUtilsEvents.playerEnteredDimension(event => {
    let player = event.getPlayer()
    let server = player.getServer()
    let playerName = player.getUsername()
    let enteredDimension = event.getTo().location()

    // 获取维度与难度的对应关系
    Object.entries(global.MAP_DIMENSION_DIFFICULTY).forEach(([dimension, difficulty]) => {
        // 判断进入的哪个维度
        if (enteredDimension == dimension) {
            // 增加难度
            server.runCommandSilent(`ps_difficulty add ${playerName} ${difficulty}`)
        }
    })
})
