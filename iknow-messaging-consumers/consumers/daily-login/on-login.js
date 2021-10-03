const iknowCommon = require('iknow-common')
const { User } = require('../../models')
const utils = require('../../utils')

/**
 * @param {{ userId: string }} message
 */

module.exports = async ({ userId }) => {
    const user = await User.findById(userId)
    const lastLoginDate = user.achievementsControl.lastLoginDate ? new Date(user.achievementsControl.lastLoginDate) : undefined
    const lastLoginDateMoreOneDay = lastLoginDate ? new Date(lastLoginDate.setDate(lastLoginDate.getDate() + 1)) : undefined

    if (!user || (!!lastLoginDateMoreOneDay && lastLoginDateMoreOneDay > new Date())) return

    user.achievementsControl.lastLoginDate = new Date()

    await utils.achievementsController(user, iknowCommon.enums.achievementKeys.LOGIN, 'login')
}
