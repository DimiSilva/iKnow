const iknowCommon = require('iknow-common')
const mongoose = require('mongoose')
const { User, UserAchievement, Achievement } = require('../../models')

module.exports = async (user, achievementKey, achievementsControlKey) => {
    user.achievementsControl[achievementsControlKey] += 1

    const achievements = await Achievement.find({ key: achievementKey })
    const userAchievements = await UserAchievement.find({ achievement: { $in: achievements.map((achievement) => achievement._id.toString()) }, user: user._id })

    const session = await mongoose.connection.startSession()
    session.startTransaction()

    await user.save({ session })

    await Promise.all(achievements.map(async (achievement) => {
        if (user.achievementsControl[achievementsControlKey] >= achievement.requiredQuantity) {
            if (!userAchievements.some((userAchievement) => userAchievement.achievement.toString() === achievement._id.toString())) {
                const newUserAchievement = new UserAchievement({ user: user._id, achievement: achievement._id })
                await newUserAchievement.save({ session })
            }
        }
    }))

    await session.commitTransaction()
    session.endSession()
}
