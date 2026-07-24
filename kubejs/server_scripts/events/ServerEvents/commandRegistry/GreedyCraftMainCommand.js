// 服务器事件-命令注册事件
// 此脚本用于注册整合包主命令 greedycraft
// priority: 50

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
                                let server = ctx.getSource().getServer()
                                let player = ctx.getSource().getPlayer()
                                let playerName = player.getUsername()

                                // 从配置文件获取 packMode 的值
                                let packMode = KJSutilsCommon.getJsonStringValue("config/greedycraft/config.json", "packMode")

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

                                // 判断游戏模式是否是专家
                                if (options == "expert") {
                                    let players = server.getPlayers()
                                    // 给服务器上所有玩家 expert 进度
                                    players.forEach(player => {
                                        server.runCommandSilent(`advancement grant ${playerName} only greedycraft:stages/expert`)
                                    })
                                }

                                // 判断游戏模式是否是冒险
                                if (options == "adventure") {
                                    let players = server.getPlayers()
                                    // 清除多余信息
                                    players.forEach(player => {
                                        // 如果玩家有 expert 阶段
                                        if (AStages.playerHasStage("expert", player)) {
                                            // 删除 expert 进度
                                            server.runCommandSilent(`advancement revoke ${playerName} only greedycraft:stages/expert`)
                                            // 删除玩家 expert 阶段
                                            AStages.removeStageFromPlayer("expert", player)
                                        }
                                    })
                                }

                                // 发送服务器消息
                                server.tell(Component.translatable("greedycraft.commands.setpackmode", Component.literal(player.getUsername()).color(0xFFAA00)).append(Component.translatable(`greedycraft.packmode.${options}`)))

                                // 修改配置文件的值
                                KJSutilsCommon.ModifyJsonValue("config/greedycraft/config.json", "packMode", options, true)

                                // 热重载
                                server.runCommandSilent("reload")

                                // 更改计分板
                                let gameMode = getScoreBoardGameMode(options, player, server).getString()
                                server.runCommandSilent(`scoreboard players display name gamemode packinfo "${gameMode}"`)

                                // 发送消息
                                server.tell(Component.translatable("greedycraft.commands.setpackmode.success").append(Component.translatable(`greedycraft.packmode.${options}`)))
                                
                                // 输出日志
                                console.warn(`${playerName} set the modpack mode to ${options}`)
                                
                                // 返回
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
                                let server = ctx.getSource().getServer()
                                let player = ctx.getSource().getPlayer()

                                // 获取计分板项
                                let scoreboard = server.scoreboard.getObjective("packinfo")

                                // 判断是显示还是隐藏
                                if (options) {
                                    // 判空
                                    if (scoreboard) {
                                        // 发送消息
                                        player.tell(Component.translatable("greedycraft.message.showscoreboard.display"))
                                    } else {
                                        // 添加计分板
                                        addScoreBoard(player, server)
                                        // 发送消息
                                        server.tell(Component.translatable("greedycraft.message.showscoreboard.show", Component.literal(player.getUsername()).color(0xFFAA00)))
                                    }
                                } else {
                                    // 判空
                                    if (scoreboard) {
                                        // 删除计分板
                                        server.scoreboard.removeObjective(scoreboard)
                                        // 发送消息
                                        server.tell(Component.translatable("greedycraft.message.showscoreboard.hide", Component.literal(player.getUsername()).color(0xFFAA00)))
                                    } else {
                                        // 发送消息
                                        player.tell(Component.translatable("greedycraft.message.showscoreboard.null"))
                                    }
                                }
                                // 返回
                                return 1
                            })
                    )
            )
            .then(
                // 自杀
                Commands.literal("suicide")
                    .executes(ctx => {
                        let source = ctx.getSource()

                        // 判断执行命令的是否是玩家
                        if (!(source.isPlayer())) {
                            // 向执行者发送消息
                            source.sendSystemMessage(Component.translatable("greedycraft.commands.suicide.execute_notplayer"))
                            //返回
                            return 1
                        }

                        // 击杀玩家
                        source.getPlayer().kill()
                        // 返回
                        return 1
                    })
            )
            .then(
                // 清理垃圾
                Commands.literal("purge").requires(source => source.hasPermission(4))
                    .executes(ctx => {
                        let source = ctx.getSource()
                        let server = source.getServer()
                        let player = source.getPlayer()
                        let playerName = player.getUsername()

                        // 判断执行命令的是否是玩家
                        if (!(source.isPlayer())) {
                            // 不是则设置名称为 Server
                            playerName = "Server"
                        }

                        // 发送消息
                        server.tell(Component.translatable("greedycraft.message.right_clicked.item_purger", Component.literal(playerName).color(0xFFAA00).bold()))
                        // 清理凋落物
                        cleanServerDroppedItem(server)
                        return 1
                    })
            )
    )
})
