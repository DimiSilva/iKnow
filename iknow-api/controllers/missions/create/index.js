const _ = require('lodash')
const { Request, Response, NextFunction } = require('express')
const asyncHandler = require('express-async-handler')

const messaging = require('iknow-backend-common/messaging')
const iknowCommon = require('iknow-common')
const { Mission } = require('../../../models')

/**
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */

const create = async (req, res, next) => {
    const { title, category, description } = _.get(req, 'body', {})
    const { userId } = _.get(req, 'userPayload', {})

    const mission = new Mission({ title, category, description, owner: userId })
    await mission.save()

    messaging.sendToQueue(iknowCommon.enums.messagingQueues.CREATED_MISSION, { userId })

    res.status(200).send({})
}

module.exports = asyncHandler(create)
