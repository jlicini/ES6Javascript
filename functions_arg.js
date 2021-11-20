//if the user did not pass in a method argument here, it will automatically reassign method GET
function makeAjaxRequest(url, method = 'GET'){
    return method
    //logic to make request

}

makeAjaxRequest('google.com') //reassign GET (here we pass undefined)
makeAjaxRequest('google.com', null) //stay null
makeAjaxRequest('google.com', 'GET')

console.log("---")

function User(id) {
    this.id = id;
}

function generateId() {
    return Math.random() * 99999;
}

function createAdminUser(user = User(generateId())) {
    user.admin = true;
    return user;
}

const user = new User(generateId());
(createAdminUser(user));

console.log("--")

function sum(a = 0, b = 0) {
    return a + b;
}

function addOffset(style = {}) {
    style.offset = '10px';
    return style;
}