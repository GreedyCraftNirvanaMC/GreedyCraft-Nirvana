// priority: 32767

global.MAP_STAGE_LIST = {
    // Example：
    // truehero: {
    //     parent: "graduated",
    //     icon: "greedycraft:executor_terminal"
    // }
    expert: {
        parent: "init",
        icon: "greedycraft:fake_philosopher_stone"
    },
    truehero: {
        parent: "init_start",
        icon: "greedycraft:executor_terminal"
    }
}

global.MAP_STAGES_RULE = {
    item: {
        // Example:
        // getting_started: [
        //     ""
        // ]
    },
    ore: {
        // Example:
        // getting_started: {
        //     "#c:chests": "greedycraft:unknown_block",
        //     "#c:player_workstations/crafting_tables": "greedycraft:unknown_block"
        // }
    },
    dimension: {
        // Example:
        // twilight_shield: [
        //     "minecraft:the_nether"
        // ]
    },
    mob: {
        // Example:
        // twilight_shield: [
        //     "minecraft:blaze",
        //     "minecraft:wither_skeleton"
        // ]
    },
    mod: {
        // Example:
        // nether: [
        //     "aether"
        // ]
    }
}
