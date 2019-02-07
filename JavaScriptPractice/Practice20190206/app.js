//Alert
// alert('Nice coffee');

//Prompt
// const input = prompt();
// alert(input);

//Confirm
// if (confirm('Are you sure')) {
//     console.log('yes');
// }else {
//     console.log('No');
// }

let val;

//outer height and width;
// val = window.outerHeight;
// val = window.outerWidth;
// console.log(val);

//inner height and width;
// val = window.innerHeight;
// val = window.innerWidth;
// console.log(val);


//Scroll point 
// val = window.scrollY;


val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

//Redirect
// window.location.href = 'http://google.com';
// if (confirm('Reaload the page?')) {
//     // window.location.reload();
//     console.log('reload');
// }else {
//     console.log('NO');
// }
// window.location.reload();
// window.history.go();
// val = window.history.length;
// console.log(val);


// //Navigator Object
// val = window.navigator;
// // val = window.navigator.appVersion; //type : string;
// val = window.navigator.platform;
// val = window.navigator.vendor;
// val = window.navigator.language;
// console.log(val);
// console.log(typeof val);

//var , let , const
var a = 1;
let b = 2;
const c =3;

function test() {
    // var a = 4;
    a = 4;
    let b = 5;
    const c =3;
    console.log(`Function Scope ${a} ${b} ${c}`);
}
test();
console.log(`Global Scope ${a} ${b} ${c}`);

