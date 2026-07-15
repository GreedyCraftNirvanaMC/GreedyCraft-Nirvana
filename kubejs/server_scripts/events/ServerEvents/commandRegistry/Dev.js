// 服务器事件-命令注册事件
// 此脚本用于注册整合包开发用命令 gctdev
// priority: 50

ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event
    event.register(
        Commands.literal("gctdev")
            .then(
                Commands.literal("showmodlist").requires(source => global.VARIABLE_CREATOR_LIST.includes(source.getPlayer().getUuid().toString()))
                    .executes(ctx => {
                        Platform.mods.forEach((MOD_ID, MOD_INFO) => {
                            console.log('"' + MOD_ID + '"')
                        })
                        return 1
                    })
            )
    )
})
