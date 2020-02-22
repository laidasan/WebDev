const server = require('./server');
const router = require('./router');
const requestHandlers = require('./requestHandlers');

const handlers = {
    '/start' : requestHandlers.start,
    '/findFile' : requestHandlers.findFile,
    '/userData' : requestHandlers.userData,
    '/upload' : requestHandlers.upload,
    '/show' : requestHandlers.show,
    '/cookieTest' : requestHandlers.cookieTest
}
server.startServer(router,handlers);
