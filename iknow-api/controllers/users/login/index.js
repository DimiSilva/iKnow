const { get } = require('lodash')
const { Request, Response, NextFunction } = require('express')
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')
const { sign } = require('jsonwebtoken')

const { UnauthorizedException } = require('iknow-common/utils/exceptions')
const { errorsEnum } = require('iknow-common/enums')

const { User } = require('iknow-backend-common/models')

/**
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */

const login = async (req, res, next) => {
    const { email, password } = get(req, 'body', {})
    const user = await User.findOne({ email })
    if (!user || !bcrypt.compareSync(password, user.password)) {
        throw new UnauthorizedException(errorsEnum.INVALID_EMAIL_OR_PASSWORD)
    }
    const token = sign({ userId: user._id, email: user.email, name: user.name }, process.env.AUTHENTICATION_SECRET)

    res.status(200).send({ token })
}

module.exports = asyncHandler(login)
