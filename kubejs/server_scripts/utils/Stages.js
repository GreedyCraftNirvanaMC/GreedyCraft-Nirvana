// priority: 1000

/**
 * 给玩家添加所有阶段与进度
 * 
 * @param {import("@package/net/minecraft/server").$MinecraftServer} server - 服务器对象
 * @param {import("@package/net/minecraft/server/level").$ServerPlayer} player - 玩家对象
 */
function givePlayerAllStage(server, player) {
    let playerName = player.getUsername()

    Object.entries(global.MAP_STAGE_LIST).forEach(([stageName, data]) => {
        server.runCommandSilent(`advancement grant ${playerName} only greedycraft:stages/${stageName}`)
    })
}

/**
 * 删除玩家所有阶段与进度
 * 
 * @param {import("@package/net/minecraft/server").$MinecraftServer} server - 服务器对象
 * @param {import("@package/net/minecraft/server/level").$ServerPlayer} player - 玩家对象
 */
function removePlayerAllStage(server, player) {
    let playerName = player.getUsername()

    Object.entries(global.MAP_STAGE_LIST).forEach(([stageName, data]) => {
        server.runCommandSilent(`advancement revoke ${playerName} only greedycraft:stages/${stageName}`)
        AStages.removeStageFromPlayer(stageName, player)
    })
}
