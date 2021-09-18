const { Acknowledgment } = require('../../../../models')
const acknowledgmentsList = require('./acknowledgments-list')

const seedAchievemenets = async () => {
    const acknowledgmentsCount = await Acknowledgment.count()
    if (acknowledgmentsCount > 0) return
    await Acknowledgment.create(acknowledgmentsList)
}

module.exports = seedAchievemenets
