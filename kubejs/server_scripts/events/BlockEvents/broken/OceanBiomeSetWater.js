// 方块事件-破坏事件
// 此脚本用于在海洋生物群系破坏方块时瞬间填充水
// priority: 50

BlockEvents.broken(event => {
    let level = event.getLevel()
    let block = event.getBlock()
    let biome = level.getBiome(block.getPos())
    let pos = block.getPos()

    // 判断是不是玩家破坏的 && 判断被破坏方块的 Y 坐标是否小于 40 && 判断是不是主世界 && 判断生物群系 Tag 是否包含 is_ocean
    if (block.getY() < 40 && level.isOverworld() && biome.isTag("c:is_ocean")) {
        // 判断被破坏方块的六面是否接触到水
        if (
            level.getBlock(pos.getX() + 1, pos.getY(), pos.getZ()).getId() == "minecraft:water" ||
            level.getBlock(pos.getX() - 1, pos.getY(), pos.getZ()).getId() == "minecraft:water" ||
            level.getBlock(pos.getX(), pos.getY() + 1, pos.getZ()).getId() == "minecraft:water" ||
            level.getBlock(pos.getX(), pos.getY() - 1, pos.getZ()).getId() == "minecraft:water" ||
            level.getBlock(pos.getX(), pos.getY(), pos.getZ() + 1).getId() == "minecraft:water" ||
            level.getBlock(pos.getX(), pos.getY(), pos.getZ() - 1).getId() == "minecraft:water"
        ) {
            // 放置水
            level.setBlock(block.getPos(), "minecraft:water", 3)
        }
    }
})
