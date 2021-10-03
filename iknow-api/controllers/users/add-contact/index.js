const _ = require('lodash')
const { Request, Response, NextFunction } = require('express')
const asyncHandler = require('express-async-handler')

const messaging = require('iknow-backend-common/messaging')
const iknowCommon = require('iknow-common')
const { ConflictException } = require('iknow-common/utils/exceptions')
const { errorsEnum } = require('iknow-common/enums')

const { Connection } = require('../../../models')

/**
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */

const addContact = async (req, res, next) => {
    const { userId: recipient } = _.get(req, 'body', {})
    const { userId: remitter } = _.get(req, 'userPayload', {})

    const alreadyExistentConnection = await Connection.findOne({
        $or: [
            { remitter },
            { recipient },
        ],
    })
    if (alreadyExistentConnection) throw new ConflictException(errorsEnum.ALREADY_ADDED_USER)

    const connection = new Connection({
        remitter,
        recipient,
    })

    await connection.save()

    messaging.sendToQueue(iknowCommon.enums.messagingQueues.CONTACT, { userId: remitter })

    res.status(200).send({ })
}

module.exports = asyncHandler(addContact)
