const { achievementKeys, achievementTiers } = require('iknow-common/enums')

module.exports = [
    {
        title: 'Interagindo',
        description: '1ª mensagem trocada, não seja tímido, continue assim',
        key: achievementKeys.MESSAGES,
        requiredQuantity: 1,
        tier: achievementTiers.WOOD,
    },
    {
        title: 'Comunicação',
        description: '100ª mensagem trocada, comunicação é a chave de tudo',
        key: achievementKeys.MESSAGES,
        requiredQuantity: 100,
        tier: achievementTiers.BRONZE,
    },
    {
        title: 'Em busca de respostas',
        description: '500º mensagem trocada, você já encontrou alguma resposta?',
        key: achievementKeys.MESSAGES,
        requiredQuantity: 500,
        tier: achievementTiers.SILVER,
    },
    {
        title: 'Eu não discuto problemas, eu coloco fogo neles',
        description: '1000º mensagem trocada, eu discuto pra colocar fogo neles?',
        key: achievementKeys.MESSAGES,
        requiredQuantity: 1000,
        tier: achievementTiers.GOLD,
    },
    {
        title: 'Diálogos, diálogos por toda a parte',
        description: '10000º mensagem trocada, silêncio por favor, não estou conseguindo pensar',
        key: achievementKeys.MESSAGES,
        requiredQuantity: 10000,
        tier: achievementTiers.DIAMOND,
    },
]
