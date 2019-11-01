const passwordIsValid = require("../src/passwordIsValid");

describe("passwordIsValid", () => {
    it("check if password exists", () => {
        expect(() =>passwordIsValid.verfy(null).toThrow(Error("password cannot be null")))
    });
    
});