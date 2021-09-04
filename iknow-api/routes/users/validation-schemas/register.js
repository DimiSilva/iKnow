const bcrypt = require('bcrypt')
const { errorsEnum } = require('iknow-common/enums')
const { User } = require('../../../models')

const validationSchema = {
    $$async: true,
    name: { type: 'string', max: 100, min: 1, trim: true, convert: true },
    email: { type: 'email',
        normalize: true,
        custom: async (v, errors) => {
            const alreadyRegisteredUser = await User.findOne({ email: v })
            if (alreadyRegisteredUser) errors.push({ message: errorsEnum.ALREADY_REGISTERED_USER })
            return v
        } },
    phone: { type: 'string', length: 11 },
    password: { type: 'string',
        min: 6,
        max: 30,
        convert: true,
        custom: async (v, errors) => bcrypt.hashSync(v, Number(process.env.PASSWORD_HASH_SALT_ROUNDS)),
    },
}

module.exports = validationSchema
