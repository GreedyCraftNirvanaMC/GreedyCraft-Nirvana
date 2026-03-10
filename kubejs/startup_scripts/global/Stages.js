// priority: 3000

// 整合包阶段及限制
global.stages = {
    item: {
        getting_started: [
            "#c:chests",
            "#c:player_workstations/crafting_tables",
            "#minecraft:planks",
            "minecraft:crafting_table",
            "minecraft:wooden_pickaxe",
            "minecraft:stone_pickaxe",
            "minecraft:iron_pickaxe",
            "minecraft:golden_pickaxe",
            "minecraft:diamond_pickaxe",
            "minecraft:wooden_axe",
            "minecraft:stone_axe",
            "minecraft:iron_axe",
            "minecraft:golden_axe",
            "minecraft:diamond_axe",
            "minecraft:iron_ingot",
            "minecraft:iron_nugget",
            "minecraft:iron_block",
            "minecraft:gold_ingot",
            "minecraft:gold_nugget",
            "minecraft:gold_block",
            "mekanism:dust_iron",
            "mekanism:dust_gold",
            "greedycraft:twilight_gem"
        ],
        twilight_forest: [
            "greedycraft:twilight_shield"
        ],
        nether: [
            "#c:ores/quartz",
            "#c:blocks/quartz_block",
            "#greedycraft:material/aeroite",
            "#greedycraft:material/asgardium",
            "#greedycraft:material/aqualite",
            "#greedycraft:material/durasteel",
            "#greedycraft:material/meteor",
            "minecraft:netherite_ingot",
            "minecraft:netherite_block",
            "minecraft:netherite_scrap",
            "minecraft:ancient_debris",
            "minecraft:beacon",
            "minecraft:blaze_rod",
            "minecraft:blaze_powder",
            "minecraft:glowstone_dust",
            "minecraft:glowstone",
            "minecraft:quartz",
            "minecraft:nether_quartz_ore",
            "minecraft:ender_eye",
            "minecraft:enchanted_book",
            "minecraft:anvil",
            "minecraft:chipped_anvil",
            "minecraft:damaged_anvil",
            "minecraft:enchanting_table",
            "minecraft:brewing_stand",
            "minecraft:ghast_tear",
            "minecraft:magma_cream",
            "ae2:wireless_booster",
            "ae2:formation_core",
            "ae2:annihilation_core",
            "ae2:fluix_pearl",
            "ae2:fluix_dust",
            "ae2:quartz_fiber",
            "ae2:fluix_crystal",
            "defiled_lands_reborn:idol_sorrow",
            "defiled_lands_reborn:ravaging_essence",
            "defiled_lands_reborn:ravaging_ingot",
            "defiled_lands_reborn:calling_stone",
            "defiled_lands_reborn:remorseful_essence",
            "defiled_lands_reborn:remorseful_gem",
            "quark:blaze_lantern",
            "greedycraft:aqualite_block",
            "greedycraft:durasteel_block",
            "greedycraft:shining_star",
            "greedycraft:sponsors_chest",
            "greedycraft:medkit_big",
            "greedycraft:blood_sigil",
            "greedycraft:bloody_sacrifice",
            "greedycraft:awakened_eye",
            "greedycraft:sponsors_chest_fragment",
            "greedycraft:aeroite_ore",
            "greedycraft:asgardium_ore",
            "botania:life_essence",
            "botania:gaia_ingot",
            "botania:enchanter",
            "mekanism:dust_quartz",
            "hooked:redstone_hook",
            "netherex:wither_bone",
            "netherex:fiery_quartz_ore",
            "netherex:gloomy_quartz_ore",
            "netherex:lively_quartz_ore",
            "enderio:dark_steel_sword"
        ],
        gaia_killer: [
            "minecraft:nether_star",
            "minecraft:wither_skeleton_skull"
        ],
        wither_killer: [
            "minecraft:end_crystal",
            "greedycraft:bravery_certificate",
            "greedycraft:ender_charm",
            "mysticalagriculture:witherproof_block",
            "mysticalagriculture:witherproof_glass",
            "rftoolsbuilder:blue_shield_template_block",
            "rftoolsbuilder:red_shield_template_block",
            "rftoolsbuilder:green_shield_template_block",
            "rftoolsbuilder:yellow_shield_template_block",
            "rftoolsbuilder:shield_block1",
            "rftoolsbuilder:shield_block2",
            "enderio:reinforced_obsidian_block"
        ],
        fearless_man: [
            "#greedycraft:material/sculk",
            "deeperdarker:heart_of_the_deep"
        ],
        ender_charm: [
            "#c:end_stones",
            "minecraft:end_rod",
            "minecraft:end_stone_bricks",
            "minecraft:end_portal_frame",
            "minecraft:chorus_fruit",
            "prefab:item_ender_gateway",
            "hooked:ender_hook"
        ],
        hardmode: [
            "#greedycraft:mysticalagriculture_level_6",
            "#greedycraft:material/fusion_matrix",
            "#greedycraft:material/cryonium",
            "#greedycraft:material/cytosinite",
            "#greedycraft:material/shadowium",
            "#greedycraft:material/aeonsteel",
            "minecraft:popped_chorus_fruit",
            "minecraft:dragon_egg",
            "minecraft:elytra",
            "actuallyadditions:phantom_booster",
            "actuallyadditions:phantom_placer",
            "actuallyadditions:phantom_itemface",
            "actuallyadditions:phantom_energyface",
            "actuallyadditions:phantom_liquiface",
            "actuallyadditions:phantom_redstoneface",
            "actuallyadditions:lens_of_disenchanting",
            "actuallyadditions:teleport_staff",
            "actuallyadditions:ender_casing",
            "greedycraft:forbidden_bible",
            "greedycraft:true_blood_sigil",
            "greedycraft:ordinary_medal",
            "greedycraft:medkit_super",
            "greedycraft:wither_soul",
            "greedycraft:dragon_soul",
            "greedycraft:fusion_matrix_block",
            "greedycraft:cryonium_block",
            "greedycraft:cytosinite_block",
            "greedycraft:aeonsteel_block",
            "greedycraft:cytosinite_ore",
            "greedycraft:cryonium_ore",
            "greedycraft:deepslate_cryonium_ore",
            "greedycraft:creative_shard",
            "twilightforest:shield_scepter",
            "defiled_lands_reborn:scarlite_ore",
            "tofucraft:tofu_kinu_sword",
            "tofucraft:tofu_momen_sword",
            "tofucraft:tofu_solid_sword",
            "tofucraft:tofu_metal_sword",
            "tofucraft:tofu_diamond_sword",
        ],
        fusion_matrix: [
            "#c:ores/draconium",
            "#greedycraft:material/electronium",
            "greedycraft:beast_hand",
            "greedycraft:electronium_block",
            "summoningrituals:altar",
            "draconicevolution:draconium_nugget",
            "draconicevolution:draconium_ingot",
            "draconicevolution:draconium_dust",
            "draconicevolution:draconium_block",
            "draconicevolution:draconium_core",
            "draconicevolution:wyvern_core",
            "draconicevolution:awakened_draconium_ingot",
            "draconicevolution:awakened_draconium_block",
            "draconicevolution:awakened_draconium_nugget",
            "draconicevolution:draconium_chest",
            "draconicevolution:overworld_draconium_ore",
            "draconicevolution:deepslate_draconium_ore",
            "draconicevolution:nether_draconium_ore",
            "draconicevolution:end_draconium_ore",
            "mysticalagriculture:fusion_matrix_seeds",
            "mysticalagriculture:awakened_draconium_essence",
            "mysticalagradditions:awakened_draconium_crux",
            "mysticalagriculture:draconium_essence",
            "mysticalagriculture:draconium_seeds"
        ],
        wyvern: [
            "#greedycraft:material/wyvern",
            "greedycraft:wyvern_block",
            "greedycraft:solarium_star",
            "greedycraft:sun_totem",
            "greedycraft:solar_seed",
            "greedycraft:broken_solarium_star",
            "avaritia:neutron_collector",
            "avaritia:dense_neutron_collector",
            "avaritia:denser_neutron_collector",
            "avaritia:densest_neutron_collector",
            "avaritia:neutron_pile",
            "avaritia:neutron_ingot",
            "avaritia:neutron_nugget",
            "avaritia:neutron",
            "avaritia:neutron_gear"
        ],
        awakened: [
            "#greedycraft:material/draconic",
            "#greedycraft:material/titanium",
            "#greedycraft:material/protonium",
            "#greedycraft:material/terra_alloy",
            "#greedycraft:material/chromasteel",
            "greedycraft:draconic_block",
            "greedycraft:titanium_ore",
            "greedycraft:titanium_block",
            "greedycraft:terra_alloy_block",
            "greedycraft:protonium_block",
            "greedycraft:chromasteel_block",
            "actuallyadditions:bats_wing",
            "magicfeather:magic_feather",
            "magicfeather:arcane_feather",
            "magicfeather:primeval_feather",
            "magicfeather:stygian_feather",
            "draconicevolution:chaos_shard",
            "avaritia:neutron_compressor",
            "avaritia:dense_neutron_compressor",
            "avaritia:denser_neutron_compressor",
            "avaritia:densest_neutron_compressor"
        ],
        chaotic_dominator: [
            "greedycraft:death_coin",
            "greedycraft:difficulty_changer",
            "powerscale:languid_brew",
            "powerscale:arduous_brew",
            "powerscale:cursed_heart",
            "powerscale:enchanted_heart",
            "draconicevolution:chaotic_energy_core",
            "draconicevolution:chaotic_core"
        ],
        chaotic: [
            "#greedycraft:material/chaotic",
            "#greedycraft:material/cosmilite",
            "greedycraft:chaotic_block",
            "greedycraft:cosmilite_block",
            "greedycraft:flux_singularity",
            "greedycraft:mana_singularity",
            "greedycraft:experience_singularity",
            "greedycraft:matter_singularity",
            "greedycraft:anti_entropy_matter",
            "solarflux:sp_custom_cosmic_solar_panel",
            "mekanism:laser_amplifier",
            "avaritia:infinity_catalyst",
            "draconicevolution:reactor_stabilizer"
        ],
        wielder_of_infinity: [
            "#avaritia:endless",
            "greedycraft:pioneer_medal",
            "greedycraft:greedy_medal",
            "greedycraft:infinity_block_block",
            "greedycraft:infinity_block_block_block",
            "greedycraft:creative_soul",
            "greedycraft:difficulty_changer",
            "draconicevolution:draconic_staff",
            "solarflux:sp_avaritia.infinity",
            "actuallyadditions:ring_of_growth",
            "avaritia:infinity_totem",
            "avaritia:infinity_clock",
            "avaritia:side_config_card",
            "avaritia:neutron_horse_armor",
            "avaritia:infinity_bucket",
            "avaritia:infinity_elytra",
            "avaritia:infinity_ingot",
            "avaritia:infinity",
            "avaritia:infinity_nugget"
        ],
        graduated: [
            "draconicevolution:creative_capacitor",
            "draconicevolution:creative_op_capacitor",
            "ae2:creative_storage_cell",
            "extendedae_plus:infinity_biginteger_cell",
            "botania:creative_pool",
            "mysticalagradditions:creative_essence",
            "greedycraft:creative_controller",
            "greedycraft:ocd_certificate",
            "dankstorage:dank_7",
            "projecte:watch_of_flowing_time",
            "projecte:tome",
            "projecte:harvest_goddess_band",
            "chancecubes:creative_pendant",
            "randomthings:player_interface",
            "projectexpansion:final_star"
        ],
        novice_engineer: [
            "actuallyadditions:battery_box",
            "actuallyadditions:hopping_item_interface",
            "actuallyadditions:bio_reactor",
            "actuallyadditions:farmer",
            "actuallyadditions:empowerer",
            "actuallyadditions:shock_suppressor",
            "actuallyadditions:display_stand",
            "actuallyadditions:player_interface",
            "actuallyadditions:item_interface",
            "actuallyadditions:empowered_restonia_crystal_block",
            "actuallyadditions:empowered_palis_crystal_block",
            "actuallyadditions:empowered_diamatine_crystal_block",
            "actuallyadditions:empowered_void_crystal_block",
            "actuallyadditions:empowered_emeradic_crystal_block",
            "actuallyadditions:enervator",
            "actuallyadditions:energizer",
            "actuallyadditions:lava_factory_controller",
            "actuallyadditions:canola_press",
            "actuallyadditions:coffee_machine",
            "actuallyadditions:atomic_reconstructor"
        ],
        skilled_engineer: [
            "#c:ores/yellorite",
            "solarflux:sp_5",
            "solarflux:sp_6",
            "solarflux:sp_7",
            "rftoolsbuilder:builder",
            "randomthings:iron_dropper",
            "randomthings:ender_bridge",
            "randomthings:prismarine_ender_bridge",
            "randomthings:ender_anchor",
            "randomthings:analog_emitter",
            "randomthings:fluid_display",
            "randomthings:fertilized_dirt",
            "randomthings:player_interface",
            "bigreactors:yellorium_ingot",
            "bigreactors:raw_yellorium",
            "bigreactors:raw_yellorium_block",
            "bigreactors:yellorium_block",
            "bigreactors:benitoite_ore",
            "bigreactors:anglesite_ore",
            "bigreactors:cyanite_ingot",
            "bigreactors:cyanite_block",
            "bigreactors:yellorite_ore",
            "bigreactors:deepslate_yellorite_ore",
            "mekanism:osmium_ore",
            "mekanism:deepslate_osmium_ore"
        ],
        master_engineer: [
            "actuallyadditions:breaker",
            "actuallyadditions:vertical_digger",
            "actuallyadditions:long_range_breaker",
            "actuallyadditions:phantom_placer",
            "actuallyadditions:fluid_placer",
            "actuallyadditions:dropper",
            "actuallyadditions:fluid_collector",
            "rftoolsbuilder:shield_block3",
            "rftoolsbuilder:shield_block4",
            "mekanism:alloy_atomic",
            "mekanism:ultimate_control_circuit",
            "solarflux:sp_8",
            "draconicevolution:grinder",
            "solarflux:sp_de.wyvern",
            "solarflux:sp_de.draconic",
            "solarflux:sp_de.chaotic",
            "solarflux:sp_avaritia.neutronium"
        ],
        novice_wizard: [
            "greedycraft:placeholder"
        ],
        skilled_wizard: [
            "#greedycraft:material/astral_metal",
            "#greedycraft:material/crimsonite",
            "greedycraft:astral_metal_block",
            "greedycraft:crimsonite_block",
            "greedycraft:arcane_crystal_ball"
        ],
        master_wizard: [
            "greedycraft:purifying_pill",
            "greedycraft:energy_matter_core"
        ],
        descendant_of_the_sun: [
            "#greedycraft:material/infernium",
            "greedycraft:infernium_block",
            "greedycraft:infernium_ore",
            "draconicevolution:awakened_core"
        ],
        challenger_a: [
            "#greedycraft:mysticalagriculture_level_1",
            "mysticalagriculture:inferium_essence",
            "mysticalagriculture:inferium_ingot",
            "mysticalagriculture:inferium_ingot_block",
            "mysticalagriculture:inferium_block",
            "mysticalagriculture:inferium_nugget",
            "tinymobfarm:stone_farm"
        ],
        challenger_b: [
            "#greedycraft:mysticalagriculture_level_2",
            "mysticalagriculture:prudentium_ingot",
            "mysticalagriculture:prudentium_ingot_block",
            "mysticalagriculture:prudentium_essence",
            "mysticalagriculture:prudentium_block",
            "mysticalagriculture:prudentium_nugget",
            "tinymobfarm:iron_farm"
        ],
        challenger_c: [
            "#greedycraft:mysticalagriculture_level_3",
            "mysticalagriculture:tertium_block",
            "mysticalagriculture:tertium_ingot_block",
            "mysticalagriculture:tertium_essence",
            "mysticalagriculture:tertium_ingot",
            "mysticalagriculture:tertium_nugget",
            "tinymobfarm:gold_farm"
        ],
        challenger_d: [
            "#greedycraft:mysticalagriculture_level_4",
            "mysticalagriculture:imperium_block",
            "mysticalagriculture:imperium_ingot_block",
            "mysticalagriculture:imperium_essence",
            "mysticalagriculture:imperium_ingot",
            "mysticalagriculture:imperium_nugget",
            "tinymobfarm:diamond_farm"
        ],
        challenger_e: [
            "#greedycraft:mysticalagriculture_level_5",
            "mysticalagriculture:supremium_block",
            "mysticalagriculture:supremium_ingot_block",
            "mysticalagriculture:supremium_essence",
            "mysticalagriculture:supremium_ingot",
            "mysticalagriculture:supremium_nugget",
            "tinymobfarm:emerald_farm"
        ],
        challenger_f: [
            "mysticalagradditions:insanium_block",
            "mysticalagradditions:insanium_ingot_block",
            "mysticalagradditions:insanium_essence",
            "mysticalagradditions:insanium_ingot",
            "mysticalagradditions:insanium_nugget",
            "tinymobfarm:inferno_farm"
        ],
        challenger_g: [
            "#greedycraft:mysticalagriculture_level_6",
            "tinymobfarm:ultimate_farm"
        ],
        challenger_all: ["greedycraft:placeholder"],
        energy_matter_core: [
            "#projectexpansion:collector",
            "#projectexpansion:matter",
            "projectexpansion:arcane_transmutation_tablet",
            "projecte:transmutation_table",
            "projecte:transmutation_tablet",
            "projecte:collector_mk1",
            "projecte:collector_mk2"
        ],
        super_hardmode: ["greedycraft:placeholder"],
        expert: [
            "greedycraft:adrenaline",
            "greedycraft:fake_philosopher_stone",
            "greedycraft:goodie_bag"
        ],
        truehero: ["greedycraft:placeholder"]
    },
    ore: {
        getting_started: {
            "#c:chests": "greedycraft:unknown_block",
            "#c:player_workstations/crafting_tables": "greedycraft:unknown_block"
        },
        nether: {
            "minecraft:anvil": "greedycraft:unknown_block",
            "minecraft:chipped_anvil": "greedycraft:unknown_block",
            "minecraft:damaged_anvil": "greedycraft:unknown_block",
            "minecraft:beacon": "greedycraft:unknown_block",
            "minecraft:enchanting_table": "greedycraft:unknown_block",
            "minecraft:nether_quartz_ore": "minecraft:netherrack",
            "netherex:fiery_quartz_ore": "netherex:fiery_netherrack",
            "netherex:gloomy_quartz_ore": "netherex:gloomy_netherrack",
            "netherex:lively_quartz_ore": "netherex:lively_netherrack",
            "greedycraft:aeroite_ore": "aether:cold_aercloud",
            "greedycraft:asgardium_ore": "aether:holystone"
        },
        ender_charm: {
            "minecraft:end_portal_frame": "greedycraft:unknown_block"
        },
        hardmode: {
            "greedycraft:cytosinite_ore": "minecraft:mud",
            "greedycraft:cryonium_ore": "minecraft:stone",
            "greedycraft:deepslate_cryonium_ore": "minecraft:deepslate"
        },
        fusion_matrix: {
            "draconicevolution:overworld_draconium_ore": "minecraft:stone",
            "draconicevolution:deepslate_draconium_ore": "minecraft:deepslate",
            "draconicevolution:nether_draconium_ore": "minecraft:netherrack",
            "draconicevolution:end_draconium_ore": "minecraft:end_stone"
        },
        awakened: {
            "greedycraft:titanium_ore": "minecraft:end_stone"
        },
        skilled_engineer: {
            "bigreactors:yellorite_ore": "minecraft:stone",
            "bigreactors:deepslate_yellorite_ore": "minecraft:cobbled_deepslate",
            "mekanism:osmium_ore": "minecraft:stone",
            "mekanism:deepslate_osmium_ore": "minecraft:cobbled_deepslate"
        },
        descendant_of_the_sun: {
            "greedycraft:infernium_ore": "minecraft:netherrack"
        }
    },
    dimension: {
        twilight_shield: [
            "minecraft:the_nether"
        ],
        nether: [
            "aether:the_aether"
        ],
        fearless_man: [
            "deeperdarker:otherside"
        ],
        hardmode: [
            "greedycraft:mining"
        ]
    },
    mob: {
        twilight_shield: [
            "minecraft:blaze",
            "minecraft:wither_skeleton"
        ],
        gaia_killer: [
            "minecraft:wither"
        ],
        hardmode: [
            "enderzoology:concussion_creeper",
            "enderzoology:dire_wolf",
            "enderzoology:enderminy",
            "enderzoology:fallen_knight",
            "enderzoology:fallen_mount",
            "enderzoology:wither_cat",
            "enderzoology:wither_witch",
            "mowziesmobs:frostmaw"
        ],
        wyvern: [
            "mowziesmobs:umvuthi"
        ]
    },
    mod: {
        nether: [
            "aether"
        ],
        hardmode: [
            "avaritia",
            "draconicevolution",
            "projecte",
            "projectexpansion"
        ],
        novice_engineer: [
            "enderio"
        ],
        skilled_engineer: [
            "mekanism_lasers",
            "mekanism_unleashed",
            "mekanism",
            "mekmm",
            "mekanism_extras",
            "mekanismgenerators",
            "appmek"
        ]
    }
}
