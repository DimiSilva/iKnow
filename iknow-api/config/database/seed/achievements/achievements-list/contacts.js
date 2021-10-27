const { achievementKeys, achievementTiers } = require('iknow-common/enums')

module.exports = [
    {
        title: 'User Friendly',
        description: '1º contato adicionado, você não é antissocial, apenas não amigável ao usuário',
        key: achievementKeys.CONTACT,
        requiredQuantity: 1,
        tier: achievementTiers.WOOD,
    },
    {
        title: 'Fazendo amigos',
        description: '5º contato adicionado, parece que você não está mais sozinho',
        key: achievementKeys.CONTACT,
        requiredQuantity: 5,
        tier: achievementTiers.BRONZE,
    },
    {
        title: 'MMO',
        description: '10º contato adicionado, é muito melhor farmar em grupo',
        key: achievementKeys.CONTACT,
        requiredQuantity: 10,
        tier: achievementTiers.SILVER,
    },
    {
        title: 'Você vai precisar de um barco maior!',
        description: '25º contato adicionado, tem muita gente por aqui...',
        key: achievementKeys.CONTACT,
        requiredQuantity: 25,
        tier: achievementTiers.GOLD,
    },
    {
        title: 'Hakuna Matata',
        description: '50º contato adicionado, ei eu quero ser seu amigo também',
        key: achievementKeys.CONTACT,
        requiredQuantity: 50,
        tier: achievementTiers.DIAMOND,
    },
]
