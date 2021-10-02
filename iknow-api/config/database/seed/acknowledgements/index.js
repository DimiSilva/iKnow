const { Acknowledgement } = require('../../../../models')
const acknowledgementsList = require('./acknowledgements-list')

const seedAchievements = async () => {
    const acknowledgementsCount = await Acknowledgement.count()
    if (acknowledgementsCount > 0) return
    await Acknowledgement.create(acknowledgementsList)
}

module.exports = seedAchievements
