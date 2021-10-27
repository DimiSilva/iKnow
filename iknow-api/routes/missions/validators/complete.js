const FastestValidator = require('fastest-validator')

const fv = new FastestValidator({
    useNewCustomCheckerFunction: true,
})

const validator = fv.compile({
    missionId: { type: 'string' },
    evaluation: { type: 'number', min: 0, max: 5, optional: true },
    acknowledgement: { type: 'string', optional: true },
})

module.exports = validator
