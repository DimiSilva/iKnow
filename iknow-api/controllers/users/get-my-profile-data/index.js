const _ = require('lodash')
const { Request, Response, NextFunction } = require('express')
const asyncHandler = require('express-async-handler')

const { User, Evaluation, UserAcknowledgement, UserAchievement } = require('iknow-backend-common/models')
/**
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */

const getMyProfileData = async (req, res, next) => {
    const { userId } = _.get(req, 'userPayload', {})

    const user = await User.findById(userId)

    const evaluations = await Evaluation.find({ user: userId })

    const totalEvalutions = evaluations.length
    const evaluationsTotal = evaluations.reduce((evaluationsSum, currentEvaluation) => evaluationsSum + currentEvaluation.value, 0)
    const evaluationsMedia = evaluationsTotal / totalEvalutions

    const acknowledgements = await UserAcknowledgement.find({ user: userId }).populate('acknowledgement')
    const achievements = await UserAchievement.find({ user: userId }).populate('achievement')

    res.status(200).send({
        id: user._id,
        name: user.name,
        phone: user.phone,
        email: user.email,
        whoIAm: user.whoIAm,
        whatDoIDo: user.whatDoIDo,
        myInterests: user.myInterests,
        totalEvalutions,
        evaluationsMedia,
        achievements,
        acknowledgements,
    })
}

module.exports = asyncHandler(getMyProfileData)
