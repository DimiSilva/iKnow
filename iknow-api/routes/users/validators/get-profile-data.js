const FastestValidator = require('fastest-validator')

const fv = new FastestValidator({
    useNewCustomCheckerFunction: true,
})

const validator = fv.compile({
    $$async: true,
    userId: { type: 'string', trim: true, convert: true },
    checkIfIsConnected: { type: 'boolean', optional: true, convert: true },
})

module.exports = validator
