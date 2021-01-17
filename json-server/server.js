const jsonServer = require('json-server');
const merger = require('./mergejson');
// const SingUp = require('./functions/signup');
const jsonData = merger('db', [
    'db',
    'users',
    'authtoken'
])
const server = jsonServer.create()
const router = jsonServer.router(jsonData)
// custom middlewares
const auth = require('./middlewares/auth')
const gettoken = require('./middlewares/gettoken')

jsonServer.bodyParser.push(auth)
jsonServer.bodyParser.push(gettoken)

const middlewares = jsonServer.defaults({ noCors: false})

server.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', req.header('origin'));
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
    next();
});

server.use(jsonServer.bodyParser)

server.use(middlewares)
server.use(router)
server.listen(3004, () => {
    console.log('JSON Server is running')
})
