// 物品事件-右键事件
// 此脚本用于实现整合包内自定义物品的功能-超时空快递
// priority: 50

ItemEvents.rightClicked("greedycraft:delivery_order", event => {
    let player = event.player
    let server = event.server
    let level = event.level

    // 生成运输矿车实体
    level.spawnEntity("minecraft:chest_minecart", entity => {
        // 设置位置为玩家 y 轴 + 1
        entity.setPos(player.x, player.y + 1.0, player.z)
        // 设置 nbt 战利品列表为 minecraft:chests/simple_dungeon
        entity.mergeNbt({ LootTable: "minecraft:chests/simple_dungeon" })
    })
    // 将物品减 1
    event.item.shrink(1)

    // 输出日志
    console.log(`${player.username} used greedycraft:delivery_order to summon a reward minecart at X:${player.x} Y:${player.y + 1.0} Z:${player.z}`)
})
