const jwt = require('jsonwebtoken');

function tokenRes(userId, hash) {
    const token = jwt.sign({user: userId}, hash)
    const decoded = jwt.verify(token, hash)

    return [token, decoded]
}

const users = require('./db/users.json');
users.users.forEach(item => {
    console.log(tokenRes(item.id, item.password_hash))
})