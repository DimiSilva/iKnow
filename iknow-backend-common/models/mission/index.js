const mongoose = require('mongoose')

const { missionCategoriesEnum, missionStatusEnum } = require('iknow-common/enums')

const schema = new mongoose.Schema(
    {
        title: { type: String, index: true, maxlength: 100, required: true },
        category: { type: String, enum: Object.values(missionCategoriesEnum), index: true, required: true },
        description: { type: String, maxlength: 1000, default: '' },
        status: { type: String, index: true, enum: Object.values(missionStatusEnum), default: missionStatusEnum.IDLE },
        owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        acceptedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    },
    { timestamps: { currentTime: () => new Date().toISOString() } },
)

schema.index({ createdAt: -1 })

const Model = mongoose.model('Mission', schema)

module.exports = Model
