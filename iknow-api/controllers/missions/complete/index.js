const _ = require('lodash')
const { Request, Response, NextFunction } = require('express')
const asyncHandler = require('express-async-handler')
const { NotFoundException, ForbiddenException } = require('iknow-common/utils/exceptions')
const { errorsEnum, missionStatusEnum } = require('iknow-common/enums')

const messaging = require('iknow-backend-common/messaging')
const iknowCommon = require('iknow-common')
const { Mission, Evaluation, UserAcknowledgement } = require('../../../models')

/**
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */

const complete = async (req, res, next) => {
    const { missionId, evaluation, acknowledgement } = _.get(req, 'body', {})
    const { userId } = _.get(req, 'userPayload', {})

    const mission = await Mission.findById(missionId)
    if (!mission) throw new NotFoundException(errorsEnum.NOT_FOUND)
    if (mission.owner.toString() !== userId) throw new ForbiddenException(errorsEnum.CANNOT_COMPLETE_ANOTHER_USERS_MISSION)
    if (mission.status !== missionStatusEnum.IN_PROGRESS) throw new ForbiddenException(errorsEnum.MISSION_NOT_IN_PROGRESS)

    const session = await Mission.startSession()
    session.startTransaction()

    mission.status = missionStatusEnum.COMPLETED
    await mission.save({ session })

    if (evaluation) {
        const newEvaluation = new Evaluation({ value: evaluation, user: mission.acceptedBy, mission: mission._id })
        await newEvaluation.save({ session })
    }

    if (acknowledgement) {
        messaging.sendToQueue(iknowCommon.enums.messagingQueues.SEND_ACKNOWLEDGEMENT, { userId })
        messaging.sendToQueue(iknowCommon.enums.messagingQueues.RECEIVED_ACKNOWLEDGEMENT, { userId: mission.acceptedBy })
        const userAcknowledgement = new UserAcknowledgement({ user: mission.acceptedBy, mission: mission._id, acknowledgement })
        await userAcknowledgement.save({ session })
    }

    await session.commitTransaction()
    messaging.sendToQueue(iknowCommon.enums.messagingQueues.CONCLUDED_MISSION, { userId: mission.acceptedBy })
    session.endSession()

    res.status(200).send({})
}

module.exports = asyncHandler(complete)
