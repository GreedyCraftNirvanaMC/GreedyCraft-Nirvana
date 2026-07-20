declare namespace global {
    interface StageInfo {
        parent: string;
        icon: string;
    }

    interface StageRules {
        item: Record<string, Array<string>>;
        ore: Record<string, Record<string, string>>;
        dimension: Record<string, Array<string>>;
        mob: Record<string, Array<string>>;
        mod: Record<string, Array<string>>;
    }

    interface StageUnlockMessage {
        title: Array<string>;
        lore: Array<string>;
        unlock: Array<string>;
    }

    interface MaterialInfo {
        name: string;
        color: number;
        types: Array<string>;
        beaconPayment: boolean;
    }

    interface ItemInfo {
        name: string;
        isStageUnlockItem: boolean;
        stage: string | null;
        tooltipCount: number;
        isGlow: boolean;
        maxCount: number;
        burnTime: number;
    }

    type StageRuleEntry = {
        [K in keyof StageRules]-?: [
            stageType: K,
            stageMap: StageRules[K]
        ];
    }[keyof StageRules];

    let MAP_DIMENSION_DIFFICULTY: Record<string, number>;
    let MAP_STAGE_DIFFICULTY: Record<string, number>;
    let MAP_STAGE_DIFFICULTY_EXPERT: Record<string, number>;
    let MAP_PURIFYINGDUST_RECIPES: Record<string, Array<string>>;
    let MAP_STAGE_LIST: Record<string, StageInfo>;
    let MAP_STAGES_RULE: StageRules;
    let MESSAGE_PLAYERLOGGEDIN: Array<string>;
    let MESSAGE_PLAYER_DEATH: Array<string>;
    let MESSAGE_STAGES_UNLOCK: Record<string, StageUnlockMessage>;
    let VARIABLE_COMMANDBLACK_LIST: Array<string>;
    let VARIABLE_COMMANDWHITE_LIST: Array<string>;
    let VARIABLE_MAIN_LOOTTABLE_LIST: Array<string>;
    let VARIABLE_OFFICIAL_MOD_LIST: Set<string>;
    let VARIABLE_CREATOR_LIST: Array<string>;
    let VARIABLE_GRASS_LIST: Array<string>;
    let VARIABLE_ROCK_LIST: Array<string>;
    let VARIABLE_BOSS_LIST: Array<string>;
    let VARIABLE_SPIDER_LIST: Array<string>;
    let VARIABLE_SKELETON_LIST: Array<string>;
    let VARIABLE_DAMAGE_BLACK_LIST: Array<string>;
    let VARIABLE_CASUAL_MEKANISM_BASEVALUE: Record<string, number>;
    let VARIABLE_ADVENTURE_MEKANISM_BASEVALUE: Record<string, number>;
    let VARIABLE_EXPERT_MEKANISM_BASEVALUE: Record<string, number>;

    let PACK_MODE: string;
    let CHECK_VERSION_UPDATE: boolean;
    let ANTI_CHEAT: boolean;
    let ANTI_CHEAT_MODE: string;
    let LOCAL_PACKVERSION_CODE: number;
    let LOCAL_PACKVERSION_NAME: string;
    let UPDATE_LINK: Internal.$List<string>;

    let materialList: MaterialInfo[];
    let itemList: ItemInfo[];
}
