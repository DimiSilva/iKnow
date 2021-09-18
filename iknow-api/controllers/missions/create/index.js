const { get } = require('lodash')
const { Request, Response, NextFunction } = require('express')
const asyncHandler = require('express-async-handler')

const { Mission } = require('../../../models')

/**
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */

const create = async (req, res, next) => {
    const { title, type, subject, description } = get(req, 'body', {})
    const { userId } = get(req, 'userPayload', {})

    const mission = new Mission({ title, type, subject, description, owner: userId })
    await mission.save()

    res.status(200).send()
}

module.exports = asyncHandler(create)
