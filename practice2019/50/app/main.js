const server = require('./server');
const router = require('./router');
const routerHandlers = require('./requestHandlers');
const loginHandlers = require('./login');
const handlers = {
    '/start' : routerHandlers.start,
    '/filesRead' : routerHandlers.filesRead,
    '/login' : loginHandlers.login,
    '/getUser' : loginHandlers.getUser,
    '/cookie' : routerHandlers.cookie,
    '/loginCheck' : loginHandlers.loginCheck
}
server.serverstart(router,handlers);