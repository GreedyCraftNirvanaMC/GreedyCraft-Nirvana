// 物品事件-右键事件
// 此脚本用于实现整合包内自定义物品的功能-晴天娃娃
// priority: 50

ItemEvents.rightClicked("greedycraft:sunny_doll", event => {
    let server = event.getServer()
    let player = event.getPlayer()

    // 没啥好说的，直接用原版指令简单方便不是吗
    server.runCommandSilent("weaher clear")

    // 发送消息
    server.tell(Component.translatable("greedycraft.message.right_clicked.sunny_doll", Component.literal(player.getUsername()).color(0xFFAA00)))

    // 将物品减 1
    event.getItem().shrink(1)
})
