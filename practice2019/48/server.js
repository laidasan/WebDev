let http = require('http');
let url = require('url')
let server = null;
function createOnRequest(router, handle) {
    return function (request, response) {
        console.log('resquest received');
        let postData = '';
        // console.log('request url',request.url);                //  /...path
        // console.log('use url module',url.parse(request.url));  //object
        let pathname = url.parse(request.url).pathname;  
        let search = url.parse(request.url).search || '';
        request.setEncoding('utf8');
        console.log('Request for ' + pathname + ' reveived');
        request.addListener('data',(postDataChunk) => {
            postData += postDataChunk;
            console.log(postData);
            console.log(`Received POST data chunk ${postData}.`);
        })

        request.addListener('end',() => {
            console.log('end listener');
            router.route(handle, pathname,response,postData,search);
        })

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