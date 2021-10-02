const { acknowledgementTypes } = require('iknow-common/enums')

const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        title: { type: String, index: true, maxlength: 100, required: true },
        type: { type: String, enum: Object.values(acknowledgementTypes), required: true },
        description: { type: String, maxlength: 1000, default: '' },
    },
    { timestamps: { currentTime: () => new Date().toISOString() } },
)

const Model = mongoose.model('Acknowledgement', schema)

module.exports = Model
