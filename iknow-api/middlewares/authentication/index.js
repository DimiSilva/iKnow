const { get } = require('lodash')
const asyncHandler = require('express-async-handler')
const { UnauthorizedException } = require('iknow-common/utils/exceptions')
const { errorsEnum } = require('iknow-common/enums')
const { decode } = require('jsonwebtoken')

const authentication = asyncHandler(async (req, res, next) => {
    const token = get(req, 'headers.authorization', '').replace('Bearer ', '')
    if (!token) throw new UnauthorizedException(errorsEnum.WITHOUT_AUTHORIZATION)
    try {
        const payload = decode(token, process.env.AUTHENTICATION_SECRET)
        req.userPayload = payload
    } catch (err) {
        throw new UnauthorizedException(errorsEnum.WITHOUT_AUTHORIZATION)
    } finally {
        next()
    }
})

module.exports = authentication
