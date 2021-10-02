/// <reference types="mongoose" />
export var setupModels: ($mongoose?: typeof import("mongoose")) => {
    User: import("mongoose").Model<any, {}, {}, {}>;
    Mission: import("mongoose").Model<any, {}, {}, {}>;
    Evaluation: import("mongoose").Model<any, {}, {}, {}>;
    Acknowledgement: import("mongoose").Model<any, {}, {}, {}>;
    Connection: import("mongoose").Model<any, {}, {}, {}>;
    Achievement: import("mongoose").Model<any, {}, {}, {}>;
    UserAchievement: import("mongoose").Model<any, {}, {}, {}>;
    UserAcknowledgement: import("mongoose").Model<any, {}, {}, {}>;
};
export var messaging: typeof import("./messaging");
