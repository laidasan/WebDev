const querystring = require('querystring');
const fs = require('fs');
const mime = require('mime');
const MongoClient = require('mongodb').MongoClient;
const formidable = require('formidable');
function start(response, queryurl, headers, request) {
    console.log('request handler "start" was called.');
    let postData = '';
    request.addListener('data', function (postDataChunk) {
        postData += postDataChunk;
        console.log('request data listener');
        console.log(`request data received ${postDataChunk}`);
    })
    request.addListener('end', function () {
        console.log('request end listener');
        if (headers['content-type'] === 'application/json') {
            console.log('json');
            response.writeHead(200, { 'Content-type': 'application/json' });
            response.write(postData);
            // response.write('postData');
            response.end();
        } else {
            console.log('not json');
            let data = querystring.parse(queryurl.query);
            // console.log(Array.of(data));
            let dataJSON = (JSON.stringify(Array.of(data)));
            let reqCookie = null;

            //處理cookie,除空白並加上'&'，讓querystirng去解析
            if(request.headers.cookie) {
                // let reqCookieStr = request.headers.cookie.split(';').join('&');
                while (request.headers.cookie.indexOf(' ') >= 0) {
                    request.headers.cookie = request.headers.cookie.replace(' ', '');
                }
                // reqCookie = querystring.parse(reqCookieStr);

                reqCookie = querystring.parse(request.headers.cookie,';');
                console.log('parse request cookie');
                console.log(reqCookie);
            }else {
                console.log('no cookie recived ');
                console.log(reqCookie);
            }
            let name = reqCookie ? reqCookie.name : '';
            let isVisit = reqCookie ? reqCookie.isVisit : 0;
            //從client傳過來的cookie如果有name，就將cookie內容轉成JSON格式字串，傳回去
            //沒有的話就回傳新的Cookie回去
            console.log(name);
            if (name && isVisit) {
                console.log('have name');
                response.writeHead(200, { 'Content-type': 'application/json' });
                response.write(JSON.stringify(Array.of(reqCookie)));
                // response.write(name);
                response.end();
            } else {
                console.log('does not have name');
                response.writeHead(404, {
                    'Content-type': 'application/json',
                    'Set-Cookie': [
                        'name = Yuri; httpOnly = true',
                        'age = 30; httpOnly = ture',
                        'path = /start; httpOnly = true; path = /start',
                        // 'isVisit = 1; httpOnly = true; max-age = 10'
                        `isVisit = 1; httpOnly = true; expires = ${new Date(Date.now() + 1000 * 30).toUTCString()}`
                    ]
                });
                // response.write(dataJSON);
                response.write('404');
                response.end();
            }
        }
    })
}

function cookieTest(response,queryurl,headers,request) {
    let cookie = null;
    if(request.headers.cookie) {
        while(request.headers.cookie.indexOf(' ') >= 0) {
            request.headers.cookie = request.headers.cookie.replace(' ','');
        }
        cookie = querystring.parse(request.headers.cookie,';')
    }
    if(!cookie) {
        response.writeHead(404,{'Content-type' : 'text/plain'});
        response.write("We can't find cookie");
        response.end();
    }else {
        response.writeHead(200,{'Content-type' : 'application/json'});
        response.write(JSON.stringify(Array.of(cookie)));
        response.end();
    }
}

function userData(response, queryurl) {
    MongoClient.connect('mongodb://127.0.0.1', (err, client) => {
        if (!err) {
            console.log('database connect success');
            const dbo = client.db('user');
            dbo.collection('userData').insertOne({ nmae: 'joe', age: 30 }, function (err, result) {
                if (!err) {
                    console.log('insert data sucess');
                } else {
                    console.log('insert data fail');
                }
            })
            response.writeHead(200);
            response.write('success');
            response.end();
            client.close();
        } else {
            console.log('database connect fail');
            response.writeHead(404);
            response.end();
        }
    })
}


function upload(response, queryurl, headers, request) {
    console.log('request handlers "upload" was called');
    console.log(request.headers.cookie);
    let form = new formidable.IncomingForm();
    form.parse(request, function (err, fields, files) {
        // console.log(err);
        // response.writeHead(200,{'Content-type' : 'application/json'});
        // response.write(JSON.stringify([{name:'joe'}]));
        // response.end();
        // return;
        if (!err) {
            console.log('parse down');
            // console.log(fields);
            console.log(files.upload.path);
            fs.renameSync(files.upload.path, './tmp/test.png');
            response.writeHead(200, { 'Content-type': 'text/html' });
            response.write('<img src="/show">');
            response.end();
        } else {
            console.log('upload fail');
            response.writeHead(404);
            response.write('upload fail');
            response.end();
        }
    })
}
function show(response, queryurl) {
    console.log('request handler "show" was called');
    fs.readFile('./tmp/test.png', 'binary', (err, img) => {
        if (!err) {
            response.writeHead(200, { 'Content-type': mime.getType(img) });
            response.write(img, 'binary');
            response.end();
        } else {
            response(404);
            response.write('404 Not Found');
            response.end();
        }
    })
}
function findFile(response, queryurl) {
    console.log('request handler "findFile" was called');
    let pathname = queryurl.pathname;
    console.log('handler' + pathname);
    let search = queryurl.search || '';
    if (pathname.endsWith('/')) {
        console.log('add index.html');
        pathname += 'index.html';
    }
    fs.stat(`.${pathname}`, (err, stats) => {
        if (!err && stats.isDirectory()) {
            console.log('change url');
            response.writeHead(302, { 'Location': pathname + '/' + search });
            response.end();
            return;
        }
        if (!err && stats.isFile()) {
            fs.readFile(`.${pathname}`, function (err, content) {
                if (!err && !pathname.includes('css')) {
                    response.writeHead(200, { 'Content-type': mime.getType(content) })
                    response.write(content);
                    response.end();
                } else if (!err) {
                    response.writeHead(200, { 'Content-type': 'text/css' })
                    response.write(content);
                    response.end();
                }
            })
        } else {
            console.log("can't find file");
            response.writeHead(404);
            response.write('404 Not Found');
            response.end();
        }
    })
}

module.exports = {
    start: start,
    findFile: findFile,
    userData: userData,
    upload: upload,
    show: show,
    cookieTest : cookieTest
}