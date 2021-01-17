module.exports = (req, res, next) => {
    console.log(req.query)
    const commonExp = /^\/(\w+)[\/]?([\d]+)?[\/]?$/
    const found = req.path.match(commonExp)
    if (found !== null) {
        let route = found[1];
        const authRoutes = require('../db/_access.json');
        const routeItem = authRoutes.find(item => item.action === route);
        if (routeItem) {
            let token = req.query.token;
            if (!token) {
                return res.status(401).jsonp({
                    error: 'Unauthorized'
                });
            }
            // find token
            const tokens = require('../db/authtoken.json');
            let userToken = tokens.signin.find(item => item.token == token);
            if (!userToken) {
                return res.status(401).jsonp({
                    error: 'Authentication failed'
                });
            }
            // authentication failed ok check authorize
            const roles = require('./../db/roles.json')
            const userRoles = roles.roles.find(item => item.user_id === userToken.user_id);
            if (!routeItem.roles.includes(userRoles.currentRole)) {
                return res.status(403).jsonp({
                    error: 'Forbidden'
                });
            }
        }
    }
    next()
}