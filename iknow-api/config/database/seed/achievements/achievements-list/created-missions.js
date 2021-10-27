const { achievementKeys, achievementTiers } = require('iknow-common/enums')

module.exports = [
    {
        title: 'Isso é uma missão?',
        description: '1ª missão criada, é só o começo...',
        key: achievementKeys.CREATED_MISSION,
        requiredQuantity: 1,
        tier: achievementTiers.WOOD,
    },
    {
        title: 'Atalho',
        description: '5ª missão criada, receber ajuda é um atalho ou o caminho correto?',
        key: achievementKeys.CREATED_MISSION,
        requiredQuantity: 5,
        tier: achievementTiers.BRONZE,
    },
    {
        title: 'Nada é verdade, tudo é permitido',
        description: '10ª missão criada, precisa de um assassino ou de um templário pra realizar essa?',
        key: achievementKeys.CREATED_MISSION,
        requiredQuantity: 10,
        tier: achievementTiers.SILVER,
    },
    {
        title: 'A vida tem tudo a ver com resolução. Resultado é secundário',
        description: '25ª missão criada, continuamos buscando resoluções...',
        key: achievementKeys.CREATED_MISSION,
        requiredQuantity: 25,
        tier: achievementTiers.GOLD,
    },
    {
        title: 'Todo quebra-cabeça tem uma solução',
        description: '50ª missão criada, uau, você deve ter muitos problemas pra resolver',
        key: achievementKeys.CREATED_MISSION,
        requiredQuantity: 50,
        tier: achievementTiers.DIAMOND,
    },
]
