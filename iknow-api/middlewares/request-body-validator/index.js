const FastestValidator = require('fastest-validator')
const { InvalidOperationException } = require('iknow-common/utils/exceptions')
const asyncHandler = require('express-async-handler')

const fv = new FastestValidator({
    useNewCustomCheckerFunction: true,
})

const validator = (validationSchema) => asyncHandler(async (req, res, next) => {
    const bodyValidator = fv.compile(validationSchema)
    const validatorResult = await bodyValidator(req.body)
    if (validatorResult === true) next()
    else throw new InvalidOperationException(JSON.stringify(validatorResult))
})

module.exports = validator
