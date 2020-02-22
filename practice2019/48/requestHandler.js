let fs = require('fs');
let mime = require('mime');
let querystring = require('querystring');
let formidable = require('formidable');
let crypto = require('crypto');
const MongoClient = require('mongodb').MongoClient;
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
function upload(response,filename,postData,search,query) {
    console.log('Request handler "upload" was called');
    // console.log(postData);
    // console.log(querystring.parse(postData).text);
    console.log(query);
    let args = querystring.parse(query);
    console.log('arg',args);
    let data = decodeURIComponent(querystring.parse(postData).text);
    // response.writeHead(200, { "Content-Type": "text/plain"});
    response.writeHead(200, { "Content-Type": "application/json"});
    response.write(JSON.stringify(args));
    // response.write(`you sent ${decodeURIComponent(data)}`);
    response.end();
}

function lotto(response,filename,postData,search,query,headers) {
    console.log('Request handler "lotto" was called');
    // console.log('postData',postData);
    let data;
    const type = headers['content-type'];
    
    if(type === 'application/json') {
        console.log('request type is json');
        const userData = JSON.parse(postData);
        MongoClient.connect('mongodb://127.0.0.1',function(err,client) {
        if(!err) {
            console.log('連線成功');
            const dbo = client.db('lottoData');
            dbo.collection('userList').insertOne({name:userData.name,tel:userData.tel},function(err,result) {
                if(!err) {
                    console.log('資料寫入成功');
                    client.close();
                } else {
                    console.log('資料寫入失敗');
                    client.close();
                }
            })
        }else {
            console.log('連線失敗');
        }
    })
        response.writeHead(200,{'Content-type': 'application/json'});
        response.write(postData);
        response.end();
    }else {
        console.log("request content type isn't json");
        if(query) {
            data = querystring.parse(query);
            console.log('query data',data);
        } else {
            data = querystring.parse(postData);
            console.log('postData',data);
        }
        response.writeHead(200,{'Content-Type': 'application/json'});
        response.write(JSON.stringify(data));
        response.end();
    }
    
}

function getLottoUsers(response) {
    MongoClient.connect('mongodb://127.0.0.1',function(err,client) {
        if(!err) {
            console.log('連線成功');
            const dbo = client.db('lottoData');
            dbo.collection('userList').find().toArray(function(err,data) {
                response.writeHead(200,{'Content-type': 'application/json'});
                response.write(JSON.stringify(data));
                response.end();
                client.close();
            });
        } else {
            console.log('連線失敗');
        }
    })
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
function findFileResponse(response,filename,postData,search,query,headers) {
    filename = filename.join('.');
    let relativePathname = decodeURIComponent(filename);
    // let relativePathname = filename;
    console.log(relativePathname);
    console.log('findFileResponse',filename);
    if(filename.endsWith('/')){
        filename += 'index.html';
        relativePathname = filename;
    } 
    fs.stat(`.${relativePathname}`,(err,stats) => {
        if(!err && stats.isDirectory()) {
            response.writeHead(301,{'Location' : filename + '/' + search});
            response.end();
            return;
        }
    })

    fs.stat(`.${relativePathname}`,(err,stats) => {
        if(!err && stats.isFile()) {
            fs.readFile(`.${relativePathname}`,function(err,content) {
                if(!err) {
                    // let hash = crypto.createHash('sha1').update(content).digest('base64');
                    // if(headers['if-none-match'] == hash) {
                    //     response.writeHead(304);
                    //     response.end();
                    //     return;
                    // }
                    response.writeHead(200,{
                        'Content-Type' : mime.getType(filename),
                        // 'Etag' : hash
                    });
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
    lotto: lotto,
    getLottoUsers: getLottoUsers,
    findFileResponse : findFileResponse
}

