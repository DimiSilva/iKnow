const mongoose = require('mongoose')

const { missionTypesEnum, missionSubjectsEnum, missionStatusEnum } = require('iknow-common/enums')

const schema = new mongoose.Schema(
    {
        title: { type: String, index: true, maxlength: 100, required: true },
        type: { type: String, index: true, enum: Object.values(missionTypesEnum), required: true },
        subject: { type: String, enum: Object.values(missionSubjectsEnum), index: true, required: true },
        description: { type: String, maxlength: 1000, default: '' },
        status: { type: String, index: true, enum: Object.values(missionStatusEnum), default: missionStatusEnum.IDLE },
        owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        acceptedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    },
    { timestamps: { currentTime: () => new Date().toISOString() } },
)

const Model = mongoose.model('Mission', schema)

module.exports = Model
