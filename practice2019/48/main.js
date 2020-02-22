// let fs = require('fs');
// let m = require('./module');
// let user = require('./user');
// let data = fs.readFileSync('abc.txt');
// console.log(data.toString());
// m.run();
// m();
// console.log(user.toString());
// console.log(user.id);
// console.log('user',user);
// console.log('m',m);

// let obj1 = {name : 'Joe'};
// let obj2 = obj1;
// // obj1 = {age : 30};
// // console.log(obj2);

// function change(obj) {
//     obj = {age : 30}
//     console.log(obj)
// }
// change(obj1);
// console.log(obj1);
// console.log(obj2);

// let x = 10;
// let y = 20;
// function test(a,b) {
//     let temp = a;
//     a = b;
//     b = temp;
//     console.log(a,b)
// }
// test(x,y);
// console.log(x,y)

// let xhr = new XMLHttpRequest;
// const clientID = 'owd9ainrtmqsxolzgpcxdbieq62lr1';
// // xhr.open("Get","http://localhost:3000/data");
// // xhr.open("Get","https://api.twitch.tv/helix/games/top?first=50",true);
// xhr.open("Get","https://api.twitch.tv/helix/games/top?first=50",true);
// xhr.setRequestHeader('Client-ID',clientID);
// xhr.onload = function () {
//     if(xhr.status >= 200 && xhr.status <= 300) {
//         console.log(JSON.parse(xhr.responseText));
//     }else {
//         console.log(xhr.status);
//     }
// }
// xhr.send(null);



//call by sharing ?  javascript用的共享參考
//call by value? 
//call by refrence?
// let a = {name : 'joe'}
// let b = {};
// b.exports = a;

// a = {}
// console.log(b.exports)

// import module
let server = require('./server');
let router = require('./router');
let requestHandlers = require('./requestHandler');

let handle = {
    "/" : requestHandlers.findFileResponse,
    "/start" : requestHandlers.start,
    "/upload" : requestHandlers.upload,
    "/lotto" : requestHandlers.lotto,
    "/getlotto": requestHandlers.getLottoUsers,
    "/findFileResponse" : requestHandlers.findFileResponse,
}

// server.startServer(router.route);
server.startServer(router,handle);



