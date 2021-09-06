const FastestValidator = require('fastest-validator')
const { missionSubjectsEnum, missionTypesEnum } = require('iknow-common/enums')

const fv = new FastestValidator({
    useNewCustomCheckerFunction: true,
})

const validator = fv.compile({
    title: { type: 'string', max: 100, min: 1, trim: true },
    type: { type: 'string', enum: Object.values(missionTypesEnum) },
    subject: { type: 'string', enum: Object.values(missionSubjectsEnum) },
    description: { type: 'string', min: 1, max: 1000 },
})

module.exports = validator
