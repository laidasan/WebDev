/*    callback function   */
// 只要將函式當作另一個函式的參數，就是callback function的一種  
let btn = document.querySelector('.btn');


/*   addEventListener()  */
btn.addEventListener('click',function() {
    console.log('Button');
},false)

/*  setTimeout()  */
// function funcA() {
//     window.setTimeout(function() {
//         console.log('function A');
//     },1000 * (Math.random()+1) );
// }

// function funcB() {
//     window.setTimeout(function() {
//         console.log('function B');
//     },1000 *(Math.random()+1));
// }


/*  solve problem  */
// function funcA(callback) {
//     window.setTimeout(function(){
//         console.log('function A');

//         /* callback  */
//         if(typeof callback === 'function') {
//             callback();
//         }
//     },1000 * (Math.random()+1));
// }

// function funcB() {
//     window.setTimeout(function() {
//         console.log('function B');
//     },1000 * (Math.random()+1));
//     };
// funcA(funcB);
// funcB();

/*    hard to understand    */
//state 1
// function func() {
//     console.log('function A');
//     console.log('function B');
// }

// state2
// function func(callback) {
//     window.setTimeout(function(){
//         console.log('function A');

//         callback();
//     },1000 * (Math.random()+1))
// }
// function funcB() {
//     console.log('function B');
// }

//state3
// function funcA(callback){
//     window.setTimeout(function(){
//         console.log('function A');

//         if(typeof callback === 'function') {
//             callback();
//         }
//     })
// }

// function funcB() {
    
//     // console.log('function B');
//     window.setTimeout(function(){
//         console.log('function B');
//     },1000 * (Math.random()+1));
// }
// function funcC() {
//     setTimeout(function(){
//         console.log('function C');
//     },1000 * (Math.random()+1))
// }
// console.log(func);
// funcA(funcB);

//   相依性過深(波動拳)
function funcA(){
    window.setTimeout(function(){
        console.log('function A');
        window.setTimeout(function(){
            console.log('function B');
            window.setTimeout(function(){
                console.log('function C');
            },1000 * (Math.random()+1))
        },1000 * (Math.random()+1))
    },1000 * (Math.random()+1))
}


/*    IIFE (immediately Invoked Function Experssion) 立即被呼叫的函式    */ 
// for(var i = 1;i <5;i++) {
//     window.setTimeout(function(){
//         console.log(i);
//     },1000);
// }

// for(var i = 1;i <= 5;i++) {
//     (function(x){
//         window.setTimeout(function(){
//             console.log(x);
//         },1000);
//     })(i)
// }







/*    practice    */
// function funcA() {
//     window.setTimeout(function (){
//         console.log('function A');
//     },1000 * (Math.random()+1));
// }
// function funcB() {
//     window.setTimeout(function () {
//         console.log('function B');
//     },1000 * (Math.random()+1))
// }

// function funcA(callback) {
//     window.setTimeout(function(){
//         console.log('function A');
//         // console.log('function B');
//         if(typeof callback === 'function'){
//             callback();
//         }
//     },1000 * (Math.random()+1))
// }
// function funcB() {
//     setTimeout(function(){
//         console.log('function B');
//     },1000 * (Math.random()+1))
// }
// funcA(funcB);

/*      */
// function test(callback){
//     window.setTimeout(function(){
//         console.log('test');

//         setTimeout(function(){
//             callback(callback);
//         },1000 * (Math.random()+1))
//     },1000 * (Math.random()+1))
// }

// function test2(tt){
//     console.log(tt);
// }
// test(test2);
/*       */

// for(var i = 1;i < 5;i++){
//     window.setTimeout(function(){
//         console.log(i);
//     },1000)
// }

for(var i =1; i < 6;i++) {

    //為凸顯差異，將傳入後的參數改為x
    //由於scope的不同，所以要在內部繼續沿用i也是可以的唷!!
    (function(x){
        window.setTimeout(function(){
            console.log(x);
        },1000 * x);
    })(i);
}
