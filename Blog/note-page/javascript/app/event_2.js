/*     event    */
let button = document.querySelector('.button');
button.addEventListener('click',function(e) {
    console.log(e);
});

//
// type 觸發事件的名稱
// target 觸發事件的元素
// bubbles 是否在冒泡階段觸發
//etc...

/*    stop.Propagation()    */
//阻擋事件冒泡

let btn = document.querySelector('.btn');


/*    e.preventDefault()    */
//阻擋預設事件
// btn.addEventListener('click',function(e) {
    // e.preventDefault();
//     console.log('Go To Google');
//     return false;
// })
btn.addEventListener('click',show,false);
console.log(show);
var show = function(e) {
    e.preventDefault();
    console.log('Go To Google');
}
// function show(e) {
//     e.preventDefault();
//     console.log('Go To Google');
// }



let lbl = document.querySelector('.lbl');
let chkbox = document.querySelector('#chkbox');

lbl.addEventListener('click',function() {
    // console.log('lbl');
})

chkbox.addEventListener('click',function(e) {
    // e.stopPropagation();
    // console.log('chkbox');
})


/*    this    */
lbl.addEventListener('click',function(e) {
    console.log(e.target.tagName + ' 1');
    console.log(this.tagName + ' 1');
})
chkbox.addEventListener('click',function(e) {
    console.log(e.target.tagName + ' 2');
    console.log(this.tagName + ' 2');
})

/*    事件委派    */
let mylist = document.querySelector('.list');

// if(mylist.hasChildNodes()) {
//     for(let i =0;i < mylist.children.length;i++) {
//         mylist.children[i].addEventListener('click',function() {
//             console.log("I'm a item.");
//         })
//     }
// }

mylist.addEventListener('click',function(e) {
    if(e.target.className === 'item') {
        console.log("I'm a item");
    }
})
let item_4 = document.createElement('li');
item_4.className = 'item';
item_4.textContent = 'item';

mylist.appendChild(item_4);
console.log(mylist);

var a = 3;
a = 50;
console.log(window.a);
console.log(delete a);
console.log(a);