// KJSUtils 事件-玩家退出维度事件
// 此脚本用于在玩家退出指定维度时减少对应难度
// priority: 50

KJSutilEvents.playerLoggedOutDimension(event => {
    let server = event.player.server
    let player = event.player
    let playerName = player.username
    let loggedOutDimension = event.loggedOut

    Object.entries(global.MAP_DIMENSION_DIFFICULTY).forEach(([dimension, difficulty]) => {
        if (loggedOutDimension == dimension) {
            // 增加难度，但是难度为负数，所以就变成减了
            server.runCommandSilent(`ps_difficulty add ${playerName} -${difficulty}`)
        }
    })
})
