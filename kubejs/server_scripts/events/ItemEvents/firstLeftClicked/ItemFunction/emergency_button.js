// 物品事件-首次左键事件
// 此脚本用于实现整合包内自定义物品的功能-应急按钮
// priority: 50

ItemEvents.firstLeftClicked("greedycraft:emergency_button", event => {
    let server = event.getServer()
    let player = event.getPlayer()
    let level = event.getLevel()

    // 清除当前世界所有的生物（非 Kill）
    level.getEntities().forEach(entity => {
        if (entity.isMonster() && !(entity.isPlayer())) {
            entity.discard()
            console.debug(`greedycraft:emergency_button removed entity ${entity.getType()} from world ${level.getDisplayName().getString()}. Entity X:${entity.getX()} Y:${entity.getY()} Z:${entity.getZ()}`)
        }
    })

    // 删除玩家的所有状态
    player.removeAllEffects()

    // 发送服务器消息
    server.tell(Component.translatable("greedycraft.message.firstleftclicked.emergency_button", Component.literal(player.getUsername()).color(0xFFFF55).bold(), Component.literal(level.getDisplayName().getString()).color(0xFF55FF).bold()))
    // 输出日志
    console.log("You can check the debug log to view the list of removed entities")

    // 将物品减 1
    event.getItem().shrink(1)
})
