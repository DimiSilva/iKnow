const FastestValidator = require('fastest-validator')
const asyncHandler = require('express-async-handler')

const fv = new FastestValidator({
    useNewCustomCheckerFunction: true,
})

const validator = (validationSchema) => asyncHandler(async (req, res, next) => {
    const bodyValidator = fv.compile(validationSchema)
    const validatorResult = await bodyValidator(req.body)
    if (validatorResult === true) next()
    else throw new Error(JSON.stringify(validatorResult))
})

module.exports = validator
