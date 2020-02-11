let fs = require('fs');
let mime = require('mime');
let querystring = require('querystring');
let formidable = require('formidable');
console.log(formidable);
//handler
function start(response) {
    console.log('Request handler "start" was called');
    // let content = fs.readFileSync('./index.html').toString();
    // setTimeout(() => {
        // console.log(content);
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(`<h1>Submit</h1>`);
        response.end();
    // }, 3000);

}
function upload(response,filename,postData) {
    console.log('Request handler "upload" was called');
    console.log(postData);
    console.log(querystring.parse(postData).text);
    response.writeHead(200, { "Content-Type": "text/plain"});
    response.write(`you sent ${querystring.parse(postData).text}`);
    response.end();
}

// function script(response,filename) {
//     console.log('Request handler "script" was called');
//     findFileResponse(response,filename);
// }
// function html(response,filename) {
//     console.log('Request handler "html" was called');
//     findFileResponse(response,filename);
// }
// function img(response,filename) {
//     findFileResponse(response,filename);
// }
// function style(response,filename) {
//     findFileResponse(response,filename);
// }
// // function index(response,filename) {
// //     filename.push('html');
// //     findFileResponse(response,filename);
// // }


//find file and response
function findFileResponse(response,filename,postData,search) {
    filename = filename.join('.');
    let relativePathname = decodeURIComponent(filename);
    console.log(relativePathname);
    console.log('findFileResponse',filename);
    if(filename.endsWith('/')){
        filename += 'index.html';
    } 
    fs.stat(`.${relativePathname}`,(err,stats) => {
        if(!err && stats.isDirectory()) {
            response.writeHead(302,{'Location' : filename + '/' + search});
            response.end();
            return;
        }
    })
    // else {
    //     if(!filename.includes('.')) {
    //         response.writeHead(301,{'Location' : filename + '/' + search});
    //         response.end();
    //         return;
    //     }
    // }
    // if(filename === '/index'){filename = '/index.html'}

    fs.stat(`.${relativePathname}`,(err,stats) => {
        if(!err && stats.isFile()) {
            fs.readFile(`.${relativePathname}`,function(err,content) {
                if(!err) {
                    response.writeHead(200,{'Content-Type' : mime.getType(filename)});
                    response.write(content);
                    response.end();
                }else {
                    response.writeHead(404);
                    response.write('404 Not Found');
                    response.end();
                }
            })
        } else {
            response.writeHead(404);
            response.write('404 Not Found');
            response.end();
        }
        // else if(!err && stats.isDirectory()) {
        //     fs.readFile(`.${filename}/index.html`,function(err,content) {
        //         if(!err) {
        //             response.writeHead(200,mime.getType(filename));
        //             response.write(content);
        //             response.end();
        //         }else {
        //             response.writeHead(404);
        //             response.write('404 Not Found');
        //             response.end();
        //         }
        //     })}
    })
    
}
module.exports = {
    start : start,
    upload : upload,
    findFileResponse : findFileResponse,
}

