/**
 * @param {object} params
 */

const constructQueryString = (params) => Object.entries(params)
    .reduce(
        (qs, [key, value], index) => `${qs}${index === 0 ? '?' : '&'}${key}=${value}`,
        '',
    )
module.exports = constructQueryString
