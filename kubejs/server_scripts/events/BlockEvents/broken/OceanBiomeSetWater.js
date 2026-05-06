// 方块事件-破坏事件
// 此脚本用于在海洋生物群系破坏方块时瞬间填充水
// priority: 50

BlockEvents.broken(event => {
    let level = event.level
    let block = event.block
    let biome = level.getBiome(block.getPos())

    // 判断是不是玩家破坏的 && 判断被破坏方块的 Y 坐标是否小于 40 && 判断是不是主世界 && 判断生物群系 Tag 是否包含 is_ocean
    if (event.entity.isPlayer() && block.getY() < 40 && level.isOverworld() && biome.isTag("c:is_ocean")) {
        // 设置方块为水
        level.setBlock(block.getPos(), "minecraft:water", 3)
    }
})
