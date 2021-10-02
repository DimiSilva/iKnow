const iknowCommon = require('iknow-common')
const { User } = require('../../models')
const utils = require('../../utils')

/**
 * @param {{ userId: string }} message
 */

module.exports = async ({ userId }) => {
    const user = await User.findById(userId)
    if (!user) return

    await utils.achievementsController(user, iknowCommon.enums.achievementKeys.MESSAGES, 'messages')
}
