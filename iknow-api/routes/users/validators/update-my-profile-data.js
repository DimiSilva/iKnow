const bcrypt = require('bcrypt')
const FastestValidator = require('fastest-validator')
const { errorsEnum } = require('iknow-common/enums')
const { User } = require('../../../models')

const fv = new FastestValidator({
    useNewCustomCheckerFunction: true,
})

const validator = fv.compile({
    $$async: true,
    name: { type: 'string', trim: true, convert: true, max: 100, optional: true },
    phone: { type: 'string', trim: true, convert: true, length: 11, optional: true },
    whoIAm: { type: 'string', trim: true, convert: true, max: 1000, optional: true },
    whatDoIDo: { type: 'string', trim: true, convert: true, max: 1000, optional: true },
    myInterests: { type: 'string', trim: true, convert: true, max: 1000, optional: true },
})

module.exports = validator
