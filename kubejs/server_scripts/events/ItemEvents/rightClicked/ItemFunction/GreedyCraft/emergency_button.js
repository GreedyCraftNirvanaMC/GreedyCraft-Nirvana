// 物品事件-右键事件
// 此脚本用于实现整合包内自定义物品的功能-应急按钮
// priority: 50

ItemEvents.rightClicked("greedycraft:emergency_button", event => {
    let player = event.getPlayer()
    let server = event.getServer()
    let level = event.getLevel()

    // 获取当前世界所有实体
    level.getEntities().forEach(entity => {
        // 排除玩家
        if (!(entity.isPlayer())) {
            // 删除（非 Kill）
            entity.discard()
            // 输出日志
            console.debug(`greedycraft:emergency_button removed entity ${entity.getType()} from world ${level.getDisplayName().getString()}. Entity X:${entity.getX()} Y:${entity.getY()} Z:${entity.getZ()}`)
        }
    })

    // 发送消息
    server.tell(Component.translatable("greedycraft.message.right_clicked.emergency_button", Component.literal(player.getUsername()).color(0xFFFF55).bold(), Component.literal(level.getDisplayName().getString()).color(0xFF55FF).bold()))
    // 输出日志
    console.log("You can check the debug log to view the list of removed entities")

    // 将物品减 1
    event.getItem().shrink(1)
})
