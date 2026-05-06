// 物品事件-首次左键事件
// 此脚本用于实现整合包内自定义物品的功能
// priority: 50

// 难度调节器
ItemEvents.firstLeftClicked("greedycraft:difficulty_changer", event => {
    let server = event.server
    let playerName = event.player.username

    // 减少10难度
    server.runCommandSilent(`ps_difficulty add ${playerName} -10`)
    console.log(`${playerName} used greedycraft:difficulty_changer to lower their own difficulty by 10. Player X:${player.x} Y:${player.y} Z:${player.z}`)
})

// 创造模式控制器
ItemEvents.firstLeftClicked("greedycraft:creative_controller", event => {
    let server = event.server
    let playerName = event.player.username

    // 切换生存模式
    server.runCommandSilent(`gamemode survival ${playerName}`)
    console.log(`${playerName} used greedycraft:creative_controller to set their game mode to Survival. Player X:${player.x} Y:${player.y} Z:${player.z}`)
})

// 应急按钮
ItemEvents.firstLeftClicked("greedycraft:emergency_button", event => {
    let server = event.server
    let player = event.player
    let level = event.level

    // 清除当前世界所有的生物（非 Kill）
    level.entities.forEach(entity => {
        if (entity.isMonster() && !(entity.isPlayer())) {
            entity.discard()
            console.debug(`greedycraft:emergency_button removed entity ${entity.type} from world ${level.name.getString()}. Entity X:${entity.x} Y:${entity.y} Z:${entity.z}`)
        }
    })

    // 删除玩家的所有状态
    player.removeAllEffects()

    // 发送服务器消息
    server.tell(Component.translatable("greedycraft.message.firstleftclicked.emergency_button", Component.literal(player.username).color(0xFFFF55).bold(), Component.literal(level.displayName).color(0xFF55FF).bold()))
    console.log("You can check the debug log to view the list of removed entities")

    // 将物品减 1
    event.item.shrink(1)
})
