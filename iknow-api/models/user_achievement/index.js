const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        achievement: { type: mongoose.Schema.Types.ObjectId, ref: 'Achievement', required: true },
    },
    { timestamps: { currentTime: () => new Date().toISOString() } },
)

const Model = mongoose.model('UserAchievement', schema)

module.exports = Model
