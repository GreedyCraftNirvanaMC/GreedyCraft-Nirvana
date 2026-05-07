// 物品事件-右键事件
// 此脚本用于实现整合包内自定义物品的功能-应急按钮
// priority: 50

ItemEvents.rightClicked("greedycraft:emergency_button", event => {
    let player = event.player
    let server = event.server
    let level = event.level

    // 获取当前世界所有实体
    level.entities.forEach(entity => {
        // 排除玩家
        if (!(entity.isPlayer())) {
            // 删除（非 Kill）
            entity.discard()
            // 输出日志
            console.debug(`greedycraft:emergency_button removed entity ${entity.type} from world ${level.displayName.getString()}. Entity X:${entity.x} Y:${entity.y} Z:${entity.z}`)
        }
    })

    // 发送消息
    server.tell(Component.translatable("greedycraft.message.right_clicked.emergency_button", Component.literal(player.username).color(0xFFFF55).bold(), Component.literal(level.displayName.getString()).color(0xFF55FF).bold()))
    // 输出日志
    console.log("You can check the debug log to view the list of removed entities")

    // 将物品减 1
    event.item.shrink(1)
})
