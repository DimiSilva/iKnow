const { errorsEnum } = require('../index')

module.exports = {
    [errorsEnum.ALREADY_REGISTERED_USER]: 'Usuário já cadastrado',
    [errorsEnum.INVALID_EMAIL_OR_PASSWORD]: 'Email ou senha inválidos',
    [errorsEnum.WITHOUT_AUTHORIZATION]: 'Sem autorização',
    [errorsEnum.INTERNAL_ERROR]: 'Ocorreu um erro desconhecido, tente novamente mais tarde',
    [errorsEnum.NOT_FOUND]: 'Não encontrado...',
    [errorsEnum.NOT_FOUND_USER]: 'Usuário não encontrado',
    [errorsEnum.NOT_FOUND_MISSION]: 'Missão Não encontrada',
    [errorsEnum.CANNOT_ACCEPT_OWN_MISSION]: 'Não é possível aceitar a própria missão',
    [errorsEnum.CANNOT_COMPLETE_ANOTHER_USERS_MISSION]: 'Não é possível concluir a missão de outro usuário',
    [errorsEnum.ALREADY_ACCEPTED_MISSION]: 'A missão já foi aceita',
    [errorsEnum.ALREADY_COMPLETED_MISSION]: 'A missão já foi concluida',
    [errorsEnum.MISSION_NOT_IN_PROGRESS]: 'A missão não está em progresso',
    [errorsEnum.CANNOT_CANCEL_ANOTHER_USER_MISSION]: 'Não é possível cancelar a missão de outro usuário',
    [errorsEnum.ALREADY_CANCELED_MISSION]: 'A missão já foi cancelada',
    [errorsEnum.CANNOT_UNBIND_ANOTHER_USER_MISSION]: 'Não é possível desvincular a missão de outro usuário',
    [errorsEnum.YOU_NOT_IN_THIS_MISSION]: 'Você não está nessa missão',
    [errorsEnum.ALREADY_ADDED_USER]: 'Usuário já adicionado',
}
