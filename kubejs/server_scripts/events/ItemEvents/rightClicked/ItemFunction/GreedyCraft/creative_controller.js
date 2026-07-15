// 物品事件-右键事件
// 此脚本用于实现整合包内自定义物品的功能-创造模式控制器
// priority: 50

ItemEvents.rightClicked("greedycraft:creative_controller", event => {
    let server = event.getServer()
    let player = event.getPlayer()
    let playerName = player.getUsername()

    // 切换为创造模式
    server.runCommandSilent(`gamemode creative ${playerName}`)
    // 输出日志
    console.log(`${playerName} used greedycraft:creative_controller to set their game mode to Creative. Player X:${player.getX()} Y:${player.getY()} Z:${player.getZ()}`)
})
