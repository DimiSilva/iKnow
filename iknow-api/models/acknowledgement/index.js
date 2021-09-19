const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        title: { type: String, index: true, maxlength: 100, required: true },
        description: { type: String, maxlength: 1000, default: '' },
    },
    { timestamps: { currentTime: () => new Date().toISOString() } },
)

const Model = mongoose.model('Acknowledgment', schema)

module.exports = Model
