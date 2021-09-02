const { Request, Response, NextFunction } = require('express')

/**
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */

const login = (req, res, next) => {
  console.log('teste')
}

module.exports = login
