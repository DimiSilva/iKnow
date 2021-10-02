const mongoose = require('mongoose')

const iknowCommon = require('iknow-common')

module.exports = ($mongoose = mongoose) => {
    const schema = new $mongoose.Schema(
        {
            user: { type: $mongoose.Schema.Types.ObjectId, ref: iknowCommon.enums.dbModels.USER, required: true },
            mission: { type: $mongoose.Schema.Types.ObjectId, ref: iknowCommon.enums.dbModels.MISSION, required: true },
            value: { type: Number, max: 5, min: 0 },
        },
        { timestamps: { currentTime: () => new Date().toISOString() } },
    )

    const Model = $mongoose.model(iknowCommon.enums.dbModels.EVALUATION, schema)

    return Model
}
