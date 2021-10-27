const _ = require('lodash')
const { Request, Response, NextFunction } = require('express')
const asyncHandler = require('express-async-handler')
const { sign } = require('jsonwebtoken')

const messaging = require('iknow-backend-common/messaging')
const iknowCommon = require('iknow-common')

const { User } = require('../../../models')

/**
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */

const loginSignal = async (req, res, next) => {
    const { userId } = _.get(req, 'userPayload', {})
    const user = await User.findById(userId)

    messaging.sendToQueue(iknowCommon.enums.messagingQueues.LOGIN, { userId: user._id })

    res.status(200).send({ })
}

module.exports = asyncHandler(loginSignal)
