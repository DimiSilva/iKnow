const { achievementKeys, achievementTiers } = require('iknow-common/enums')

module.exports = [
    {
        title: 'Com grandes poderes...',
        description: '1º elogio recebido, não deixe subir pra cabeça',
        key: achievementKeys.RECEIVED_ACKNOWLEDGEMENT,
        requiredQuantity: 1,
        tier: achievementTiers.WOOD,
    },
    {
        title: 'A vida é uma caixa de chocolates',
        description: '5º elogio recebido, e parece que você é um dos bons',
        key: achievementKeys.RECEIVED_ACKNOWLEDGEMENT,
        requiredQuantity: 5,
        tier: achievementTiers.BRONZE,
    },
    {
        title: 'No final nossas escolhas nos fazem',
        description: '10º elogio recebido, parece que você tem feito boas escolhas',
        key: achievementKeys.RECEIVED_ACKNOWLEDGEMENT,
        requiredQuantity: 10,
        tier: achievementTiers.SILVER,
    },
    {
        title: 'Boas ações',
        description: '25º elogio recebido, boas ações são o que transforma uma criança em homem',
        key: achievementKeys.RECEIVED_ACKNOWLEDGEMENT,
        requiredQuantity: 25,
        tier: achievementTiers.GOLD,
    },
    {
        title: 'Digno',
        description: '50º elogio recebido, acho que você já pode tentar levantar o martelo do Thor',
        key: achievementKeys.RECEIVED_ACKNOWLEDGEMENT,
        requiredQuantity: 50,
        tier: achievementTiers.DIAMOND,
    },
]
