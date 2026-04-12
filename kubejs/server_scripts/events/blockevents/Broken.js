// 方块被破坏事件

BlockEvents.broken(event => {
    let level = event.level
    let block = event.block
    let biome = level.getBiome(block.getPos())

    // 判断是不是玩家破坏的
    if (!(event.entity.isPlayer())) {
        return
    }

    // 判断被破坏方块的 Y 坐标是否小于 40
    if (!(block.getY() < 40)) {
        return
    }

    // 判断是不是主世界
    if (!(level.isOverworld())) {
        return
    }

    // 判断生物群系 tag 是否包含 is_ocean
    if (!(biome.isTag("c:is_ocean"))) {
        return
    }

    // 生成
    level.setBlock(block.getPos(), "minecraft:water", 3)
})
