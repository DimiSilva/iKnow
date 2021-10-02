const mongoose = require('mongoose')

const User = require('./user')
const Mission = require('./mission')
const Evaluation = require('./evaluation')
const Acknowledgement = require('./acknowledgement')
const Connection = require('./connection')
const Achievement = require('./achievement')
const UserAchievement = require('./user-achievement')
const UserAcknowledgement = require('./user-acknowledgement')

const setupModels = ($mongoose = mongoose) => ({
    User: User($mongoose),
    Mission: Mission($mongoose),
    Evaluation: Evaluation($mongoose),
    Acknowledgement: Acknowledgement($mongoose),
    Connection: Connection($mongoose),
    Achievement: Achievement($mongoose),
    UserAchievement: UserAchievement($mongoose),
    UserAcknowledgement: UserAcknowledgement($mongoose),
})

module.exports = setupModels
