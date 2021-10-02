const mongoose = require('mongoose')

const iknowCommon = require('iknow-common')

module.exports = ($mongoose = mongoose) => {
    const schema = new $mongoose.Schema(
        {
            title: { type: String, index: true, maxlength: 100, required: true },
            type: { type: String, enum: Object.values(iknowCommon.enums.acknowledgementTypes), required: true },
            description: { type: String, maxlength: 1000, default: '' },
        },
        { timestamps: { currentTime: () => new Date().toISOString() } },
    )

    const Model = $mongoose.model(iknowCommon.enums.dbModels.ACKNOWLEDGEMENT, schema)

    return Model
}
