const FastestValidator = require('fastest-validator')
const { missionCategoriesEnum, missionStatusEnum } = require('iknow-common/enums')

const fv = new FastestValidator({
    useNewCustomCheckerFunction: true,
})

const validator = fv.compile({
    search: { type: 'string', optional: true },
    category: { type: 'string', enum: Object.values(missionCategoriesEnum), optional: true },
    status: { type: 'string', enum: Object.values(missionStatusEnum), optional: true },
    page: { type: 'number', convert: true, default: 1 },
    perPage: { type: 'number', convert: true, default: 10 },
    notBringMine: { type: 'boolean', convert: true, default: false },
})

module.exports = validator
