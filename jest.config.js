module.exports = {
    modulePaths: ['src'],
    moduleFileExtensions: ['js', 'jsx'],
    moduleDirectories: ['node_modules'],
  
    moduleNameMapper: {
      '^@constant(.*)$': '<rootDir>/src/constant$1',
      '^@utils(.*)$': '<rootDir>/src/utils$1',
    },
}