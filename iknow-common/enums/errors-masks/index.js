const { errorsEnum } = require('../index')

module.exports = {
    [errorsEnum.ALREADY_REGISTERED_USER]: 'Usuário já cadastrado',
    [errorsEnum.INVALID_EMAIL_OR_PASSWORD]: 'Email ou senha inválidos',
    [errorsEnum.WITHOUT_AUTHORIZATION]: 'Sem autorização',
    [errorsEnum.INTERNAL_ERROR]: 'Ocorreu um erro desconhecido, tente novamente mais tarde',
}
