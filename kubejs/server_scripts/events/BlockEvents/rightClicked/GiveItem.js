// 方块事件-右键事件
// 此脚本用于空手右键指定方块时给予指定物品
// priority: 50

BlockEvents.rightClicked(event => {
    let block = event.block
    let level = event.level
    let player = event.player

    if (player.getMainHandItem() != "minecraft:air") {
        return
    }

    if (global.VARIABLE_GRASS_LIST.includes(block.getId())) {
        let pos = block.getPos()

        level.destroyBlock(pos, false)

        if (Math.random() < 0.2) {
            player.give("greedycraft:plant_fibre")
        }
    }

    if (global.VARIABLE_ROCK_LIST.includes(block.getId())) {
        let pos = block.getPos()

        level.destroyBlock(pos, false)

        player.give("greedycraft:pebble")
        event.cancel()
    }
})
