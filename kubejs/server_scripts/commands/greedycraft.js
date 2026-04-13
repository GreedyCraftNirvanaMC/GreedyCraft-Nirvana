// 注册切换整合包专属命令

// 注册主命令
ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event
    event.register(
        // 命令名称
        Commands.literal("greedycraft")
            // 子参数
            .then(
                // 修改整合包模式
                Commands.literal("setpackmode").requires(source => source.hasPermission(4))
                    // 子参数
                    .then(
                        // 创建名为 packmode 的 String 类型参数输入
                        Commands.argument("packmode", Arguments.STRING.create(event))
                            // 补全提示
                            .suggests((ctx, builder) => {
                                return builder
                                    .suggest("casual")
                                    .suggest("adventure")
                                    .suggest("expert")
                                    .buildFuture()
                            })
                            // 执行操作
                            .executes(ctx => {
                                let options = Arguments.STRING.getResult(ctx, "packmode")
                                let server = ctx.source.server
                                let player = ctx.source.player
                                let playerName = player.username

                                // 从配置文件获取 packMode 的值
                                let packMode = KJSutils.Analysis("config/greedycraft/config.json", "$.packMode")

                                // 对比配置文件中的值和此次要更改的值是否一致
                                if (packMode == options) {
                                    // 一致则直接 retrun
                                    player.tell(Component.translatable("greedycraft.commands.setpackmode.noupdate"))
                                    return 1
                                }

                                // 不应在游戏内切换游戏模式为休闲
                                if (options == "casual") {
                                    player.tell(Component.translatable("greedycraft.commands.setpackmode.casual"))
                                    return 1
                                }

                                if (options == "expert") {
                                    if (!(Platform.isClientEnvironment())) {
                                        let players = server.players
                                        players.forEach(player => {
                                            AStages.addStageToPlayer("expert", player)
                                        })
                                    } else {
                                        AStages.addStageToPlayer("expert", player)
                                    }
                                }

                                if (options == "adventure") {
                                    if (!(Platform.isClientEnvironment())) {
                                        let players = server.players
                                        players.forEach(player => {
                                            if (AStages.playerHasStage("expert", player)) {
                                                server.runCommandSilent(`advancement revoke ${playerName} only greedycraft:stages/expert`)
                                                AStages.removeStageFromPlayer("expert", player)
                                            }
                                        })
                                    } else {
                                        server.runCommandSilent(`advancement revoke ${playerName} only greedycraft:stages/expert`)
                                        AStages.removeStageFromPlayer("expert", player)
                                    }
                                }

                                // 发送服务器消息
                                server.tell(Component.translatable("greedycraft.commands.setpackmode", Component.literal(player.username).color(0xFFAA00)).append(Component.translatable(`greedycraft.packmode.${options}`)))

                                // 修改配置文件的值
                                KJSutils.ModifyJsonValue("config/greedycraft/config.json", "$.packMode", options)

                                // 热重载
                                server.runCommandSilent("reload")

                                // 更改计分板
                                let gameMode = getScoreBoardGameMode(options, player, server).getString()
                                server.runCommandSilent(`scoreboard players display name gamemode packinfo "${gameMode}"`)

                                server.tell(Component.translatable("greedycraft.commands.setpackmode.success").append(Component.translatable(`greedycraft.packmode.${options}`)))
                                return 1
                            })
                    )
            )
            // 子参数
            .then(
                // 隐藏计分板
                Commands.literal("showscoreboard").requires(source => source.hasPermission(4))
                    .then(
                        // 创建名为 boolean 的 Boolean 类型参数输入
                        Commands.argument("boolean", Arguments.BOOLEAN.create(event))
                            // 执行操作
                            .executes(ctx => {
                                let options = Arguments.BOOLEAN.getResult(ctx, "boolean")
                                let server = ctx.source.server
                                let player = ctx.source.player

                                // 获取计分板项
                                let scoreboard = server.scoreboard.getObjective("packinfo")

                                // 判断是显示还是隐藏
                                if (options) {
                                    // 判空
                                    if (scoreboard) {
                                        player.tell(Component.translatable("greedycraft.message.showscoreboard.display"))
                                    } else {
                                        addScoreBoard(player, server)
                                        server.tell(Component.translatable("greedycraft.message.showscoreboard.show", Component.literal(player.username).color(0xFFAA00)))
                                    }
                                } else {
                                    if (scoreboard) {
                                        server.scoreboard.removeObjective(scoreboard)
                                        server.tell(Component.translatable("greedycraft.message.showscoreboard.hide", Component.literal(player.username).color(0xFFAA00)))
                                    } else {
                                        player.tell(Component.translatable("greedycraft.message.showscoreboard.null"))
                                    }
                                }
                                return 1
                            })
                    )
            )
            .then(
                Commands.literal("suicide")
                    .executes(ctx => {
                        let options = Arguments.PLAYER.getResult(ctx, "player")
                        let source = ctx.source

                        if (!(source.isPlayer())) {
                            source.sendSystemMessage(Component.translatable("greedycraft.commands.suicide.execute_notplayer"))
                            return 1
                        }

                        source.player.kill()
                        return 1
                    })
            )
    )
})