const { achievementKeys, achievementTiers } = require('iknow-common/enums')

module.exports = [
    {
        title: 'Bem vindo',
        description: '1º login diário, seja bem vindo!',
        key: achievementKeys.LOGIN,
        requiredQuantity: 1,
        tier: achievementTiers.WOOD,
    },
    {
        title: 'Ainda por aqui?',
        description: '5º login diário, ei estou feliz por vê-lo novamente!',
        key: achievementKeys.LOGIN,
        requiredQuantity: 5,
        tier: achievementTiers.BRONZE,
    },
    {
        title: 'O bom filho a casa torna',
        description: '10º login diário, welcome to the family, son',
        key: achievementKeys.LOGIN,
        requiredQuantity: 10,
        tier: achievementTiers.SILVER,
    },
    {
        title: 'I’ll be Back',
        description: '25º login diário, aparentemente você sempre volta, interessante...',
        key: achievementKeys.LOGIN,
        requiredQuantity: 25,
        tier: achievementTiers.GOLD,
    },
    {
        title: 'Não há lugar como 127.0.0.1',
        description: '50º login diário, bem vindo de volta',
        key: achievementKeys.LOGIN,
        requiredQuantity: 50,
        tier: achievementTiers.DIAMOND,
    },
]
