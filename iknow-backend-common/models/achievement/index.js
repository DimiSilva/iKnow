const mongoose = require('mongoose')

const { achievementKeys, achievementTiers } = require('iknow-common/enums')

const schema = new mongoose.Schema(
    {
        title: { type: String, index: true, maxlength: 100, required: true },
        description: { type: String, maxlength: 1000, default: '' },
        key: { type: String, enum: Object.values(achievementKeys), required: true },
        requiredQuantity: { type: Number, min: 1, required: true },
        tier: { type: String, enum: Object.values(achievementTiers), required: true },
    },
    { timestamps: { currentTime: () => new Date().toISOString() } },
)

const Model = mongoose.model('Achievement', schema)

module.exports = Model
