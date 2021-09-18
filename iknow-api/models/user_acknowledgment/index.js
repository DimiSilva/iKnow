const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        acknowledgment: { type: mongoose.Schema.Types.ObjectId, ref: 'Acknowledgment', required: true },
        mission: { type: mongoose.Schema.Types.ObjectId, ref: 'Mission', required: true },
    },
    { timestamps: { currentTime: () => new Date().toISOString() } },
)

const Model = mongoose.model('UserAcknowledgment', schema)

module.exports = Model
