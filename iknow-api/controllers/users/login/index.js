const _ = require('lodash')
const { Request, Response, NextFunction } = require('express')
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')
const { sign } = require('jsonwebtoken')

const messaging = require('iknow-backend-common/messaging')
const iknowCommon = require('iknow-common')
const { UnauthorizedException } = require('iknow-common/utils/exceptions')
const { errorsEnum } = require('iknow-common/enums')

const { User } = require('../../../models')

/**
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */

const login = async (req, res, next) => {
    const { email, password } = _.get(req, 'body', {})
    const user = await User.findOne({ email })
    if (!user || !bcrypt.compareSync(password, user.password)) {
        throw new UnauthorizedException(errorsEnum.INVALID_EMAIL_OR_PASSWORD)
    }
    const token = sign({ userId: user._id, email: user.email, name: user.name }, process.env.AUTHENTICATION_SECRET)

    messaging.sendToQueue(iknowCommon.enums.messagingQueues.LOGIN, { userId: user._id })

    res.status(200).send({ token })
}

module.exports = asyncHandler(login)
