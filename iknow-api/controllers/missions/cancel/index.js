const _ = require('lodash')
const { Request, Response, NextFunction } = require('express')
const asyncHandler = require('express-async-handler')
const { NotFoundException, ForbiddenException } = require('iknow-common/utils/exceptions')
const { errorsEnum, missionStatusEnum } = require('iknow-common/enums')

const { Mission } = require('../../../models')

/**
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */

const cancel = async (req, res, next) => {
    const { missionId } = _.get(req, 'body', {})
    const { userId } = _.get(req, 'userPayload', {})

    const mission = await Mission.findById(missionId)
    if (!mission) throw new NotFoundException(errorsEnum.NOT_FOUND)
    if (mission.owner.toString() !== userId) throw new ForbiddenException(errorsEnum.CANNOT_CANCEL_ANOTHER_USER_MISSION)
    if (mission.status === missionStatusEnum.IN_PROGRESS) throw new ForbiddenException(errorsEnum.ALREADY_ACCEPTED_MISSION)
    if (mission.status === missionStatusEnum.COMPLETED) throw new ForbiddenException(errorsEnum.ALREADY_COMPLETED_MISSION)
    if (mission.status === missionStatusEnum.CANCELED) throw new ForbiddenException(errorsEnum.ALREADY_CANCELED_MISSION)

    mission.acceptedBy = undefined
    mission.status = missionStatusEnum.CANCELED
    await mission.save()

    res.status(200).send({})
}

module.exports = asyncHandler(cancel)
