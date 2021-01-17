const Password = require("node-php-password");

module.exports = (req, res, next) => {
    const found = req.path.match(/^\/(signin)/)
    if (found !== null) {
        const query = req.query;
        const users = require('./../db/users.json');
        const tokens = require('./../db/authtoken.json')
        const user = users.users.find(item => item.email === query.email);
        if (user && Password.verify(query.password, user.password_hash)) {
            let token = tokens.signin.find(item => item.user_id === user.id);
            if (token) {
                return res.jsonp(token.token);
            }
        }
        return res.status(401).jsonp({
            error: 'Unauthorized'
        });
    }
    next()
}