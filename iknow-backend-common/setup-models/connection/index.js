const mongoose = require('mongoose')

const iknowCommon = require('iknow-common')

module.exports = ($mongoose = mongoose) => {
    const schema = new $mongoose.Schema(
        {
            user1: { type: $mongoose.Schema.Types.ObjectId, ref: iknowCommon.enums.dbModels.USER, required: true },
            user2: { type: $mongoose.Schema.Types.ObjectId, ref: iknowCommon.enums.dbModels.USER, required: true },
        },
        { timestamps: { currentTime: () => new Date().toISOString() } },
    )

    const Model = $mongoose.model(iknowCommon.enums.dbModels.CONNECTION, schema)

    return Model
}
