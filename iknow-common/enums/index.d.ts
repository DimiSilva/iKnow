export var errorsEnum: {
    ALREADY_REGISTERED_USER: string;
    INVALID_EMAIL_OR_PASSWORD: string;
    WITHOUT_AUTHORIZATION: string;
    INTERNAL_ERROR: string;
    NOT_FOUND: string;
    NOT_FOUND_USER: string;
    NOT_FOUND_MISSION: string;
    CANNOT_ACCEPT_OWN_MISSION: string;
    CANNOT_COMPLETE_ANOTHER_USERS_MISSION: string;
    ALREADY_ACCEPTED_MISSION: string;
    ALREADY_COMPLETED_MISSION: string;
    MISSION_NOT_IN_PROGRESS: string;
    CANNOT_CANCEL_ANOTHER_USER_MISSION: string;
    ALREADY_CANCELED_MISSION: string;
    CANNOT_UNBIND_ANOTHER_USER_MISSION: string;
    YOU_NOT_IN_THIS_MISSION: string;
    ALREADY_ADDED_USER: string;
};
export var errorsMasksEnum: {
    [x: string]: string;
};
export var missionCategoriesEnum: typeof import("./mission-categories");
export var missionCategoriesMasksEnum: {
    [x: string]: string;
};
export var missionStatusEnum: typeof import("./mission-status");
export var missionStatusMasksEnum: {
    [x: string]: string;
};
export var achievementKeys: typeof import("./achievement-keys");
export var achievementTiers: typeof import("./achievement-tiers");
export var acknowledgementTypes: typeof import("./acknowledgement-types");
export var messagingQueues: typeof import("./messaging-queues");
export var dbModels: typeof import("./db-models");
