const _ = require('lodash')
const { Request, Response, NextFunction } = require('express')
const asyncHandler = require('express-async-handler')

const { Connection, User } = require('../../../models')

/**
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */

const removeContact = async (req, res, next) => {
    const { userId: recipient } = _.get(req, 'body', {})
    const { userId: remitter } = _.get(req, 'userPayload', {})

    const removeRes = await Connection.remove({
        $or: [
            { $or: [
                { remitter },
                { recipient },
            ] },
        ],
    })

    if (removeRes.deletedCount > 0) {
        const user = await User.findById(remitter)
        user.achievementsControl.contacts -= 1
        await user.save()
    }

    res.status(200).send({ })
}

module.exports = asyncHandler(removeContact)
