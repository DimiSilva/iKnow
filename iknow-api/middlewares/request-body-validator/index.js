const asyncHandler = require('express-async-handler')
const { InvalidOperationException } = require('iknow-common/utils/exceptions')

const requestBodyValidator = (validator) => asyncHandler(async (req, res, next) => {
    req.body = { ...req.body, ...req.query, ...req.params }
    const validatorResult = await validator(req.body)
    if (validatorResult === true) next()
    else throw new InvalidOperationException(JSON.stringify(validatorResult))
})

module.exports = requestBodyValidator
