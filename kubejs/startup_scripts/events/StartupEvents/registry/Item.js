// 此脚本用于为整合包注册普通物品
// priority: 50

// 整合包Logo，无实际游玩作用
new registryItem("logo")

// 占位物品
new registryItem("placeholder")

// 暮光宝石 用于开启暮色传送门（钻石已失效）
new registryItem("twilight_gem")
    .setGlow()
    .setTooltips(2)

// 暮色之庇护 右键解锁游戏阶段 twilight_shield 以进入下界
new registryItem("twilight_shield")
    .setStageUnlockItem("twilight_shield")
    .setTooltips(2)

// 创造之魂 合成材料
new registryItem("creative_soul")
    .setGlow()
    .setTooltips(2)

// 末影护符 右键解锁游戏阶段 ender_charm 以进入末地
new registryItem("ender_charm")
    .setStageUnlockItem("ender_charm")
    .setTooltips(2)

// 闪耀之星 右键在头顶召唤陨石
new registryItem("shining_star")
    .setGlow()
    .setTooltips(2)

// 赞助者之箱 右键随机获得一个赞助者物品
new registryItem("sponsors_chest")
    .setTooltips(2)

// 血之印记 右键召唤血月（下一晚）
new registryItem("blood_sigil")
    .setTooltips(3)

// 血染祭品 右键跳过血月
new registryItem("bloody_sacrifice")
    .setTooltips(2)

// 觉醒之眼 右键解锁游戏阶段 gaia_killer 以解锁凋零
new registryItem("awakened_eye")
    .setStageUnlockItem("gaia_killer")
    .setTooltips(1)

// 赞助者之箱碎片 合成材料
new registryItem("sponsors_chest_fragment")

// 禁忌秘典 右键使用以召唤TC
new registryItem("forbidden_bible")
    .setGlow()
    .setTooltips(2)

// 真·血之印记 左键召唤血月，右键跳过血月，无限使用
new registryItem("true_blood_sigil")
    .setMaxCount(1)
    .setGlow()
    .setTooltips(3)

// 平凡奖章 合成材料
new registryItem("ordinary_medal")
    .setTooltips(1)

// 凋零之魂 合成材料
new registryItem("wither_soul")
    .setGlow()
    .setTooltips(1)

// 巨龙之魂 合成材料
new registryItem("dragon_soul")
    .setGlow()
    .setTooltips(1)

// 创造之魂碎片 合成材料
new registryItem("creative_shard")
    .setGlow()
    .setTooltips(1)

// 巨兽之手 右键使用以召唤冰霜巨兽
new registryItem("beast_hand")
    .setTooltips(1)

// 日耀之星 右键解锁游戏阶段 descendant_of_the_sun 以挖掘永燃矿石
new registryItem("solarium_star")
    .setStageUnlockItem("descendant_of_the_sun")
    .setTooltips(2)

// 太阳图腾 右键使用以召唤太阳鸟
new registryItem("sun_totem")
    .setTooltips(1)

// 日耀之种 合成材料
new registryItem("solar_seed")
    .setTooltips(1)

// 破碎的日耀之星 合成材料
new registryItem("broken_solarium_star")
    .setTooltips(1)

// 通量奇点 合成材料
new registryItem("flux_singularity")

// 知识奇点 合成材料
new registryItem("experience_singularity")

// 魔力奇点 合成材料
new registryItem("mana_singularity")

// 物质奇点 合成材料
new registryItem("matter_singularity")

// 逆熵物质 合成材料
new registryItem("anti_entropy_matter")
    .setGlow()

// 贪婪奖章 合成材料
new registryItem("greedy_medal")
    .setTooltips(1)

// 先锋奖章
new registryItem("pioneer_medal")
    .setTooltips(1)

// 难度调节器 左键降低难度，右键提升难度 无限使用
new registryItem("difficulty_changer")
    .setMaxCount(1)
    .setGlow()
    .setTooltips(2)

// 创造模式控制器 右键切换到创造模式，左键切换到生存模式 无限使用
new registryItem("creative_controller")
    .setMaxCount(1)
    .setGlow()
    .setTooltips(2)

// 强迫症许可证 右键发送消息 （无意义物品）
new registryItem("ocd_certificate")
    .setTooltips(5)

// 奥数水晶球 右键解锁游戏阶段 master_wizard 以解锁只能转换核心
new registryItem("arcane_crystal_ball")
    .setGlow()
    .setStageUnlockItem("master_wizard")
    .setTooltips(2)

// 净化灵丹 右键清除所有扭曲
new registryItem("purifying_pill")
    .setGlow()
    .setTooltips(2)

// 质能转换核心 获得解锁游戏阶段 energy_matter_core 可使用EMC 
new registryItem("energy_matter_core")
    .setStageUnlockItem("energy_matter_core")
    .setTooltips(1)

// 肾上腺素 右键使用以获得增益效果 专家模式专属
new registryItem("adrenaline")
    .setTooltips(3)

// 书卷残片 合成材料
new registryItem("ancient_tome_fragment")
    .setTooltips(3)

// 远古书页 合成材料
new registryItem("ancient_tome_page")
    .setTooltips(3)

// 远古书卷 合成材料
new registryItem("ancient_tome")
    .setTooltips(3)

// 极光之心 合成材料
new registryItem("aurora_heart")
    .setGlow()

// 染料袋 右键获得一些染料
new registryItem("bag_of_dyes")
    .setTooltips(1)

// 黑洞残骸 合成材料
new registryItem("black_hole_remnant")

// 赏金猎人奖章 [铜] 合成材料
new registryItem("bounty_hunter_medal_bronze")

// 赏金猎人奖章 [绿宝石] 合成材料
new registryItem("bounty_hunter_medal_emerald")

// 赏金猎人奖章 [银]
new registryItem("bounty_hunter_medal_silver")

// 赏金猎人奖章 [金]
new registryItem("bounty_hunter_medal")
    .setTooltips(1)

// 勇气之证 右键解锁游戏阶段 fearless_man 以进入幽冥
new registryItem("bravery_certificate")
    .setStageUnlockItem("fearless_man")
    .setTooltips(2)

// 催化之星 合成材料
new registryItem("catalyst_star")
    .setGlow()

// 城市保卫者勋章 合成材料
new registryItem("city_defender_medal")
    .setTooltips(2)

// 极寒圣物 右键使用使20格以内的烈阳巨灵血量降至1
new registryItem("cryonic_artifact")
    .setTooltips(2)

// 死亡金币 右键解锁游戏阶段 supper_hardmode 以将难度设置为上限
new registryItem("death_coin")
    .setStageUnlockItem("supper_hardmode")
    .setTooltips(2)

// 死亡计数器 右键使用以显示当前所有玩家的死亡数
new registryItem("death_counter")
    .setMaxCount(1)
    .setTooltips(1)

// 超时空快递订单 右键使用以获得一个奖励箱
new registryItem("delivery_order")
    .setTooltips(2)

// 难度同步宝珠 右键使用根据游戏阶段设定难度 无限使用
new registryItem("difficulty_syncer")
    .setMaxCount(1)
    .setGlow()
    .setTooltips(4)

// 埃拉西亚计划™ 记录手册
new registryItem("elysia_project_lore")
    .setMaxCount(1)

// 应急按钮 右键使用以清除当前世界除玩家外的所有实体，左键使用以清除当前世界的所有敌对生物，同时，清除使用者身上的所有药水效果。
new registryItem("emergency_button")
    .setMaxCount(1)
    .setTooltips(9)

// 裁决者终端 右键使用以解锁扩展内容
new registryItem("executor_terminal")
    .setMaxCount(1)
    .setGlow()
    .setTooltips(3)

// 经验转移宝珠 合成材料
new registryItem("experience_transporter")
    .setMaxCount(16)
    .setGlow()
    .setTooltips(6)

// 残破的实验记录 合成材料
new registryItem("experiment_note")
    .setTooltips(1)

// 贤者之石 [赝品] 右键使用以将沙子转换为玻璃 无限使用 专家模式专属
new registryItem("fake_philosopher_stone")
    .setMaxCount(1)
    .setTooltips(2)

// M记豪华套餐 右键使用以获得一些食物
new registryItem("food_bag")
    .setMaxCount(1)
    .setTooltips(2)

// 家具板条箱 右键使用以获得一些家具
new registryItem("furniture_crate")
    .setMaxCount(1)
    .setTooltips(2)

// 圣诞礼物 右键使用以获得一些物品
new registryItem("gift")
    .setMaxCount(1)
    .setTooltips(2)

// 福袋 右键使用以获得一些专家模式专属物品 专家模式专属
new registryItem("goodie_bag")
    .setMaxCount(1)
    .setTooltips(2)

// 草绳 合成材料
new registryItem("grass_string")
    .setTooltips(1)

// 贪婪整合包 从入门到入土
new registryItem("guide_book")
    .setMaxCount(1)
    .setTooltips(2)

// 无限宝石 根据特征给予惩罚或者奖励
new registryItem("infinity_stone")
    .setMaxCount(1)
    .setGlow()
    .setTooltips(1)

// 超时空扫帚 右键使用以清除掉落物
new registryItem("item_purger")
    .setMaxCount(1)
    .setTooltips(2)

// 幸运四叶草 合成材料
new registryItem("lucky_clover")
    .setTooltips(3)

// 尼龙布 合成材料
new registryItem("nylon_cloth")
    .setBurnTime(60)

// 尼龙绳 合成材料
new registryItem("nylon_string")
    .setBurnTime(10)

// 通行令牌 右键使用以解锁所有游戏阶段，左键使用以锁上所有游戏阶段 创造模式专用
new registryItem("passport")
    .setGlow()
    .setTooltips(3)

// 知识宝珠 右键使用以获取大量经验
new registryItem("pearl_of_knowledge")
    .setTooltips(2)

// 鹅卵石 合成材料
new registryItem("pebble")
    .setTooltips(1)

// 植物纤维 合成材料
new registryItem("plant_fibre")

// 荣誉之板 合成材料
new registryItem("plate_of_honor")
    .setTooltips(3)

// 净化之尘 右键使用以转换方块，效果类似于白雏菊
new registryItem("purifying_dust")
    .setTooltips(1)

// 红包 右键使用以获得一些东西
new registryItem("red_packet")
    .setTooltips(2)

// 重生之锚 右键使用以设置出生点
new registryItem("respawn_anchor")
    .setTooltips(1)

// 奖励箱兑换卷 [普通]
new registryItem("reward_ticket_common")
    .setTooltips(1)

// 奖励箱兑换卷 [史诗]
new registryItem("reward_ticket_epic")
    .setTooltips(1)

// 奖励箱兑换卷 [传说]
new registryItem("reward_ticket_legendary")
    .setTooltips(1)

// 奖励箱兑换卷 [稀有]
new registryItem("reward_ticket_rare")
    .setTooltips(1)

// 皇家凝胶 合成材料
new registryItem("royal_gel")
    .setTooltips(1)
    .setBurnTime(200)

// 橡皮筋 合成材料
new registryItem("rubber_band")
    .setTooltips(1)

// 时之沙 合成材料
new registryItem("sand_of_time")
    .setTooltips(1)

// 技能重置卷轴 右键使用重置所有技能
new registryItem("skill_reset_scroll")
    .setTooltips(2)

// 史莱姆皇冠 右键使用召唤史莱姆之神
new registryItem("slime_crown")
    .setTooltips(2)

// 不锈钢磨珠 合成材料
new registryItem("stainless_steel_ball")

// 奇异物质 用于兑换EMC
new registryItem("strange_matter")
    .setTooltips(2)

// 晴天娃娃 右键使用以切换天气为晴天
new registryItem("sunny_doll")
    .setTooltips(2)

// 小块时间碎片
new registryItem("time_fragment")
    .setTooltips(2)

// 时间碎片
new registryItem("time_shard")

// 高塔宝箱钥匙
new registryItem("tower_chest_key")
    .setTooltips(1)

// 高塔宝箱（已解锁）
new registryItem("tower_chest_unlocked")

// 高塔宝箱
new registryItem("tower_chest")
    .setTooltips(1)

/** @type {registryItem[]} */
let itemList = []

itemList = global.itemList

StartupEvents.registry("item", event => {
    itemList.forEach(normalItem => {
        let item = event.create(`greedycraft:${normalItem.name}`)
        if (normalItem.isStageUnlockItem) {
            item.tag(`greedycraft:unlock_stage/${normalItem.stage}`)
        }
        if (normalItem.tooltipCount > 0) {
            for (let i = 1; i <= normalItem.tooltipCount; i++) {
                item.tooltip(Component.translatable(`greedycraft.item.${normalItem.name}.tooltip.${i}.text`))
            }
        }
        if (normalItem.isGlow) {
            item.glow(true)
        }
        item.maxStackSize(normalItem.maxCount)
        item.burnTime(normalItem.burnTime)
        item.tag("greedycraft:item")
        console.log(`reg normal item: greedycraft:${normalItem.name}`)
    })
})

// 食物类
StartupEvents.registry("item", event => {
    // 熟人肉
    event.create("greedycraft:cooked_human_meat").food(food => {
        food.nutrition(8)
        food.saturation(0.45)
    })
        .tag("greedycraft:item")
    // 滑稽果
    event.create("greedycraft:huaji").food(food => {
        food.nutrition(10)
        food.saturation(2.0)
        food.effect("minecraft:health_boost", 800, 3, 1.0)
    })
        .tooltip(Component.translatable("greedycraft.item.huaji.tooltip.1.text"))
        .tag("greedycraft:item")
    // 医疗包
    event.create("greedycraft:medkit_small").food(food => {
        food.eatSeconds(4.0)
        food.nutrition(0)
        food.saturation(0.0)
        food.effect("minecraft:instant_health", 0, 1, 1.0)
        food.effect("minecraft:regeneration", 400, 0, 1.0)
    })
        .useAnimation("drink")
        .tooltip(Component.translatable("greedycraft.item.medkit_small.tooltip.1.text"))
        .tooltip(Component.translatable("greedycraft.item.medkit_small.tooltip.2.text"))
        .tag("greedycraft:item")
    // 高级医疗包
    event.create("greedycraft:medkit_big").food(food => {
        food.eatSeconds(3.0)
        food.nutrition(0)
        food.saturation(0.0)
        food.effect("minecraft:instant_health", 0, 2, 1.0)
        food.effect("minecraft:regeneration", 800, 1, 1.0)
        food.effect("minecraft:health_boost", 800, 4, 1.0)
    })
        .useAnimation("drink")
        .tooltip(Component.translatable("greedycraft.item.medkit_big.tooltip.1.text"))
        .tooltip(Component.translatable("greedycraft.item.medkit_big.tooltip.2.text"))
        .tooltip(Component.translatable("greedycraft.item.medkit_big.tooltip.3.text"))
        .tag("greedycraft:item")
    // 超级医疗包
    event.create("greedycraft:medkit_super").food(food => {
        food.eatSeconds(4.0)
        food.nutrition(0)
        food.saturation(0.0)
        food.effect("minecraft:instant_health", 0, 4, 1.0)
        food.effect("minecraft:regeneration", 1200, 3, 1.0)
        food.effect("minecraft:health_boost", 1200, 9, 1.0)
    })
        .useAnimation("drink")
        .tooltip(Component.translatable("greedycraft.item.medkit_super.tooltip.1.text"))
        .tooltip(Component.translatable("greedycraft.item.medkit_super.tooltip.2.text"))
        .tooltip(Component.translatable("greedycraft.item.medkit_super.tooltip.3.text"))
        .tag("greedycraft:item")
    // 松果
    event.create("greedycraft:pinecone").food(food => {
        food.nutrition(2)
        food.saturation(0.15)
        food.effect("minecraft:speed", 200, 0, 0.35)
    })
        .tag("greedycraft:item")
    // 老八秘制小汉堡
    event.create("greedycraft:poopburger").food(food => {
        food.nutrition(20)
        food.saturation(0.5)
        food.effect("minecraft:health_boost", 1200, 10, 1.0)
    })
        .tag("minecraft:wolf_food")
        .tooltip(Component.translatable("greedycraft.item.poopburger.tooltip.1.text"))
        .tag("greedycraft:item")
    // 便便
    event.create("greedycraft:poop").food(food => {
        food.nutrition(1)
        food.saturation(1.0)
        food.effect("minecraft:nausea", 1200, 127, 1.0)
        food.effect("minecraft:poison", 300, 3, 1.0)
    })
        .burnTime(600)
        .tag("minecraft:wolf_food")
        .tooltip(Component.translatable("greedycraft.item.poop.tooltip.1.text"))
        .tooltip(Component.translatable("greedycraft.item.poop.tooltip.2.text"))
        .tooltip(Component.translatable("greedycraft.item.poop.tooltip.3.text"))
        .tag("greedycraft:item")
    // 生人肉
    event.create("greedycraft:raw_human_meat").food(food => {
        food.nutrition(2)
        food.saturation(0.75)
        food.effect("minecraft:nausea", 160, 0, 0.5)
    })
        .tag("greedycraft:item")
    // 盾牌软糖 专家模式专属
    event.create("greedycraft:shield_gum").food(food => {
        food.nutrition(8)
        food.saturation(0.625)
        food.eatSeconds(3.0)
        food.effect("minecraft:resistance", 200, 3, 1.0)
    })
        .tooltip(Component.translatable("greedycraft.item.shield_gum.tooltip.1.text"))
        .tooltip(Component.translatable("greedycraft.item.shield_gum.tooltip.2.text"))
        .tooltip(Component.translatable("greedycraft.item.shield_gum.tooltip.3.text"))
        .tag("greedycraft:item")
    // 古怪的棒棒糖 专家模式专属
    event.create("greedycraft:strange_lolipop").food(food => {
        food.nutrition(10)
        food.saturation(0.5)
        food.effect("minecraft:slowness", 300, 4, 1.0)
        food.effect("minecraft:strength", 300, 5, 1.0)
    })
        .tooltip(Component.translatable("greedycraft.item.strange_lolipop.tooltip.1.text"))
        .tooltip(Component.translatable("greedycraft.item.strange_lolipop.tooltip.2.text"))
        .tooltip(Component.translatable("greedycraft.item.strange_lolipop.tooltip.3.text"))
        .tag("greedycraft:item")
})

// 工具类
StartupEvents.registry("item", event => {
    // 简易手斧
    event.create("greedycraft:crude_hatchet", "kubejs:axe")
        .maxStackSize(1)
        .tier("pebble")
        .tooltip(Component.translatable("greedycraft.item.crude_hatchet.tooltip.1.text"))
        .tag("greedycraft:item")
    // 一拳
    event.create("greedycraft:one_punch", "kubejs:sword")
        .maxStackSize(1)
        .tier("one_punch")
        .attackDamageBaseline(9999998.0)
        .tooltip(Component.translatable("greedycraft.item.one_punch.tooltip.1.text"))
        .tag("greedycraft:item")
})