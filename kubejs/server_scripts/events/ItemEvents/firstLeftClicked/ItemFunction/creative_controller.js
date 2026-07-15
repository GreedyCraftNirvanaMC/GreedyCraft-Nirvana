// 物品事件-首次左键事件
// 此脚本用于实现整合包内自定义物品的功能-创造模式控制器
// priority: 50

ItemEvents.firstLeftClicked("greedycraft:creative_controller", event => {
    let server = event.getServer()
    let player = event.getPlayer()
    let playerName = player.getUsername()

    // 切换生存模式
    server.runCommandSilent(`gamemode survival ${playerName}`)
    // 输出日志
    console.log(`${playerName} used greedycraft:creative_controller to set their game mode to Survival. Player X:${player.getX()} Y:${player.getY()} Z:${player.getZ()}`)
})
