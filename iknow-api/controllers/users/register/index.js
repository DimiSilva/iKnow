const { get } = require('lodash')
const { Request, Response, NextFunction } = require('express')
const asyncHandler = require('express-async-handler')

const { User } = require('../../../models')

/**
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */

const register = async (req, res, next) => {
    const { name, email, password, phone } = get(req, 'body', {})

    const user = new User({ name, email, password, phone })
    const registeredUser = await user.save()

    res.status(200).send({ id: registeredUser._id })
}

module.exports = asyncHandler(register)
