const { Request, Response, NextFunction } = require('express')
const asyncHandler = require('express-async-handler')

const { NotFoundException } = require('iknow-common/utils/exceptions')
const { errorsEnum } = require('iknow-common/enums')
const { User } = require('../../../models')

/**
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */

const getProfileData = async (req, res, next) => {
    const { userId } = req.params
    const user = await User.findById(userId)
    if (!user) throw new NotFoundException(errorsEnum.NOT_FOUND)
    res.status(200).send({
        id: user._id,
        name: user.name,
        phone: user.phone,
        email: user.email,
        whoIAm: user.whoIAm,
        whatDoIDo: user.whatDoIDo,
        myInterests: user.myInterests,
    })
}

module.exports = asyncHandler(getProfileData)
