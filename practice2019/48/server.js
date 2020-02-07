let http = require('http');
let url = require('url')
let server = null;
function createOnRequest(router, handle) {
    return function (request, response) {
        console.log('resquest received');
        // console.log('request url',request.url);                //  /...path
        // console.log('use url module',url.parse(request.url));  //object
        let pathname = url.parse(request.url).pathname;
        console.log('Request for ' + pathname + ' reveived');
        let content = router.route(handle, pathname,response);

    }
}

function start(router,handle) {
    const onRequest = createOnRequest(router, handle);
    server = http.createServer(onRequest).listen(8888);
    console.log('server started')
}


// export module
module.exports = {
    startServer: start
}