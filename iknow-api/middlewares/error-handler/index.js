const { Request, Response, NextFunction } = require('express')

/**
 * @param {Error} err
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */

const errorHandler = (err, req, res, next) => {
    res.status(err.status || 500).send({ error: err.message })
}

module.exports = errorHandler
