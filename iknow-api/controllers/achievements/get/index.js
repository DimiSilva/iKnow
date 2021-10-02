const _ = require('lodash')
const { Request, Response, NextFunction } = require('express')
const asyncHandler = require('express-async-handler')

const { Achievement } = require('../../../models')

/**
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */

const get = async (req, res, next) => {
    const { page, perPage } = _.get(req, 'body', {})

    const achievements = await Achievement.find()
        .skip((page * perPage) - perPage)
        .limit(perPage)

    const total = await Achievement.count()

    res.status(200).send({
        data: achievements,
        perPage,
        page,
        total,
        totalPages: Math.ceil(total / perPage),
    })
}

module.exports = asyncHandler(get)
