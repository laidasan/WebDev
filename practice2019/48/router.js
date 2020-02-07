function route(handle,pathname,response) {
    console.log("About to route a request for " + pathname);
    let filename = pathname.split('.');
    switch (filename[filename.length - 1]) {
        case 'js' :
            pathname = '/script';
            break;
        case 'html' :
            pathname = '/html';
            break;
        case 'jpg' :
        case 'png' :
            pathname = '/img';
            break;
        default :
            pathname = pathname;
            break;
    }
    if(typeof handle[pathname] === 'function') {
        handle[pathname](response,filename);
    }else {
        console.log("no request handler found for " + pathname);
        response.writeHead(404, { "Content-Type": "text/plain" });  // (status code,httpHeader(JSON))
        response.write("404 not found");
        response.end();
    }

}

module.exports = {
    route : route,
}