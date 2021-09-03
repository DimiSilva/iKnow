const bcrypt = require('bcrypt')

const validationSchema = {
    email: { type: 'email', normalize: true },
    password: { type: 'string',
        min: 6,
        max: 30,
        convert: true,
        custom: async (v, errors) => bcrypt.hashSync(v, Number(process.env.PASSWORD_HASH_SALT_ROUNDS)),
    },
}

module.exports = validationSchema
