const path = require("path");

// jest.config.js
module.exports = {
	coverageDirectory: path.resolve(__dirname, "../../coverage"),
	rootDir: path.resolve(__dirname, "../../sources"),
	testEnvironment: "jest-environment-jsdom-thirteen",
	testPathIgnorePatterns: [
		"/node_modules/",
		"/fixtures/",
		"/__tests__/helpers/",
		"__mocks__",
	],
	testURL: "http://localhost",
};