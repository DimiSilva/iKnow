const mongoose = require('mongoose')

const iknowCommon = require('iknow-common')

module.exports = ($mongoose = mongoose) => {
    const schema = new $mongoose.Schema(
        {
            title: { type: String, index: true, maxlength: 100, required: true },
            description: { type: String, maxlength: 1000, default: '' },
            key: { type: String, enum: Object.values(iknowCommon.enums.achievementKeys), required: true },
            requiredQuantity: { type: Number, min: 1, required: true },
            tier: { type: String, enum: Object.values(iknowCommon.enums.achievementTiers), required: true },
        },
        { timestamps: { currentTime: () => new Date().toISOString() } },
    )

    const Model = $mongoose.model(iknowCommon.enums.dbModels.ACHIEVEMENT, schema)

    return Model
}
