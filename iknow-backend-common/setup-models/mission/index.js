const mongoose = require('mongoose')

const iknowCommon = require('iknow-common')

module.exports = ($mongoose = mongoose) => {
    const schema = new $mongoose.Schema(
        {
            title: { type: String, index: true, maxlength: 100, required: true },
            category: { type: String, enum: Object.values(iknowCommon.enums.missionCategoriesEnum), index: true, required: true },
            description: { type: String, maxlength: 1000, default: '' },
            status: { type: String, index: true, enum: Object.values(iknowCommon.enums.missionStatusEnum), default: iknowCommon.enums.missionStatusEnum.IDLE },
            owner: { type: $mongoose.Schema.Types.ObjectId, ref: iknowCommon.enums.dbModels.USER, required: true },
            acceptedBy: { type: $mongoose.Schema.Types.ObjectId, ref: iknowCommon.enums.dbModels.USER },
        },
        { timestamps: { currentTime: () => new Date().toISOString() } },
    )

    schema.index({ createdAt: -1 })

    const Model = $mongoose.model(iknowCommon.enums.dbModels.MISSION, schema)

    return Model
}
