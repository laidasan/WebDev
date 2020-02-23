const querystring = require('querystring');
const fs = require('fs');
const tools = require('./tools')
const MongoClient = require('mongodb').MongoClient;


function login(req,res,urlparse) {
    console.log('loginHandlers login was called');
    req.setEncoding('utf8');
    let postData = '';
    req.on('data',(postDataChunk) => {
        console.log(querystring.parse(postDataChunk));
        postData += postDataChunk;
    })
    req.on('end',() => {
        console.log('req data received end');
        if(postData) {
            postData = querystring.parse(postData);
            // console.log('postData',postData);
            if(postData.userID && postData.userPassword) {
                console.log('check userID and password');
                console.log(postData.userID,postData.userPassword);
                MongoClient.connect('mongodb://127.0.0.1',(err,client) => {
                    if(!err) {
                        console.log('connect mongodb sucess');
                        const db = client.db('user');
                        db.collection('userData').find({userID : postData.userID}).toArray((err,docs) => {
                            if(!err) {
                                if(docs[0] && docs[0].password === postData.userPassword) {
                                    console.log('login sucess');
                                    res.writeHead(302,{
                                        'Location' : '/loginCheck',
                                        'Set-Cookie' : [
                                            `userID = ${postData.userID} ; httpOnly = true`,
                                            'isVisit = 1 ; httpOnly = true ;'
                                        ]
                                    })
                                    res.end();
                                }else if(docs[0] && docs[0].password !== postData.userPassword){
                                    res.writeHead(302,{'Location' : '/page/login.html'});
                                    res.end();
                                }else {
                                    tools.resLoginRedirect(res,'http://127.0.0.1:9999/page/',3000);
                                }
                            }
                        });
                    }else {
                        console.log('connect mongodb fail');
                        client.close();
                    }
                })
            }else {
                tools.resLoginRedirect(res,'http://127.0.0.1:9999/page/',3000);
            }
        }else {
            if(req.headers.cookie){
                res.writeHead(302,{
                    'Location' : '/loginCheck'
                })
                res.end();
            }else {
                tools.resLoginRedirect(res,'http://127.0.0.1:9999/page/',3000);
            }
        }
    })
}


function loginCheck(req,res,urlparse) {
    console.log('loginCheck was called');
    if(req.headers.cookie) {
        console.log('login sucess');
        res.writeHead(302,{
            'Location' : '/page/index.html'
        })
        res.end();
    }else {
        console.log('login fail');
        res.writeHead(401,{'Content-type' : 'text/html'});
        res.write(
            `<script>
                window.location.href = 'http://127.0.0.1:9999/page/login.html'
             </script>
            `
        )
        res.end();
    }
}

function getUser(req,res,urlparse) {
    let cookie = req.headers.cookie ? querystring.parse(req.headers.cookie,';') : null;
    if(cookie && cookie['userID']) {
        res.writeHead(200,{'Content-type' : 'application/json'});
        res.write(JSON.stringify({name:'Yuri',visitTime:1}));
        res.end();
    }else {
        console.log('log out');
        tools.resLoginRedirect(res,'http://127.0.0.1:9999/page/login.html',1000);
    }
    // if(req.headers.cookie) {
    //     let cookie = querystring.parse(req.headers.cookie,';');
    //     // console.log(cookie);
    //     if(cookie.userID) {
    //         console.log(users.userList instanceof Array);
    //         // const user = users.userList.find((user) => {
    //         //     return user.userID === cookie.userID;
    //         // })
    //         if(user) {
    //             console.log(user);
    //             user.visitTimes++;
    //             res.writeHead(200,{
    //                 'Content-type' : 'application/json',
    //                 'Set-Cookie' : [
    //                     `visitTime = ${user.visitTimes}; httpOnly = true`
    //                 ]
    //         });
    //             res.write(JSON.stringify(user));
    //             res.end();
    //         }else {
    //             res.writeHead(401,{'Content-type' : 'text/plain'});
    //             res.write('no');
    //             res.end();
    //         }
    //     }else {
    //         res.writeHead(401,{'Content-type' : 'text/plain'});
    //         res.write('please login');
    //         res.end();
    //     }

    // }else {
    //     res.writeHead(401,{'Content-type' : 'text/plain'});
    //     res.write('please login');
    //     res.end();
    // }
}

module.exports = {
    login : login,
    loginCheck : loginCheck,
    getUser : getUser
}
