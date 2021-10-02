const _ = require('lodash')
const { Request, Response, NextFunction } = require('express')
const asyncHandler = require('express-async-handler')

const { Acknowledgement } = require('iknow-backend-common/models')

/**
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */

const get = async (req, res, next) => {
    const { page, perPage } = _.get(req, 'body', {})

    const acknowledgements = await Acknowledgement.find()
        .skip((page * perPage) - perPage)
        .limit(perPage)

    const total = await Acknowledgement.count()

    res.status(200).send({
        data: acknowledgements,
        perPage,
        page,
        total,
        totalPages: Math.ceil(total / perPage),
    })
}

module.exports = asyncHandler(get)
