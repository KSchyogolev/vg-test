const path = require('path')
const tsConfig = require('./tsconfig.json')

const removeAsterisk = (str) => str.replace('/*', '')

const aliases = Object.entries(tsConfig.compilerOptions.paths).reduce(
    (acc, [key, value]) => {
        const aliasKey = removeAsterisk(key)
        const aliasPath = removeAsterisk(value[0])
        acc[aliasKey] = path.resolve(__dirname, aliasPath)
        return acc
    },
    {}
)

module.exports = aliases
