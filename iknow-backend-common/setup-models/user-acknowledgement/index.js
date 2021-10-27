const mongoose = require('mongoose')

const iknowCommon = require('iknow-common')

module.exports = ($mongoose = mongoose) => {
    const schema = new $mongoose.Schema(
        {
            user: { type: $mongoose.Schema.Types.ObjectId, ref: iknowCommon.enums.dbModels.USER, required: true },
            acknowledgement: { type: $mongoose.Schema.Types.ObjectId, ref: iknowCommon.enums.dbModels.ACKNOWLEDGEMENT, required: true },
            mission: { type: $mongoose.Schema.Types.ObjectId, ref: iknowCommon.enums.dbModels.MISSION, required: true },
        },
        { timestamps: { currentTime: () => new Date().toISOString() } },
    )

    const Model = $mongoose.model(iknowCommon.enums.dbModels.USER_ACKNOWLEDGEMENT, schema)

    return Model
}
