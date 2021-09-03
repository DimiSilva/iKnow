const { Request, Response, NextFunction } = require('express')

const { User } = require('../../../models')

/**
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */

const login = async (req, res, next) => {
  const users = await User.find()
  console.log(users)
  res.status(200).send('oloquinho')
}

module.exports = login
