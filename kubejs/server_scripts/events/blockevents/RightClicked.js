// 方块右键事件

BlockEvents.rightClicked(event => {
    let block = event.block
    let level = event.level
    let player = event.player

    if (global.grassList.has(block.getId())) {
        let pos = block.getPos()

        level.destroyBlock(pos, false)

        if (Math.random() < 0.2) {
            player.give("greedycraft:plant_fibre")
        }
    }

    if (global.rockList.has(block.getId())) {
        let pos = block.getPos()

        level.destroyBlock(pos, false)

        player.give("greedycraft:pebble")
    }
})
