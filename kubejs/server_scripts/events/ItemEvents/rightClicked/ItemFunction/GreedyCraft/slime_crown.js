// 物品事件-右键事件
// 此脚本用于实现整合包内自定义物品的功能-史莱姆皇冠
// priority: 50

ItemEvents.rightClicked("greedycraft:slime_crown", event => {
    let level = event.level
    let player = event.player

    // 生成一个原版的史莱姆并设置 NBT 为 {size: 16}
    level.spawnEntity("minecraft:slime", entity => {
        // 设置坐标
        entity.setPos(player.x, player.y + 3.0, player.z)

        // 设置 NBT
        entity.mergeNbt({ size: 16 })
    })

    // 发送消息
    player.tell(Component.translatable("greedycraft.message.right_clicked.slime_crown"))

    // 输出日志
    console.log(`${player.username} used greedycraft:slime_crown at X:${player.x} Y:${player.y} Z:${player.z}`)

    // 将物品减 1
    event.item.shrink(1)
})
