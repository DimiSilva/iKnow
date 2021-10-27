const FastestValidator = require('fastest-validator')

const fv = new FastestValidator({
    useNewCustomCheckerFunction: true,
})

const validator = fv.compile({
    search: { type: 'string', optional: true },
    page: { type: 'number', convert: true, default: 1 },
    perPage: { type: 'number', convert: true, default: 10 },
})

module.exports = validator
