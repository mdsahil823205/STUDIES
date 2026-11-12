// custom error handling with try cath
class AgeError extends Error {
    constructor(message) {
        super(message);
        this.name = AgeError;
    }
}
function CheckAge(age) {
    if (age < 18) {
        throw new AgeError("age must be 18 or above");
    }
    return "allowed"
}
try {
    CheckAge(16)
} catch (error) {
    console.log(error.name)
    console.log(error.message)
}
