// Deprecated use zazu.json instead
module.exports = {
  name: 'System',
  version: '0.0.1',
  author: 'blainesch',
  description: 'System tasks for zazu.',
  homepage: 'https://github.com/tinytacoteam/zazu-system',
  git: 'git@github.com:tinytacoteam/zazu-system.git',
  blocks: {
    input: [
      {
        id: 'input',
        type: 'RootScript',
        script: 'input.js',
        connections: ['process'],
      },
    ],
    output: [
      {
        id: 'process',
        type: 'UserScript',
        script: 'process.js',
      }
    ],
  },
}
