const { missionStatusEnum } = require('../index')

module.exports = {
    [missionStatusEnum.IDLE]: 'Em espera',
    [missionStatusEnum.IN_PROGRESS]: 'Em progresso',
    [missionStatusEnum.COMPLETED]: 'Concluída',
    [missionStatusEnum.CANCELED]: 'Cancelada',
}
