const _ = require('lodash')
const { Request, Response, NextFunction } = require('express')
const asyncHandler = require('express-async-handler')

const { Message } = require('../../../models')

/**
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */

const getMine = async (req, res, next) => {
    const { perPage, withUser, createdAtMax } = _.get(req, 'body', {})
    const { userId } = _.get(req, 'userPayload', {})

    const query = {
        ...(withUser ? { $or: [{ to: withUser }, { to: userId }] } : {}),
        ...(createdAtMax ? { createdAt: { $lt: createdAtMax } } : {}),
        $or: [
            { from: userId },
            (withUser ? { from: withUser } : {}),
        ],
    }

    const messages = await Message.find(query)
        .sort({ createdAt: -1 })
        .limit(perPage)

    const total = await Message.count(query)

    res.status(200).send({
        data: messages,
        perPage,
        createdAtMax,
        total,
        totalPages: Math.ceil(total / perPage),
    })
}

module.exports = asyncHandler(getMine)
