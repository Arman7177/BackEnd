const ROLES = ['student','admin']

class User {
    constructor(username,email,password,role) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = role;
    }
}
function validateUser(User) {
    if (!User.username || !User.email || !User.password || !User.role) {
        return false;
    }
    if (!ROLES.includes(User.role)) {
        return false;
    }
    return true;
}

module.exports = { User, validateUser, ROLES };
