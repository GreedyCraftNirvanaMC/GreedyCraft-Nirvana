// 物品事件-首次左键事件
// 此脚本用于实现整合包内自定义物品的功能-难度调节器
// priority: 50

ItemEvents.firstLeftClicked("greedycraft:difficulty_changer", event => {
    let server = event.getServer()
    let player = event.getPlayer()
    let playerName = player.getUsername()

    // 减少10难度
    server.runCommandSilent(`ps_difficulty add ${playerName} -10`)
    // 输出日志
    console.log(`${playerName} used greedycraft:difficulty_changer to lower their own difficulty by 10. Player X:${player.getX()} Y:${player.getY()} Z:${player.getZ()}`)
})
