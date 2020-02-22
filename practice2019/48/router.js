function route(handle,pathname,response,postData,search,query,headers) {
    console.log("About to route a request for " + pathname);
    let filename = pathname.split('.');
    switch (filename[filename.length - 1]) {
        case '/start' :
            pathname = '/start'
            break;
        case '/upload' :
            pathname = '/upload';
            break;
        case '/lotto' :
            pathname = '/lotto';
            break;
        case '/getlotto' :
            pathname = '/getlotto';
            break;
        default :
            pathname = '/findFileResponse';
            break;
    }
    if(typeof handle[pathname] === 'function') {
        handle[pathname](response,filename,postData,search,query,headers);
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