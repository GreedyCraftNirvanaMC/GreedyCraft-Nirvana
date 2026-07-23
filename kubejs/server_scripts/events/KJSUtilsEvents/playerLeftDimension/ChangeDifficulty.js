// KJSUtils 事件-玩家退出维度事件
// 此脚本用于在玩家退出指定维度时减少对应难度
// priority: 50

KJSUtilsEvents.playerLeftDimension(event => {
    let player = event.getPlayer()
    let server = player.getServer()
    let playerName = player.getUsername()
    let leftDimension = event.getFrom().location()

    // 获取维度与难度的对应关系
    Object.entries(global.MAP_DIMENSION_DIFFICULTY).forEach(([dimension, difficulty]) => {
        // 判断进入的哪个维度
        if (leftDimension == dimension) {
            // 增加难度，但是难度为负数，所以就变成减了
            server.runCommandSilent(`ps_difficulty add ${playerName} -${difficulty}`)
        }
    })
})
