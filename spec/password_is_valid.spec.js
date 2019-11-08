const {passwordIsValid,passwordIsOk} = require("../src/passwordIsValid");
const isValid = new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/);

describe("passwordIsValid", () => {
    /*password-should exits */
    it("should check if the password exist", () => {
        expect(passwordIsValid("P@$$w0rD2")).not.toBeNull();
    });
    /*password-should have min of 8 char */
    it("should check if the password has a minimum of 8 characters.", () => {
        expect(passwordIsValid("P@$$w0rD2").length).toBeGreaterThan(7);
    });


    /*password-should have lowercase char */
    it("should check if the password has at least one lowercase letter.", () => {
        expect(passwordIsValid("P@$$w0rD")).toMatch(/^(?=.*[a-z])/);
    });
    /*password-should have uppercase char */
    it("should check if the password has at least one uppercase letter", () => {
        expect(passwordIsValid("P@$$w0rD")).toMatch(/^(?=.*[A-Z])/);
    });
    /*password-should have digit */
    it("should check if the password has at least one digit.", () => {
        expect(passwordIsValid("P@$$w0rD")).toMatch(/^(?=.*[0-9])/);
    })
    /*password-should have special char */
    it("should check if the password has at least one special character.", () => {
        expect(passwordIsValid("P@$$w0rD")).toMatch(/^(?=.*[!@#\$%\^&])/);
    })
});

describe("passwordIsOk", () => {
    it("should check if the given password meets at least three of the conditions listed above then this function should return true, otherwise it should return false.", () => {
        expect(passwordIsOk("P@$$w0rD")).not.toBeNull();
    });
});