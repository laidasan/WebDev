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
// button.addEventListener('click',function() {
//     console.log('Hi');
// })
// button.addEventListener('click',function() {
//     console.log('Hello');
// })


// let btn = document.querySelector('#btn');
// btn.onclick = function() {
//     console.log('Hi');
// };

// btn.onclick = null;

// btn.addEventListener('click',function() {
//     console.log('Hi');
// },false)
// btn.addEventListener('click',function() {
//     console.log('Hello');
// })

// 雖然刪除了，可是沒有用。
// btn.removeEventListener('click',function() {
//     console.log('Hi');
// })

// function sayHi() {
//     console.log('Hi');
// }
// btn.addEventListener('click',sayHi,false);
// btn.removeEventListener('click',sayHi,false);


let lbl = document.querySelector('.lbl');
let chkbox = document.querySelector('#chkbox');
lbl.addEventListener('click',function(e) {
    console.log(e.target.tagName + ' lbl');
    console.log(this.tagName + ' lbl');
})
// chkbox.addEventListener('click',function(e) {
//     e.stopPropagation();
// })

chkbox.addEventListener('click',function(e) {
    console.log(this.tagName + ' chkbox');
})



let items_html = document.getElementsByClassName('item');
let list_html = document.getElementById('mylist');
let list_query = document.querySelector('.list');
let item_queryAll = document.querySelectorAll('.item');
// console.log(items_html);
// console.log(list_html);
// console.log(list_query);
// console.log(item_queryAll);
/* 事件委派 */
/* 用for去給每個item設置監聽器，之後新增的不會設置道 */
// if(list_query.hasChildNodes()) {
//     for(let i = 0;i < list_query.children.length;i++) {
//         list_query.children[i].addEventListener('click',function(e) {
//             console.log(e.target.tagName);
//             console.log(this.tagName);
//         })
//     }
// }
/* 所以可以將監聽器直接設置在父層(這裡是list)，之後再透過取得事件傳遞機制原理，執行我們需要事情(比如說判斷觸發元素的ClassName，如果是item就執行某些事情) */
list_query.addEventListener('click',function(e) {
    if(e.target.className === 'item') {
        console.log("I'm Item");
    }
    else {
        console.log('No a item');
    }
})

let item_4 = document.createElement('li');
item_4.textContent = 'chick 4';
item_4.className = 'item'
list_query.appendChild(item_4);
// list_query.innerHTML='';
// console.log(item_queryAll);
// console.log(items_html);
// console.log(list_query);
// console.log(item_queryAll);

// 透過querySelectorAll取得的NodeList是靜態的，但是querySelector取得的應該不是NodeList
// 而getElementByxxx，只有getElementById才是取得一個Element(回傳單個元素，不是HTMLCollection)，其他的都是取得多個Element(回傳的是HTMLCollection)
// 可以注意到除了getElementById的Element沒有s之外，其他的都有!EX:getElementsByClassName
// 所以HTMLCollection可以用getElementsByxxx取得，NodeList可以用querySelectorAll / Node.childNodes 來取得
// 透過querySelectorAll的NodeList是靜態的
