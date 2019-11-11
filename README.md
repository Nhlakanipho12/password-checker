# password-checker 

Implement the following function by following a TDD methodology:

// Javascript:
passwordIsValid(password)
# Python:
password_is_valid(password)
password_is_valid will check if the password meets a few different conditions. If one of the below conditions is not met then the relevant error/exception should be thrown/raised. Your error/exception message should match one of the following conditions exactly (word-for-word).

password should exist
password should be longer than than 8 characters
password should have at least one lowercase letter
password should have at least one uppercase letter
password should at least have one digit
password should have at least one special character
In the case of (6) above, a special character is a character that is on the keyboard but is not a number or letter. Eg { % & * " ' etc

Next, implement a function called password is ok:

Javascript:
passwordIsOk(password)
Python:
password_is_ok(password)
If the given password meets at least three of the conditions listed above then this function should return true, otherwise it should return false.

Add a feature: the password is never OK if conditions 1 and 2 are not met.
