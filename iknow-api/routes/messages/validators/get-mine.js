const FastestValidator = require('fastest-validator')
const { missionCategoriesEnum, missionStatusEnum } = require('iknow-common/enums')

const fv = new FastestValidator({
    useNewCustomCheckerFunction: true,
})

const validator = fv.compile({
    perPage: { type: 'number', convert: true, default: 10 },
    withUser: { type: 'string', convert: true, optional: true },
    createdAtMax: { type: 'date', convert: true, optional: true },
})

module.exports = validator
