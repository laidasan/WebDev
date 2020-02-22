function route(handle,response,queryurl,headers,request) {
    let pathname = queryurl.pathname;
    // let filename = '';
    // let query = queryurl.query;
    switch (pathname.split('.')[0]) {
        case '/start':
            pathname = pathname;
            break;
        case '/userData' :
            pathname = pathname;
            break;
        case '/upload' :
            pathname = pathname;
            break;
        case '/show' :
            pathname = pathname;
            break;
        case '/cookieTest' :
            pathname = pathname;
            break;
        default:
            // filename = pathname;
            pathname = '/findFile';
            break;
    }
    console.log('About to route a request for ' + pathname);
    if(typeof handle[pathname] === 'function') {
        handle[pathname](response,queryurl,headers,request);
    } else {
        console.log('no request handler for ' + pathname);
        response.writeHead(404);
        response.write('404 not found');
        response.end();
    }
}


module.exports = {
    route : route
}