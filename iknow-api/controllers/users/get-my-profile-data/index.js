const _ = require('lodash')
const { Request, Response, NextFunction } = require('express')
const asyncHandler = require('express-async-handler')

const { User, Evaluation } = require('../../../models')

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
    })
}

module.exports = asyncHandler(getMyProfileData)
