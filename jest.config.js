module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    collectCoverage: true,
    coverageReporters: ["lcov"],
    testMatch: ["<rootDir>/__tests__/**/*.(test|spec).(ts|tsx)"],
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    setupFiles: ['<rootDir>/src/jestEnzymeAdapter.ts'],
    moduleNameMapper: {
        "\\.(css|less|scss|sass)$": "<rootDir>/__tests__/cssMock.js"
    },
};