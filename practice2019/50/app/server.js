const http = require('http');

function onRequest(req,res,router,handlers) {
    return function () {
        console.log('onRequest,request received');
        router.route(req,res,handlers);
    }();
}
function start(router,handlers) {
    http.createServer((req,res) => {onRequest(req,res,router,handlers)}).listen(9999);
    console.log('start server');
}

module.exports = {
    serverstart : start
}
