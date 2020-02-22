const http = require('http');
const url = require('url');
function onRequest(request,response,router,handlers) {
    return function (){
        console.log('request received');
        const queryurl = url.parse(request.url);
        const headers = request.headers;
        // let postData = '';
        // console.log(`request receiverd for ${queryurl.pathname}`);

        // request.addListener('data',(postDataChunk) => {
        //     if(queryurl.pathname === '/upload') {
        //         console.log('upload image');
        //         console.log(postDataChunk.toString());
        //     }else {
        //         postData += postDataChunk;
        //         console.log(`request post data received ${postData}`);
        //     }
        // })

        // request.addListener('end',() => {
            // console.log('request received end');
            router.route(handlers,response,queryurl,headers,request);
        // })
    }();
}
function start(router,handlers) {
    console.log('start Server');
    http.createServer((request,response) => onRequest(request,response,router,handlers))
        .listen(9999);
}
module.exports = {
    startServer: start
}
