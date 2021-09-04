class Internal extends Error {
    constructor(message) {
        super(message)
        this.name = 'Internal'
    }
}

module.exports = Internal
