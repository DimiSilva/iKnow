const removeMaskOfNumbers = (numbersWithMask: string) => {
    if (!numbersWithMask) return ''

    return numbersWithMask.match(/\d+/g) ? (numbersWithMask.match(/\d+/g) || []).join('') : ''
}

export default removeMaskOfNumbers
