const { achievementKeys, achievementTiers } = require('iknow-common/enums')

module.exports = [
    {
        title: 'É perigoso ir sozinho, pegue isso',
        description: '1ª missão concluída, mas espere, não é seguro ir sozinho, leve essa espada com você',
        key: achievementKeys.CONCLUDED_MISSION,
        requiredQuantity: 1,
        tier: achievementTiers.WOOD,
    },
    {
        title: 'A princesa está em outro castelo',
        description: '5ª missão concluída, parece que a princesa está em outro castelo...',
        key: achievementKeys.CONCLUDED_MISSION,
        requiredQuantity: 5,
        tier: achievementTiers.BRONZE,
    },
    {
        title: 'Eu costumava ser um aventureiro como você',
        description: '10ª missão concluída, você está se tornando um aventureiro',
        key: achievementKeys.CONCLUDED_MISSION,
        requiredQuantity: 10,
        tier: achievementTiers.SILVER,
    },
    {
        title: 'Bruxo',
        description: '25ª missão concluída, Gerald ficaria orgulhoso',
        key: achievementKeys.CONCLUDED_MISSION,
        requiredQuantity: 25,
        tier: achievementTiers.GOLD,
    },
    {
        title: 'Skyrim?',
        description: '50ª missão concluída, você gosta de Skyrim?',
        key: achievementKeys.CONCLUDED_MISSION,
        requiredQuantity: 50,
        tier: achievementTiers.DIAMOND,
    },
]
