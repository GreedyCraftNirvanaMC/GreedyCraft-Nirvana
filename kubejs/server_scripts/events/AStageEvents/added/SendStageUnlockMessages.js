// 阶段事件-添加事件
// 此脚本用于玩家解锁阶段发送对应消息，根据全局变量 global.MESSAGE_STAGES_UNLOCK
// priority: 50

AStageEvents.added(event => {
    let server = event.server
    let player = event.player
    let stage = event.stage
    
    let borderText = "§9§l=================================================="

    console.log(`Astage added ${stage}`)

    // 排除掉基础阶段
    if (stage != "init_start" && stage != "init_creative") {
        // 非创造模式创建的存档才发送解锁消息
        if (!(AStages.serverHasStage("init_creative", server))) {
            let stageUnlockMessageData = global.MESSAGE_STAGES_UNLOCK[stage]

            player.tell(borderText)
            player.tell(Component.translatable("greedycraft.message.stage.unlock.title"))
            stageUnlockMessageData.title.forEach(message => player.tell(Component.literal(stage).color(0xFFAA00).italic().append(Component.literal(" - ")).append(Component.translatable(message))))
            stageUnlockMessageData.lore.forEach(message => player.tell(Component.translatable(message)))
            player.tell(Component.translatable("greedycraft.message.stage.unlock.message"))
            stageUnlockMessageData.unlock.forEach(message => player.tell(Component.literal("✔").color(0x00AA00).append(Component.translatable(message))))
            player.tell(borderText)
        }
    }
})
