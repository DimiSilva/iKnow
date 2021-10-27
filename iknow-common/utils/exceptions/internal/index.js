class Internal extends Error {
    constructor(message) {
        super(message)
        this.name = 'Internal'
        this.status = 500
    }
}

module.exports = Internal
