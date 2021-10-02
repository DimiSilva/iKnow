const mongoose = require('mongoose')

const achievementsControlSchema = new mongoose.Schema(
    {
        completedMissions: { type: Number, integer: true, default: 0 },
        createdMissions: { type: Number, integer: true, default: 0 },
        messages: { type: Number, integer: true, default: 0 },
        login: { type: Number, integer: true, default: 0 },
        receivedAcknowledgements: { type: Number, integer: true, default: 0 },
        sendAcknowledgements: { type: Number, integer: true, default: 0 },
        contacts: { type: Number, integer: true, default: 0 },
    },
)

const schema = new mongoose.Schema(
    {
        name: { type: String, index: true, max: 100, required: true },
        phone: { type: String, length: 11 },
        email: { type: String, index: true, required: true, unique: true },
        password: { type: String, max: 30, required: true },
        whoIAm: { type: String, default: '', max: 1000 },
        whatDoIDo: { type: String, default: '', max: 1000 },
        myInterests: { type: String, default: '', max: 1000 },
        achievementsControl: { type: achievementsControlSchema },
    },
    { timestamps: { currentTime: () => new Date().toISOString() } },
)

const Model = mongoose.model('User', schema)

module.exports = Model
