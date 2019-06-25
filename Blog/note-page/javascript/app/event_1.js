let outer = document.querySelector('.outer');
let inner = document.querySelector('.inner');
let button = document.querySelector('.button');

/* event flow  */

// addEventListener的第三個參數可以指定  //
//  冒泡 / 捕獲 : false / true  //
// outer.addEventListener('click',function() {
//     console.log('outer bubble');
// },false);
// outer.addEventListener('click',function() {
//     console.log('outer capture');
// },true);


// inner.addEventListener('click',function() {
//     console.log('inner capture');
// },true);
// inner.addEventListener('click',function() {
//     console.log('inner bubble');
// },false);

/* button */


// button.addEventListener('click',function() {
//     // alert('Click');
//     console.log('button');
// },true);
button.addEventListener('click',function() {
    console.log('Hi');
})
button.addEventListener('click',function() {
    console.log('Hello');
})


// let btn = document.querySelector('#btn');
// btn.onclick = function() {
//     console.log('Hi');
// };

// btn.onclick = null;

btn.addEventListener('click',function() {
    console.log('Hi');
},false)
btn.addEventListener('click',function() {
    console.log('Hello');
})

// 雖然刪除了，可是沒有用。
btn.removeEventListener('click',function() {
    console.log('Hi');
})

function sayHi() {
    console.log('Hi');
}
btn.addEventListener('click',sayHi,false);
btn.removeEventListener('click',sayHi,false);