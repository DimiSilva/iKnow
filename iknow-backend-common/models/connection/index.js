const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        user1: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        user2: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    },
    { timestamps: { currentTime: () => new Date().toISOString() } },
)

const Model = mongoose.model('Connection', schema)

module.exports = Model
