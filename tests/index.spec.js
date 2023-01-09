const package = require("__PACKAGE_NAME__")

describe("Testing the working of the package", () => {
	beforeAll(() => {
		// setup you package needs here/copy and create backups
	})
	afterAll(() => {
		// revert all the changes made
	})
	it("should work with these inputs", () => {
		expect(true).toBeTruthy()
	})
	it("should fail with these inputs", () => {
		expect(false).toBeFalsy()
	})
})
