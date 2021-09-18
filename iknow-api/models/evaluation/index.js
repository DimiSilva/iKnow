const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        mission: { type: mongoose.Schema.Types.ObjectId, ref: 'Mission', required: true },
        value: { type: Number, max: 5, min: 0 },
    },
    { timestamps: { currentTime: () => new Date().toISOString() } },
)

const Model = mongoose.model('Evaluation', schema)

module.exports = Model
