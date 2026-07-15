// 物品事件-右键事件
// 此脚本用于实现整合包内自定义物品的功能-贤者之石 [赝品]
// priority: 50

ItemEvents.rightClicked("greedycraft:fake_philosopher_stone", event => {
    let block = event.getTarget().block
    let level = event.getLevel()
    let player = event.getPlayer()

    // 判断右键的方块是否是沙子
    if (block && block.getId() == "minecraft:sand") {
        // 破坏原本的方块
        level.destroyBlock(block.getPos(), false)
        // 重新设置为玻璃
        level.setBlock(block.getPos(), "minecraft:glass", 3)
        // 输出日志
        console.debug(`${player.getUsername()} used greedycraft:fake_philosopher_stone to convert the sand at ${block.getX()} ${block.getY()} ${block.getZ()} into glass. Player X:${player.getX()} Y:${player.getY()} Z:${player.getZ()}`)
    }
})
