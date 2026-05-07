// 物品事件-右键事件
// 此脚本用于实现整合包内自定义物品的功能-难度调节器
// priority: 50

ItemEvents.rightClicked("greedycraft:difficulty_changer", event => {
    let server = event.server
    let playerName = event.player.username

    // 增加10难度
    server.runCommandSilent(`ps_difficulty add ${playerName} 10`)
    // 输出日志
    console.log(`${playerName} used greedycraft:difficulty_changer to increase their own difficulty by 10. Player X:${player.x} Y:${player.y} Z:${player.z}`)
})
