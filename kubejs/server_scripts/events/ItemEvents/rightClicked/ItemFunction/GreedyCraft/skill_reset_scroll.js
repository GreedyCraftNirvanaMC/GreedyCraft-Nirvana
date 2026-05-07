// 物品事件-右键事件
// 此脚本用于实现整合包内自定义物品的功能-技能重置卷轴
// priority: 50

let SkillsType = Java.loadClass("net.bandit.reskillable.common.skills.Skill")
let SkillModel = Java.loadClass("net.bandit.reskillable.common.capabilities.SkillModel")

ItemEvents.rightClicked("greedycraft:skill_reset_scroll", event => {
    let server = event.server
    let player = event.player

    let skills = SkillsType.values()
    let model = SkillModel.get(player)

    let totalXP = 0
    // 遍历所有技能
    skills.forEach(skill => {
        let skillLevel = model.getSkillLevel(skill)
        let xp = Math.floor(20 * ((Math.pow(1.2, skillLevel - 1) - 1) / (1.2 - 1)))

        // 设置技能等级
        server.runCommandSilent(`skills set ${player.username} ${skill} 1`)

        // 计算经验
        totalXP += xp
    })

    // 判断整合包模式是否是专家
    if (packMode == "expert") {
        // 只返还一半经验
        totalXP = totalXP / 0.5
    }

    // 发送消息
    player.tell(Component.translatable("greedycraft.message.right_clicked.skill_reset_scroll", `§6${totalXP}`))

    // 将物品减一
    event.item.shrink(1)
})
