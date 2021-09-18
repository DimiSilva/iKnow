const achievementsSeed = require('./achievements')
const acknowledgmentsSeed = require('./acknowledgments')

const seed = async () => {
    await achievementsSeed()
    await acknowledgmentsSeed()
}

module.exports = seed
