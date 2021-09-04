const FastestValidator = require('fastest-validator')

const fv = new FastestValidator({
    useNewCustomCheckerFunction: true,
})

const validator = fv.compile({
    $$async: true,
    email: { type: 'email', normalize: true },
    password: { type: 'string',
        min: 6,
        max: 30,
        convert: true,
    },
})

module.exports = validator
