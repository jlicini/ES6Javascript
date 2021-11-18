function getMessage() {
    const year = new Date().getFullYear();
    return `The year is ${year}` //string interpolation
    // return `The year is ${new Date().getFullYear()}`
}

console.log(getMessage())

console.log("--")

const device_id = 4;
const guid = 20;
const username = 'hello';

data = `{devide_id: ${device_id}, guid: ${guid}, username: ${username}}`

console.log(data)

console.log("--")

function doubleMessage(number) {
    return `Your number doubled is ${2 * number}`;
}

function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}