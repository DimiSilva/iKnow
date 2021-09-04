class InvalidOperation extends Error {
    constructor(message) {
        super(message)
        this.name = 'InvalidOperation'
        this.status = 400
    }
}

module.exports = InvalidOperation
