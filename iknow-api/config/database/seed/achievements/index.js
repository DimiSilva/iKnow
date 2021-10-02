const { Achievement } = require('iknow-backend-common/models')
const achievementsList = require('./achievements-list')

const seedAchievemenets = async () => {
    const achievementsCount = await Achievement.count()
    if (achievementsCount > 0) return
    await Achievement.create(achievementsList)
}

module.exports = seedAchievemenets
