// priority: 32767

/**
 * 获取用于计分板的游戏模式项文本
 * 
 * @param {string} packMode - 整合包模式
 * @param {import("@package/net/minecraft/server/level").$ServerPlayer} player - 玩家对象
 * @param {import("@package/net/minecraft/server").$MinecraftServer} server - 服务器对象
 * @returns {import("@package/net/minecraft/network/chat").$MutableComponent} 计分板游戏模式项文本
 */
function getScoreBoardgameModeText(packMode, player, server) {
    let gameModeText = Component.translatable(`greedycraft.packmode.${packMode}`).append(Component.translatable("greedycraft.scoreboard.packmode.name"))

    // 判断是否作弊 *此为自定义函数*
    if (checkCheat(player, server)) {
        // 判断整合包模式是否等于休闲模式
        if (packMode == "casual") {
            // 判断是否存在非官方模组 *此为自定义函数*
            if (checkModList().length > 0) {
                // 休闲模式只在存在非官方模组时才判定为作弊
                gameModeText = gameModeText.append(Component.literal("·").color(0xAAAAAA)).append(Component.translatable("greedycraft.scoreboard.packmode.cheat"))
            }
        } else {
            gameModeText = gameModeText.append(Component.literal("·").color(0xAAAAAA).append(Component.translatable("greedycraft.scoreboard.packmode.cheat")))
        }
        // 判断是否是以创造模式创建的存档
    } else if (AStages.serverHasStage("init_creative", server)) {
        gameModeText = gameModeText.append(Component.literal("·").color(0xAAAAAA).append(Component.translatable("greedycraft.scoreboard.packmode.creative")))
    }

    // 返回
    return gameModeText
}

/**
 * 创建计分板
 * 
 * @param {import("@package/net/minecraft/server/level").$ServerPlayer} player - 玩家对象
 * @param {import("@package/net/minecraft/server").$MinecraftServer} server - 服务器对象
 */
function addScoreBoard(player, server) {
    let packMode = KJSutils.Analysis("config/greedycraft/config.json", "$.packMode")
    let packName = Component.translatable("greedycraft.modpack.name").append(Component.literal(` v${global.LOCAL_PACKVERSION_NAME}`).color(0x55FF55).bold()).getString()
    let original = Component.translatable("greedycraft.scoreboard.original").getString()
    let author = Component.translatable("greedycraft.scoreboard.author").getString()

    // 获取计分板的游戏模式项文本 *此为自定义函数*
    let gameModeText = getScoreBoardgameModeText(packMode, player, server).getString()

    // 创建计分板
    server.runCommandSilent(`scoreboard objectives add packinfo dummy "${packName}"`)
    server.runCommandSilent("scoreboard objectives modify packinfo numberformat blank")
    server.runCommandSilent("scoreboard players set original packinfo 4")
    server.runCommandSilent("scoreboard players set author packinfo 3")
    server.runCommandSilent("scoreboard players set air packinfo 2")
    server.runCommandSilent("scoreboard players set gamemode packinfo 1")
    server.runCommandSilent(`scoreboard players display name original packinfo "${original}"`)
    server.runCommandSilent(`scoreboard players display name author packinfo "${author}"`)
    server.runCommandSilent('scoreboard players display name air packinfo ""')
    server.runCommandSilent(`scoreboard players display name gamemode packinfo "${gameModeText}"`)
    server.runCommandSilent("scoreboard objectives setdisplay sidebar packinfo")
}
