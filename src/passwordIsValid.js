const isUpperCase = /^(?=.*[A-Z])/;
const isLowerCase = /^(?=.*[a-z])/;
const hasDigit = /^(?=.*[0-9])/;
const hasChar = /^(?=.*[!@#$%^&*~])/;
const isValid = new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/);

let passwordIsValid =  (password) => { 

    if(password == "") throw new Error("Your function is passed with parameters,yet empty");

    if(password.length < 8) throw new Error("Please make sure your password has a minimum of 8 characters");

    if(password.match(isLowerCase) == null) throw new Error("Your password should have at least one lowercase letter");

    if(password.match(isUpperCase) == null) throw new Error("password should have at least one uppercase letter");

    if(password.match(hasDigit) == null) throw new Error("Your password should at least have one digit");

    if(password.match(hasChar) == null) throw new Error("Your password should have at least one special character");

    return password;
}

 
let passwordIsOk = (password) => {
    if(password.match(isValid)){
        
        return true;
    }
    else
    {
        return false;
    }
}
 module.exports = {passwordIsValid,passwordIsOk}; 
 console.log(passwordIsOk("P@$$w0rD"));
 console.log(passwordIsValid("P@$$w0rD"));
 