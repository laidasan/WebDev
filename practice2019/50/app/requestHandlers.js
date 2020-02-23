const querystring = require('querystring');
const fs = require('fs');
const mime = require('mime');
function start(req,res,urlparse) {
    console.log('routehandlers start was called');
    let query = urlparse.query ? querystring.parse(urlparse.query) : null;
    if(query) {
        res.writeHead(200,{'Content-type' : 'application/json'});
        res.write(JSON.stringify(Array.of(query)));
        res.end();
    }else {
        res.writeHead(200,{'Content-type' : 'text/plain'});
        res.write('start router');
        res.end();
    }
}

function cookie(req,res,urlparse) {
    console.log('cookie was called');
    res.writeHead(200,{
        'Content-type' : 'text/palin',
        'Set-Cookie' : [
            'cookie = cookie ; httpOnly = true'
        ]
    });
    res.write('cooie');
    res.end();
}

function filesRead(req,res,urlparse) {
    console.log('routehandlers filesRead was called');
    let pathname = urlparse.pathname;
    let search = urlparse.search ? urlparse.search : '';
    if(pathname.endsWith('/')) {
        pathname += 'index.html';
    }
    fs.stat(`.${pathname}`,(err,stats) => {
        if(!err && stats.isDirectory()) {
            res.writeHead(302,{'Location' : `${pathname}/${search}`});
            res.end();
            return;
        }
        if(!err && stats.isFile()) {
            fs.readFile(`.${pathname}`,(err,content) => {
                if(!err && pathname.includes('style.css')) {
                    res.writeHead('200',{'Content-type' : 'text/css'});
                    res.write(content);
                    res.end();
                }else if(!err) {
                    res.writeHead('200',{'Content-type' : mime.getType(content)});
                    res.write(content);
                    res.end();
                }
            })
        }else {
            fs.readFile('./page/notfound.html',(err,content) => {
                if(!err) {
                    res.writeHead(404,{'Content-type' : mime.getType(content)});
                    res.write(content);
                    res.end();
                }else {
                    res.writeHead(404,{'Content-type' : 'text/plain'});
                    res.write('404 Not Found');
                    res.end();
                }
            })
        }
    })
}

module.exports = {
    start : start,
    filesRead : filesRead,
    cookie : cookie
}