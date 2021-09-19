const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        acknowledgement: { type: mongoose.Schema.Types.ObjectId, ref: 'Acknowledgement', required: true },
        mission: { type: mongoose.Schema.Types.ObjectId, ref: 'Mission', required: true },
    },
    { timestamps: { currentTime: () => new Date().toISOString() } },
)

const Model = mongoose.model('User_Acknowledgement', schema)

module.exports = Model
