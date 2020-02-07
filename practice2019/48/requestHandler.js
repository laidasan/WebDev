let fs = require('fs');

//handler
function start(response) {
    console.log('Request handler "start" was called');
    let content = fs.readFileSync('./index.html').toString();
    // setTimeout(() => {
        console.log(content);
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(content);
        response.end();
    // }, 3000);

}
function upload(response) {
    console.log('Request handler "upload" was called');
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write('upload files');
    response.end();
}

function script(response,filename) {
    console.log('Request handler "script" was called');
    findFileResponse(response,filename);
}
function html(response,filename) {
    console.log('Request handler "html" was called');
    console.log('route handler html',filename);
    findFileResponse(response,filename);
}
function img(response,filename) {
    findFileResponse(response,filename);
}
function index(response,filename) {
    filename.push('html');
    findFileResponse(response,filename);
}


//find file and response
function findFileResponse(response,filename) {
    filename = filename.join('.');
    console.log('findFileResponse',filename);
    fs.readFile(`./${filename}`,function(err,content) {
        if(!err) {
            response.writeHead(200);
            response.write(content);
            response.end();
        }else {
            response.writeHead(404);
            response.write('404 Not Found');
            response.end();
        }
    })
}
module.exports = {
    start : start,
    upload : upload,
    script : script,
    html : html,
    index : index,
    img : img
}

