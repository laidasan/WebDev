const url = require('url');
function route(req,res,handlers) {
    const urlparse = url.parse(req.url);
    let pathname = urlparse.pathname;
    console.log('About to route a request for' + pathname);
    
    switch (pathname) {
        case '/start':
            pathname = pathname;
            break;
        case '/login':
            pathname = pathname;
            break;
        case '/getUser':
            pathname = pathname;
            break;
        case '/cookie' :
            pathname = pathname;
            break;
        case '/loginCheck' :
            pathname = pathname;
            break;
        default:
            pathname = '/filesRead';
            break;
    }

    if(typeof handlers[pathname] === 'function') {
        handlers[pathname](req,res,urlparse);
    }else {
        res.writeHead(404,{'Content-type' : 'text/plain'});
        res.write(`not route for ${pathname},sorry`);
        res.end();
    }
}

module.exports = {
    route : route
}