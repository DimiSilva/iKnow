const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        name: { type: String, index: true },
        phone: { type: String },
        email: { type: String, index: true },
        password: { type: String },
        whoIAm: { type: String, default: '' },
        whatDoIDo: { type: String, default: '' },
        myInterests: { type: String, default: '' },
    },
    { timestamps: { currentTime: () => new Date().toISOString() } },
)

const Model = mongoose.model('User', schema)

module.exports = Model
