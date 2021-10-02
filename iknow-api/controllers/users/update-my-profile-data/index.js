const _ = require('lodash')
const { Request, Response, NextFunction } = require('express')
const asyncHandler = require('express-async-handler')

const { User } = require('iknow-backend-common/models')

/**
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */

const updateMyProfileData = async (req, res, next) => {
    const { name, phone, whoIAm, whatDoIDo, myInterests } = _.get(req, 'body', {})
    const { userId } = _.get(req, 'userPayload', {})

    const user = await User.findById(userId)

    if (name !== undefined) user.name = name
    if (phone !== undefined) user.phone = phone
    if (whoIAm !== undefined) user.whoIAm = whoIAm
    if (whatDoIDo !== undefined) user.whatDoIDo = whatDoIDo
    if (myInterests !== undefined) user.myInterests = myInterests

    await user.save()

    res.status(200).send({})
}

module.exports = asyncHandler(updateMyProfileData)
