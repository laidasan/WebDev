/*Create Node */
//    Element    //
let container = document.querySelector('.container');

let title_new = document.createElement('h1');
title_new.id = 'title2';
title_new.className = 'heading-primary';
title_new.textContent = "I'm title 2";

//    textNode    //
let title_contain = document.createTextNode('Hello!World');


//    DocumentFragment    //
let frag = document.createDocumentFragment();
for(let i = 0;i < 3;i++) {
    let h1 = document.createElement('h1');
    h1.textContent = "I'm new title";
    frag.appendChild(h1);
}
container.appendChild(frag);
console.log(container);

//    document.write    //
// window.onload = function() {
    document.write('<h3>title_3</h3>');
// }
// document.write('<script src="./app/function_2.js"></script>');


/*   append & deletet    */
//   append / appendChild    //
let list = document.querySelector('.list');
let item_1 = document.createElement('li');
let item_2 = document.createElement('li');
item_1.textContent = 'Item 1';
item_2.textContent = 'Item 2';
list.append(item_1,item_2);
// list.appendChild(item_1);
// console.log(list.append(item_1,item_2) );
// console.log(list.appendChild(item_1) );

/*    insertBefore    */
let item_3 = document.createElement('li');
item_3.textContent = 'Item 3';
list.insertBefore(item_3,list.lastElementChild);  //加入到最後一個的前面

/*    replaceChild     */
let item_4 = document.createElement('li');
item_4.textContent = 'Item 4';
list.replaceChild(item_4,list.firstElementChild);

/*    removeChild    */
list.removeChild(list.firstElementChild);

