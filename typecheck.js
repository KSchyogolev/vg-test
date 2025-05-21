const { execSync } = require('child_process')
const path = require('path')

try {
    console.log('Running TypeScript type check...')
    execSync('tsc --noEmit', {
        stdio: 'inherit',
        cwd: path.resolve(__dirname),
        env: {
            ...process.env,
            TS_NODE_PROJECT: path.resolve(__dirname, 'tsconfig.json'),
        },
    })
    console.log('TypeScript type check passed!')
    process.exit(0)
} catch (error) {
    console.error('TypeScript type check failed!')
    process.exit(1)
}
