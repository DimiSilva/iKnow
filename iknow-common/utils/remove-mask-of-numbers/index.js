const removeMaskOfNumbers = (numbersWithMask) => {
    if (!numbersWithMask) return ''

    return numbersWithMask.match(/\d+/g) ? (numbersWithMask.match(/\d+/g) || []).join('') : ''
}

module.exports = removeMaskOfNumbers
