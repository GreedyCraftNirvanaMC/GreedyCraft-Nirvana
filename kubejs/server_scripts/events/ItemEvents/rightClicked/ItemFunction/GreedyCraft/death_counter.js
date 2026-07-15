// 物品事件-右键事件
// 此脚本用于实现整合包内自定义物品的功能-死亡计数器
// priority: 50

ItemEvents.rightClicked("greedycraft:death_counter", event => {
    let player = event.getPlayer()

    // 显示死亡计分板
    player.runCommandSilent("deathcounter broadcast")
})
