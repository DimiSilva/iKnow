const FastestValidator = require('fastest-validator')
const { missionCategoriesEnum, missionStatusEnum } = require('iknow-common/enums')

const fv = new FastestValidator({
    useNewCustomCheckerFunction: true,
})

const validator = fv.compile({
    search: { type: 'string', optional: true },
    page: { type: 'number', convert: true, default: 1 },
    perPage: { type: 'number', convert: true, default: 10 },
    dontBringMyContacts: { type: 'boolean', convert: true, optional: true },
})

module.exports = validator
