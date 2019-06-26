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
function funcA(callback) {
    window.setTimeout(function(){
        console.log('function A');

        /* callback  */
        if(typeof callback === 'function') {
            callback();
        }
    },1000 * (Math.random()+1));
}

function funcB() {
    window.setTimeout(function() {
        console.log('function B');
    },1000 * (Math.random()+1));
    };
// funcA(funcB);
// funcB();


/*    IIFE (immediately Invoked Function Experssion) 立即被呼叫的函式    */ 
for(var i = 1;i <5;i++) {
    window.setTimeout(function(){
        console.log(i);
    },1000);
}

for(var i = 1;i <= 5;i++) {
    (function(x){
        window.setTimeout(function(){
            console.log(x);
        },1000);
    })(i)
}
