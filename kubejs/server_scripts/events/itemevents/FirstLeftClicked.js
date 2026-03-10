// 物品首次左键事件

// 难度调节器
ItemEvents.firstLeftClicked("greedycraft:difficulty_changer", event => {
    let server = event.server
    let playerName = event.player.username

    // 减少10难度
    server.runCommandSilent(`ps_difficulty add ${playerName} -10`)
})

// 创造模式控制器
ItemEvents.firstLeftClicked("greedycraft:creative_controller", event => {
    let server = event.server
    let playerName = event.player.username

    // 切换生存模式
    server.runCommandSilent(`gamemode survival ${playerName}`)
})

ItemEvents.firstLeftClicked("greedycraft:emergency_button", event => {
    let server = event.server
    let player = event.player
    let level = event.level

    level.entities.forEach(entity => {
        if (entity.isMonster() && !(entity.isPlayer())) {
            entity.discard()
        }
    })

    player.removeAllEffects()

    server.tell(Component.translatable("greedycraft.message.firstleftclicked.emergency_button", Component.literal(player.username).color(0xFFFF55).bold(), Component.literal(level.displayName).color(0xFF55FF).bold()))

    event.item.shrink(1)
})