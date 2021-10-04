export = setupModels;
declare function setupModels($mongoose?: typeof mongoose): {
    User: mongoose.Model<any, {}, {}, {}>;
    Mission: mongoose.Model<any, {}, {}, {}>;
    Evaluation: mongoose.Model<any, {}, {}, {}>;
    Acknowledgement: mongoose.Model<any, {}, {}, {}>;
    Connection: mongoose.Model<any, {}, {}, {}>;
    Achievement: mongoose.Model<any, {}, {}, {}>;
    UserAchievement: mongoose.Model<any, {}, {}, {}>;
    UserAcknowledgement: mongoose.Model<any, {}, {}, {}>;
    Message: mongoose.Model<any, {}, {}, {}>;
};
import mongoose = require("mongoose");
