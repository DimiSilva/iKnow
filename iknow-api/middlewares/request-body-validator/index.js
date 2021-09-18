const asyncHandler = require('express-async-handler')
const { InvalidOperationException } = require('iknow-common/utils/exceptions')

const requestBodyValidator = (validator) => asyncHandler(async (req, res, next) => {
    const validatorResult = await validator({ ...req.body, ...req.params, ...req.query })
    if (validatorResult === true) next()
    else throw new InvalidOperationException(JSON.stringify(validatorResult))
})

module.exports = requestBodyValidator
