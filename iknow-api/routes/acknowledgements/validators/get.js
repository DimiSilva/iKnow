const FastestValidator = require('fastest-validator')
const { missionCategoriesEnum, missionStatusEnum } = require('iknow-common/enums')

const fv = new FastestValidator({
    useNewCustomCheckerFunction: true,
})

const validator = fv.compile({
    page: { type: 'number', convert: true, default: 1 },
    perPage: { type: 'number', convert: true, default: 10 },
})

module.exports = validator
