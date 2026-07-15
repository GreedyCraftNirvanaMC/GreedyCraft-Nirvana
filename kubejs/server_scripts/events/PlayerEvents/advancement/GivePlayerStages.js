// 玩家事件-进度事件
// 此脚本用于根据解锁的进度给予玩家对应阶段
// priority: 50

PlayerEvents.advancement(event => {
    let player = event.getPlayer()
    let playerName = player.getUsername()
    let server = event.getServer()
    let advancementNamespace = event.getAdvancement().getId().getNamespace()
    let advancementPath = event.getAdvancement().getId().getPath()

    let packMode = KJSutils.Analysis("config/greedycraft/config.json", "$.packMode")

    // 休闲模式下不存在阶段，所以不必进行处理
    if (packMode != "casual") {
        // 判断进度的命名空间是否是greedycraft
        if (advancementNamespace == "greedycraft") {
            // 判断进度路径开头是否是stages/
            if (advancementPath.startsWith("stages/")) {
                // 截断多余字符
                let stage = advancementPath.replace("stages/", "")
                // 判断该阶段是否已解锁
                if (!(AStages.playerHasStage(stage, player))) {
                    // 给予玩家阶段
                    AStages.addStageToPlayer(stage, player)
                    // 播放声音
                    // 创造模式不播放
                    if (!(AStages.serverHasStage("init_creative", server))) {
                        player.playNotifySound("minecraft:ui.toast.challenge_complete", "music", 1.0, 1.0)
                    }
                }
            }
        }
    }
})
