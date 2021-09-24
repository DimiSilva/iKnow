const _ = require('lodash')
const { Request, Response, NextFunction } = require('express')
const asyncHandler = require('express-async-handler')

const { Mission } = require('../../../models')

/**
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */

const getOne = async (req, res, next) => {
    const { missionId } = _.get(req, 'body', {})

    const mission = await Mission.findById(missionId).populate('owner', { name: 1, _id: 1 })

    res.status(200).send(mission)
}

module.exports = asyncHandler(getOne)
