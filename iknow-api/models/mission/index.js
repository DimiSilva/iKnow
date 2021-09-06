const mongoose = require('mongoose')

const { missionTypesEnum, missionSubjectsEnum } = require('iknow-common/enums')

const schema = new mongoose.Schema(
    {
        title: { type: String, index: true },
        type: { type: String, index: true, enum: Object.values(missionTypesEnum) },
        subject: { type: String, enum: Object.values(missionSubjectsEnum), index: true },
        description: { type: String },
    },
    { timestamps: { currentTime: () => new Date().toISOString() } },
)

const Model = mongoose.model('Mission', schema)

module.exports = Model
