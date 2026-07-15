// 物品事件-右键事件
// 此脚本用于实现整合包内自定义物品的功能-超时空扫帚
// priority: 50

ItemEvents.rightClicked("greedycraft:item_purger", event => {
    let player = event.getPlayer()
    let server = event.getServer()

    // 判断权限
    if (player.hasPermissions(4)) {
        // 发送消息
        server.tell(Component.translatable("greedycraft.message.right_clicked.item_purger", Component.literal(player.getUsername()).color(0xFFAA00).bold()))
        // 清理掉落物
        cleanServerDroppedItem(server)
    } else {
        // 发送消息
        player.tell(Component.translatable("greedycraft.commands.error.permissions"))
    }
})
