const { acknowledgementTypes } = require('iknow-common/enums')

module.exports = [
    {
        title: 'Eficiente',
        type: acknowledgementTypes.EFFICIENT,
        description: 'Reconhecimento dado para aqueles que resolvem problemas de forma eficiente',
    },
    {
        title: 'Sábio',
        type: acknowledgementTypes.WISE,
        description: 'Reconhecimento dado para aqueles que detêm grande conhecimento',

    },
    {
        title: 'Bom Mestre',
        type: acknowledgementTypes.GOOD_MASTER,
        description: 'Reconhecimento dado para aqueles que sabem ensinar muito bem',
    },
    {
        title: 'Solidário',
        type: acknowledgementTypes.SUPPORTIVE,
        description: 'Reconhecimento dado para aqueles com grande empatia',
    },
    {
        title: 'Paciente',
        type: acknowledgementTypes.PATIENT,
        description: 'Reconhecimento dado para aqueles que tem a capacidade de sempre manter a paciência',
    },
    {
        title: 'Carismático',
        type: acknowledgementTypes.CHARISMATIC,
        description: 'Reconhecimento dado para aqueles que são muito legais',
    },
]
