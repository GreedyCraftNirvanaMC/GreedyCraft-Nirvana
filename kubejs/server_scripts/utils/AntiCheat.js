// priority: 32767

// 函数：检查是否有非官方模组，返回非官方模组列表
function checkModList() {
    let unofficialModList = []

    // 获取模组列表
    Platform.mods.forEach((MOD_ID, MOD_INFO) => {
        // 判断模组是否在全局变量 modList 中
        if (!(global.VARIABLE_OFFICIAL_MOD_LIST.has(MOD_ID))) {
            // 不在则是非官方模组，添加到数组 MOD_ID
            unofficialModList.push(MOD_ID)
        }
    })

    // 返回数组
    return unofficialModList
}

// 函数：检查是否作弊，返回布尔值。要求提供 event.player 和 event.server 两个形参
function checkCheat(player, server) {
    let unofficialModList = checkModList()

    // 检查是否有非官方模组
    if (unofficialModList.length > 0) {
        // 返回结果
        return true
    }
    
    // 判断玩家是否是创造模式
    if (player.isCreative()) {
        // 判断服务器是否没有 init_creative 阶段并且玩家没有 graduated 阶段
        if (!(AStages.serverHasStage("init_creative", server)) && !(AStages.playerHasStage("graduated", player))) {
            // 输出日志
            console.warn(`${player.username} is in a cheating state`)
            // 返回结果
            return true
        }
    }

    // 返回结果
    return false
}
