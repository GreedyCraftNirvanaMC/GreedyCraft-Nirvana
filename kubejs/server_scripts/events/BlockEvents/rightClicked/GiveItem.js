// 方块事件-右键事件
// 此脚本用于空手右键指定方块时给予指定物品
// priority: 50

BlockEvents.rightClicked(event => {
    let block = event.block
    let level = event.level
    let player = event.player

    // 判断玩家的主手是不是空的
    if (player.getMainHandItem() != "minecraft:air") {
        return
    }

    // 判断右键的方块是否在常量列表内
    if (global.VARIABLE_GRASS_LIST.includes(block.getId())) {
        let pos = block.getPos()

        // 破坏右键位置方块
        level.destroyBlock(pos, false)

        // 设置概率为 20%
        if (Math.random() < 0.2) {
            // 给予玩家植物纤维
            player.give("greedycraft:plant_fibre")
        }
    }

    // 判断右键的方块是否在常量列表内
    if (global.VARIABLE_ROCK_LIST.includes(block.getId())) {
        let pos = block.getPos()

        // 破坏右键位置方块
        level.destroyBlock(pos, false)

        // 给予玩家鹅卵石
        player.give("greedycraft:pebble")

        // 由于模组问题右键会导致该方块本身掉落，所以需要取消原本的右键事件
        event.cancel()
    }
})
