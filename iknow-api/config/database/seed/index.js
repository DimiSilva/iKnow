const achievementsSeed = require('./achievements')
const acknowledgementsSeed = require('./acknowledgements')

const seed = async () => {
    await achievementsSeed()
    await acknowledgementsSeed()
}

module.exports = seed
