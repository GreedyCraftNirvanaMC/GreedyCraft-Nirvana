// 物品事件-右键事件
// 此脚本用于实现整合包内自定义物品的功能-通行令牌
// priority: 50

ItemEvents.rightClicked("greedycraft:passport", event => {
    let player = event.player
    let server = event.server

    // 给予全部阶段与进度
    givePlayerAllStage(server, player)
})
