const mongoose = require('mongoose')

const iknowCommon = require('iknow-common')

module.exports = ($mongoose = mongoose) => {
    const schema = new $mongoose.Schema(
        {
            content: { type: String, maxlength: 1000, required: true },
            to: { type: $mongoose.Schema.Types.ObjectId, ref: iknowCommon.enums.dbModels.USER, required: true },
            from: { type: $mongoose.Schema.Types.ObjectId, ref: iknowCommon.enums.dbModels.USER, required: true },
        },
        { timestamps: { currentTime: () => new Date().toISOString() } },
    )

    schema.index({ createdAt: -1 })

    const Model = $mongoose.model(iknowCommon.enums.dbModels.MESSAGE, schema)

    return Model
}
