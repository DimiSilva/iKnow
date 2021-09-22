const FastestValidator = require('fastest-validator')
const { missionCategoriesEnum } = require('iknow-common/enums')

const fv = new FastestValidator({
    useNewCustomCheckerFunction: true,
})

const validator = fv.compile({
    title: { type: 'string', max: 100, min: 1, trim: true },
    category: { type: 'string', enum: Object.values(missionCategoriesEnum) },
    description: { type: 'string', max: 1000, default: '' },
})

module.exports = validator
