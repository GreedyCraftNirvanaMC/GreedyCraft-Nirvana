// 服务器事件-生成数据事件
// 此脚本用于添加自定义进度，根据全局变量 global.MAP_STAGE_LIST
// priority: 50

ServerEvents.generateData("AFTER_MODS", event => {
    event.json("greedycraft:advancement/stages/init.json", {
        "criteria": {
            "impossible": {
                "trigger": "minecraft:impossible"
            }
        },
        "display": {
            "announce_to_chat": false,
            "background": "greedycraft:textures/block/infinity_block_block_block.png",
            "description": {
                "translate": "greedycraft.advancement.description.init"
            },
            "icon": {
                "id": "greedycraft:logo"
            },
            "show_toast": false,
            "title": {
                "translate": "greedycraft.advancement.title.init"
            }
        },
        "requirements": [
            [
                "impossible"
            ]
        ],
        "sends_telemetry_event": false
    })
    event.json("greedycraft:advancement/stages/init_start.json", {
        "parent": "greedycraft:stages/init",
        "criteria": {
            "impossible": {
                "trigger": "minecraft:impossible"
            }
        },
        "display": {
            "announce_to_chat": false,
            "description": {
                "translate": "greedycraft.advancement.description.init_start"
            },
            "icon": {
                "id": "minecraft:grass_block"
            },
            "show_toast": false,
            "title": {
                "translate": "greedycraft.advancement.title.init_start"
            }
        },
        "requirements": [
            [
                "impossible"
            ]
        ],
        "sends_telemetry_event": false
    })
    event.json("greedycraft:advancement/stages/init_creative.json", {
        "parent": "greedycraft:stages/init",
        "criteria": {
            "impossible": {
                "trigger": "minecraft:impossible"
            }
        },
        "display": {
            "announce_to_chat": false,
            "description": {
                "translate": "greedycraft.advancement.description.init_creative"
            },
            "icon": {
                "id": "greedycraft:creative_soul"
            },
            "show_toast": false,
            "title": {
                "translate": "greedycraft.advancement.title.init_creative"
            }
        },
        "requirements": [
            [
                "impossible"
            ]
        ],
        "sends_telemetry_event": false
    })

    Object.entries(global.MAP_STAGE_LIST).forEach(([stageName, data]) => {
        event.json(`greedycraft:advancement/stages/${stageName}.json`, {
            parent: `greedycraft:stages/${data.parent}`,
            criteria: {
                impossible: {
                    trigger: "minecraft:impossible"
                }
            },
            display: {
                announce_to_chat: true,
                description: {
                    translate: `greedycraft.message.stagesunlock.${stageName}.lore`
                },
                icon: {
                    id: data.icon
                },
                show_toast: true,
                title: {
                    translate: `greedycraft.message.stagesunlock.${stageName}.title`
                }
            }
        })
    })
})
