declare namespace global {
    interface StageInfo {
        parent: string;
        icon: string;
    }

    interface StageRules {
        item: Record<string, string[]>;
        ore: Record<string, Record<string, string>>;
        dimension: Record<string, string[]>;
        mob: Record<string, string[]>;
        mod: Record<string, string[]>;
    }

    interface StageUnlockMessage {
        title: string[];
        lore: string[];
        unlock: string[];
    }

    interface MaterialInfo {
        name: string;
        color: number;
        types: string[];
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
    let MAP_PURIFYINGDUST_RECIPES: Record<string, string[]>;
    let MAP_STAGE_LIST: Record<string, StageInfo>;
    let MAP_STAGES_RULE: StageRules;
    let MESSAGE_PLAYERLOGGEDIN: string[];
    let MESSAGE_PLAYER_DEATH: string[];
    let MESSAGE_STAGES_UNLOCK: Record<string, StageUnlockMessage>;
    let VARIABLE_COMMANDBLACK_LIST: string[];
    let VARIABLE_COMMANDWHITE_LIST: string[];
    let VARIABLE_MAIN_LOOTTABLE_LIST: string[];
    let VARIABLE_OFFICIAL_MOD_LIST: Set<string>;
    let VARIABLE_CREATOR_LIST: string[];
    let VARIABLE_GRASS_LIST: string[];
    let VARIABLE_ROCK_LIST: string[];
    let VARIABLE_BOSS_LIST: string[];
    let VARIABLE_SPIDER_LIST: string[];
    let VARIABLE_SKELETON_LIST: string[];
    let VARIABLE_DAMAGE_BLACK_LIST: string[];

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
