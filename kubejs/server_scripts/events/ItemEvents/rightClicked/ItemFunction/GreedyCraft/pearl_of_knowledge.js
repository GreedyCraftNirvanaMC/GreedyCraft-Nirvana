// 物品事件-右键事件
// 此脚本用于实现整合包内自定义物品的功能-知识宝珠
// priority: 50

ItemEvents.rightClicked("greedycraft:pearl_of_knowledge", event => {
    let player = event.getPlayer()
    let level = event.getLevel()

    // 给予经验
    player.giveExperiencePoints(60000)

    // 生成粒子
    level.spawnParticles("minecraft:happy_villager", true, player.getX(), player.getY(), player.getZ(), 2.0, 2.0, 2.0, 300, 0.1)

    // 将物品减 1
    event.getItem().shrink(1)
})
