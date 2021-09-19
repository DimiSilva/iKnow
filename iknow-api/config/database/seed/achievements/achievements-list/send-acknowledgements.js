const { achievementKeys, achievementTiers } = require('iknow-common/enums')

module.exports = [
    {
        title: 'Você até que é legal',
        description: '1º elogio enviado, muito legal da sua parte',
        key: achievementKeys.SEND_ACKNOWLEDGEMENT,
        requiredQuantity: 1,
        tier: achievementTiers.WOOD,
    },
    {
        title: 'Get over here!',
        description: '5º elogio enviado, vem cá e me da um abraço',
        key: achievementKeys.SEND_ACKNOWLEDGEMENT,
        requiredQuantity: 5,
        tier: achievementTiers.BRONZE,
    },
    {
        title: 'Eu não machuco pessoas',
        description: '10º elogio enviado, a grama cresce, os passáros voam, o sol brilha e irmão, você faz elogios',
        key: achievementKeys.SEND_ACKNOWLEDGEMENT,
        requiredQuantity: 10,
        tier: achievementTiers.SILVER,
    },
    {
        title: 'Isso foi super efetivo',
        description: '25º elogio enviado, seus elogios são super efetivos',
        key: achievementKeys.SEND_ACKNOWLEDGEMENT,
        requiredQuantity: 25,
        tier: achievementTiers.GOLD,
    },
    {
        title: 'Praise the sun!',
        description: '50º elogio enviado, vamos apenas venerar o sol',
        key: achievementKeys.SEND_ACKNOWLEDGEMENT,
        requiredQuantity: 50,
        tier: achievementTiers.DIAMOND,
    },
]
