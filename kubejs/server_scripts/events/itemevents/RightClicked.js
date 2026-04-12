// 物品右键事件

let MobEffectInstance = Java.loadClass("net.minecraft.world.effect.MobEffectInstance")
let MobEffects = Java.loadClass("net.minecraft.world.effect.MobEffects")
let SkillsType = Java.loadClass("net.bandit.reskillable.common.skills.Skill")
let SkillModel = Java.loadClass("net.bandit.reskillable.common.capabilities.SkillModel")

let SeasonHelper = Java.loadClass("sereneseasons.api.season.SeasonHelper")
let Season = Java.loadClass("sereneseasons.api.season.Season")

let packMode = KJSutils.Analysis("config/greedycraft/config.json", "$.packMode")

// 为拥有 unlock_stage tag的物品右键解锁对应进度
ItemEvents.rightClicked(event => {
    let player = event.player
    let playerName = player.username
    let server = event.server
    let level = event.level
    let item = event.item
    let tags = item.tags

    // 从物品 tag 列表提取单个 tag
    tags.forEach(tag => {
        // 判断命名空间是否等于 greedycraft
        if (tag.namespace == "greedycraft") {
            // 判断 tag 路径是否是 unlock_stage/ 开头
            if (tag.path.toString().startsWith("unlock_stage/")) {
                // 截断字符串，留下截断名称
                let stage = tag.path.toString().replace("unlock_stage/", "")

                // 判断该阶段是否已解锁
                if (!(AStages.playerHasStage(stage, player))) {
                    // 给予进度
                    server.runCommandSilent(`advancement grant ${playerName} only greedycraft:stages/${stage}`)

                    // 生成粒子
                    level.spawnParticles("minecraft:totem_of_undying", true, player.x, player.y, player.z, 2.0, 2.0, 2.0, 1000, 5)

                    // 将物品减 1
                    event.item.shrink(1)
                } else {
                    // 已解锁发送提示
                    player.tell(Component.translatable("greedycraft.message.right_clicked.has_stage"))
                }
            }
        }
    })
})

// 难度调节器
ItemEvents.rightClicked("greedycraft:difficulty_changer", event => {
    let server = event.server
    let playerName = event.player.username

    // 增加10难度
    server.runCommandSilent(`ps_difficulty add ${playerName} 10`)
})

// 创造模式控制器
ItemEvents.rightClicked("greedycraft:creative_controller", event => {
    let server = event.server
    let playerName = event.player.username

    // 切换为创造模式
    server.runCommandSilent(`gamemode creative ${playerName}`)
})

// 肾上腺素
ItemEvents.rightClicked("greedycraft:adrenaline", event => {
    // 速度效果
    event.player.addEffect(new MobEffectInstance(MobEffects.MOVEMENT_SPEED, 200, 4))
    // 力量效果
    event.player.addEffect(new MobEffectInstance(MobEffects.DAMAGE_BOOST, 200, 3))
    // 将物品减 1
    event.item.shrink(1)
})

// 极寒圣物
ItemEvents.rightClicked("greedycraft:cryonic_artifact", event => {
    let player = event.player
    let level = event.level

    let trigger = false

    // 将范围设置为以玩家为中心周围 20 格
    let box = player.boundingBox.inflate(20.0)

    // 获取该 20 格内的所有实体列表
    let entitys = level.getEntitiesWithin(box)

    // 从列表提取单个实体
    entitys.forEach(entity => {
        // 判断实体 id 是否等于 aether:sun_spirit 并且处于活动状态
        if (entity.type == "aether:sun_spirit" && entity.isLiving()) {
            // 设置血量为 1
            entity.setHealth(1.0)

            // 生成粒子
            level.spawnParticles("minecraft:snowflake", true, player.x, player.y, player.z, 2.0, 2.0, 2.0, 200, 0.1)

            // 将物品减 1
            event.item.shrink(1)

            trigger = true
        }
    })

    if (!(trigger)) {
        // 发送消息
        server.tell(Component.translatable("greedycraft.message.right_clicked.cryonic_artifact"))
    }
})

// 死亡计数器
ItemEvents.rightClicked("greedycraft:death_counter", event => {
    let player = event.player

    // 显示死亡计分板
    player.runCommandSilent("deathcounter broadcast")
})

// 超时空快递
ItemEvents.rightClicked("greedycraft:delivery_order", event => {
    let player = event.player
    let server = event.server
    let level = event.level

    // 生成运输矿车实体
    level.spawnEntity("minecraft:chest_minecart", entity => {
        // 设置位置为玩家 y 轴 + 1
        entity.setPos(player.x, player.y + 1.0, player.z)
        // 设置 nbt 战利品列表为 minecraft:chests/simple_dungeon
        entity.mergeNbt({ LootTable: "minecraft:chests/simple_dungeon" })
    })
    // 将物品减 1
    event.item.shrink(1)
})

// 应急按钮
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
        }
    })

    // 发送消息
    server.tell(Component.translatable("greedycraft.message.right_clicked.emergency_button", Component.literal(player.username).color(0xFFFF55).bold(), Component.literal(level.displayName).color(0xFF55FF).bold()))

    // 将物品减 1
    event.item.shrink(1)
})

// 贤者之石 [赝品]
ItemEvents.rightClicked("greedycraft:fake_philosopher_stone", event => {
    let block = event.target.block
    let level = event.level

    // 判断右键的方块是否是沙子
    if (block != null && block.getId() == "minecraft:sand") {
        // 重新设置为玻璃
        level.setBlock(block.getPos(), "minecraft:glass", 3)
    }
})

// 无限宝石
ItemEvents.rightClicked("greedycraft:infinity_stone", event => {
    let player = event.player
    let server = event.server

    // 判断是否是开发者或者是以创造模式创建的存档
    if (global.creatorList.includes(player.uuid.toString()) || AStages.serverHasStage("init_creative", server)) {
        // 抗性效果
        player.addEffect(new MobEffectInstance(MobEffects.DAMAGE_RESISTANCE, 50, 5))
        // 力量效果
        player.addEffect(new MobEffectInstance(MobEffects.DAMAGE_BOOST, 50, 10))
        // 否侧判断是否拥有 truehero 阶段并且没有作弊
    } else if (!(checkCheat(player, server)) && AStages.playerHasStage("truehero", player)) {
        // 抗性效果
        player.addEffect(new MobEffectInstance(MobEffects.DAMAGE_RESISTANCE, 50, 4))
        // 力量效果
        player.addEffect(new MobEffectInstance(MobEffects.DAMAGE_BOOST, 50, 8))
        // 生命恢复效果
        player.addEffect(new MobEffectInstance(MobEffects.REGENERATION, 50, 5))
        // 以上条件都不满足则发送文本消息并kill
    } else {
        player.tell(Component.translatable("greedycraft.message.right_clicked.infinity_stone"))
        player.kill()
    }
})

// 超时空扫帚
ItemEvents.rightClicked("greedycraft:item_purger", event => {
    let player = event.player
    let server = event.server

    // 判断权限
    if (player.hasPermissions(4)) {
        // 发送消息
        server.tell(Component.translatable("greedycraft.message.right_clicked.item_purger", Component.literal(player.username).color(0xFFAA00).bold()))
        // 清理掉落物
        cleanServerDroppedItem(server)
    } else {
        // 发送消息
        player.tell(Component.translatable("greedycraft.commands.error.permissions"))
    }
})

// 通行令牌
ItemEvents.rightClicked("greedycraft:passport", event => {
    let player = event.player
    let server = event.server

    // 给予全部阶段与进度
    givePlayerAllStage(server, player)
})

// 知识宝珠
ItemEvents.rightClicked("greedycraft:pearl_of_knowledge", event => {
    let player = event.player
    let level = event.level

    // 给予经验
    player.giveExperiencePoints(60000)

    // 生成粒子
    level.spawnParticles("minecraft:happy_villager", true, player.x, player.y, player.z, 2.0, 2.0, 2.0, 300, 0.1)

    // 将物品减 1
    event.item.shrink(1)
})

// 净化之尘
ItemEvents.rightClicked("greedycraft:purifying_dust", event => {
    let level = event.level
    let player = event.player
    let blockTarget = event.target.block

    // 判断是否右键的方块
    if (blockTarget == null) {
        player.tell(Component.translatable("greedycraft.message.right_clicked.purifying_dust.2"))
        return
    }

    let startTime = Date.now()
    let baseX = blockTarget.getX()
    let baseY = blockTarget.getY()
    let baseZ = blockTarget.getZ()

    let setBlockNumber = 0

    // 预处理净化之尘配方展开 tag 并反向映射
    let recipesMap = {}
    Object.entries(global.purifyingDustRecipes).forEach(([product, sources]) => {
        sources.forEach(source => {
            if (source.startsWith("#")) {
                let tag = source.substring(1)
                Block.getTaggedIds(tag).forEach(blockID => {
                    recipesMap[blockID.toString()] = product
                })
            } else {
                recipesMap[source] = product
            }
        })
    })

    // 遍历以右键方块为中心的 15x15x15 范围内的所有方块
    for (let dx = -15; dx <= 15; dx++) {
        for (let dy = -15; dy <= 15; dy++) {
            for (let dz = -15; dz <= 15; dz++) {
                // 计算坐标
                let x = baseX + dx
                let y = baseY + dy
                let z = baseZ + dz

                let blockID = level.getBlock(x, y, z).getId()

                // 如果是空气跳过本次循环
                if (blockID == "minecraft:air" || blockID == "minecraft:cave_air" || blockID == "minecraft:void_air") {
                    continue
                }

                // 通过映射表替换方块
                let product = recipesMap[blockID]
                if (product) {
                    level.setBlock([x, y, z], product, 3)
                    setBlockNumber++
                }
            }
        }
    }

    let endTime = Date.now()

    // 判断是否有方块被替换
    if (setBlockNumber > 0) {
        player.tell(Component.translatable("greedycraft.message.right_clicked.purifying_dust", Component.literal(setBlockNumber).color(0xFFAA00), endTime - startTime))
        level.spawnParticles("minecraft:poof", true, player.x, player.y, player.z, 8.0, 8.0, 8.0, 1500, 0.2)
        event.item.shrink(1)
    } else {
        player.tell(Component.translatable("greedycraft.message.right_clicked.purifying_dust.1"))
    }
})

// 技能重置卷轴
ItemEvents.rightClicked("greedycraft:skill_reset_scroll", event => {
    let server = event.server
    let player = event.player

    let skills = SkillsType.values()
    let model = SkillModel.get(player)

    let totalXP = 0
    skills.forEach(skill => {
        let skillLevel = model.getSkillLevel(skill)
        let xp = Math.floor(20 * ((Math.pow(1.2, skillLevel - 1) - 1) / (1.2 - 1)))
        server.runCommandSilent(`skills set ${player.username} ${skill} 1`)
        totalXP += xp
    })
    if (packMode == "expert") {
        totalXP = totalXP / 0.5
    }
    server.tell(Component.translatable("greedycraft.message.right_clicked.skill_reset_scroll", `§6${totalXP}`))
    event.item.shrink(1)
})

// 史莱姆皇冠
ItemEvents.rightClicked("greedycraft:slime_crown", event => {
    let level = event.level
    let player = event.player

    // 生成一个原版的史莱姆并设置 NBT 为 {size: 16}
    level.spawnEntity("minecraft:slime", entity => {
        entity.setPos(player.x, player.y + 3.0, player.z)
        entity.mergeNbt({ size: 16 })
    })

    player.tell(Component.translatable("greedycraft.message.right_clicked.slime_crown"))

    event.item.shrink(1)
})

// 晴天娃娃
ItemEvents.rightClicked("greedycraft:sunny_doll", event => {
    let server = event.server
    let player = event.player

    // 没啥好说的，直接用原版指令简单方便不是吗
    server.runCommandSilent("weaher clear")

    server.tell(Component.translatable("greedycraft.message.right_clicked.sunny_doll", Component.literal(player.name).color(0xFFAA00)))

    event.item.shrink(1)
})

// 巨兽之手
ItemEvents.rightClicked("greedycraft:beast_hand", event => {
    let level = event.level
    let player = event.player

    // 获取当前世界的季节
    let season = SeasonHelper.getSeasonState(level).getSeason()

    // 判断季节是否是冬季
    if (season != Season.WINTER) {
        // 判断当前群系是否是雪地
        if (!(level.getBiome(player.blockPosition()).tags().anyMatch(tag => tag.location() == "c:is_snowy"))) {
            player.tell(Component.translatable("greedycraft.message.spawn.error.frostmaw.biome"))
            return
        }

        // 必须要下雨
        if (!(level.isRaining())) {
            player.tell(Component.translatable("greedycraft.message.spawn.error.frostmaw.weather"))
            return
        }

        // 必须在主世界时才能召唤
        if (!(level.isOverworld())) {
            player.tell(Component.translatable("greedycraft.message.spawn.error.frostmaw.world"))
            return
        }
    }

    // 生成霜冻巨兽
    level.spawnEntity("mowziesmobs:frostmaw", entity => {
        // 确保是活动实体
        if (!(entity.isLiving())) {
            return
        }

        // 根据整合包模式设置最大血量
        let maxHealth = entity.getMaxHealth()
        if (packMode == "casual") {
            maxHealth = Math.floor(maxHealth / 2)
        }
        if (packMode == "adventure") {
            maxHealth = Math.floor(maxHealth * 1.5)
        }
        if (packMode == "expert") {
            maxHealth = Math.floor(maxHealth * 2)
        }

        // 在玩家 y 轴加 4 格位置生成
        entity.setPos(player.x, player.y + 4, player.z)

        // 设置最大血量
        entity.setMaxHealth(maxHealth)
        entity.setHealth(maxHealth)
    })

    // 根据整合包模式设置召唤雪怪的数量
    let maxCount = 6;
    if (packMode == "casual") {
        maxCount = 3
    }
    if (packMode == "expert") {
        maxCount = 10
    }

    for (let i = 0; i < maxCount; i++) {
        // 获取玩家周围随机的格子
        let pos = randomSpawnAroundPlayer(player, 10)

        let levelBlock = level.getBlock(pos)

        // 如果不是空气跳过这个循环
        if (!(levelBlock.getBlock().isEmpty(levelBlock.getBlockState()))) {
            continue
        }

        // 生成
        level.spawnEntity("twilightforest:yeti", entity => {
            entity.setPos(pos)
        })
    }

    player.tell(Component.translatable("greedycraft.message.right_clicked.beast_hand"))
})

// 太阳图腾
ItemEvents.rightClicked("greedycraft:sun_totem", event => {
    let level = event.level
    let player = event.player

    let hasReturn = false

    // 必须在晴天
    if (level.isRaining()) {
        player.tell(Component.translatable("greedycraft.message.spawn.error.umvuthi.weather"))
        return
    }

    // 必须在主世界时才能召唤
    if (!(level.isOverworld())) {
        player.tell(Component.translatable("greedycraft.message.spawn.error.umvuthi.world"))
        return
    }

    // 必须是白天
    if (!(level.isDay())) {
        player.tell(Component.translatable("greedycraft.message.spawn.error.umvuthi.time"))
        return
    }

    // 生成太阳鸟
    level.spawnEntity("mowziesmobs:umvuthi", entity => {
        // 确保是活动实体
        if (!(entity.isLiving())) {
            return
        }

        // 根据整合包模式设置最大血量
        let maxHealth = entity.getMaxHealth()
        if (packMode == "casual") {
            maxHealth = Math.floor(maxHealth / 2)
        }
        if (packMode == "adventure") {
            maxHealth = Math.floor(maxHealth * 1.5)
        }
        if (packMode == "expert") {
            maxHealth = Math.floor(maxHealth * 2)
        }

        // 在玩家 y 轴加 4 格位置生成
        entity.setPos(player.x, player.y + 4, player.z)

        // 设置最大血量
        entity.setMaxHealth(maxHealth)
        entity.setHealth(maxHealth)
    })

    // 根据整合包模式设置召唤随从的数量
    let maxCount = 4;
    if (packMode == "casual") {
        maxCount = 2
    }
    if (packMode == "expert") {
        maxCount = 8
    }

    for (let i = 0; i < maxCount; i++) {
        // 获取玩家周围随机的格子
        let pos = randomSpawnAroundPlayer(player, 10)

        let levelBlock = level.getBlock(pos)

        // 如果不是空气跳过这个循环
        if (!(levelBlock.getBlock().isEmpty(levelBlock.getBlockState()))) {
            continue
        }

        // 生成
        level.spawnEntity("mowziesmobs:umvuthana_raptor", entity => {
            entity.setPos(pos)
        })
    }

    player.tell(Component.translatable("greedycraft.message.right_clicked.sun_totem"))
})
