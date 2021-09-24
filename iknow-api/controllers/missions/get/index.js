const _ = require('lodash')
const { Request, Response, NextFunction } = require('express')
const asyncHandler = require('express-async-handler')

const { missionStatusEnum } = require('iknow-common/enums')
const { Mission } = require('../../../models')

/**
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */

const get = async (req, res, next) => {
    const { search, category, status, page, perPage, notBringMine } = _.get(req, 'body', {})
    const { userId } = _.get(req, 'userPayload', {})

    const query = {
        ...(search ? { title: { $regex: search, $options: 'i' } } : {}),
        ...(category ? { category } : {}),
        ...(status ? { status } : { status: { $ne: missionStatusEnum.CANCELED } }),
        ...(notBringMine ? { owner: { $ne: userId } } : {}),
    }

    const missions = await Mission.find(query).populate('owner', { name: 1, _id: 1 })
        .skip((page * perPage) - perPage)
        .limit(perPage)

    const total = await Mission.count(query)

    res.status(200).send({
        data: missions,
        perPage,
        page,
        total,
        totalPages: Math.ceil(total / perPage),
    })
}

module.exports = asyncHandler(get)
