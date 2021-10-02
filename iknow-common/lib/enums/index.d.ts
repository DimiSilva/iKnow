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
};
export var errorsMasksEnum: {
    [x: string]: string;
};
export var missionCategoriesEnum: {
    TECHNOLOGY: string;
    LANGUAGES: string;
    MUSIC: string;
    MATH: string;
    OTHERS: string;
};
export var missionCategoriesMasksEnum: {
    [x: string]: string;
};
export var missionStatusEnum: {
    IDLE: string;
    IN_PROGRESS: string;
    COMPLETED: string;
    CANCELED: string;
};
export var missionStatusMasksEnum: {
    [x: string]: string;
};
export var achievementKeys: {
    CONCLUDED_MISSION: string;
    CREATED_MISSION: string;
    MESSAGES: string;
    LOGIN: string;
    RECEIVED_ACKNOWLEDGEMENT: string;
    SEND_ACKNOWLEDGEMENT: string;
    CONTACT: string;
};
export var achievementTiers: {
    WOOD: string;
    BRONZE: string;
    SILVER: string;
    GOLD: string;
    DIAMOND: string;
};
export var acknowledgementTypes: {
    CHARISMATIC: string;
    EFFICIENT: string;
    GOOD_MASTER: string;
    PATIENT: string;
    SUPPORTIVE: string;
    WISE: string;
};
