const _ = require('lodash')
const { Request, Response, NextFunction } = require('express')
const asyncHandler = require('express-async-handler')

const { User, Connection } = require('../../../models')

/**
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */

const get = async (req, res, next) => {
    const { search, page, perPage, dontBringMyContacts } = _.get(req, 'body', {})
    const { userId } = _.get(req, 'userPayload', {})

    const myConnections = dontBringMyContacts ? await Connection.find({ remitter: userId }) : []

    const query = {
        ...(search ? {
            $or: [
                { name: { $regex: search, $options: 'i' } },
                { email: { $regex: search, $options: 'i' } },
            ],
        } : {}),
        $and: [
            { _id: { $ne: userId } },
            (dontBringMyContacts ? { _id: { $nin: myConnections.map((connection) => connection.recipient) } } : {}),
        ],
    }

    const users = await User.find(query)
        .sort({ createdAt: -1 })
        .skip((page * perPage) - perPage)
        .limit(perPage)

    const total = await User.count(query)

    res.status(200).send({
        data: users,
        perPage,
        page,
        total,
        totalPages: Math.ceil(total / perPage),
    })
}

module.exports = asyncHandler(get)
