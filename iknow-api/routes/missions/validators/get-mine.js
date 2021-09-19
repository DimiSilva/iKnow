const FastestValidator = require('fastest-validator')
const { missionTypesEnum, missionSubjectsEnum, missionStatusEnum } = require('iknow-common/enums')

const fv = new FastestValidator({
    useNewCustomCheckerFunction: true,
})

const validator = fv.compile({
    search: { type: 'string', optional: true },
    type: { type: 'string', enum: Object.values(missionTypesEnum), optional: true },
    subject: { type: 'string', enum: Object.values(missionSubjectsEnum), optional: true },
    status: { type: 'string', enum: Object.values(missionStatusEnum), optional: true },
    page: { type: 'number', default: 1 },
    perPage: { type: 'number', default: 10 },
})

module.exports = validator
