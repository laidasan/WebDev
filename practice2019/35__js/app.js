let item_green = document.querySelector('li.green');
let item_green_getele = document.getElementsByClassName('green');
let items = document.querySelectorAll('li.item');
let items_red = document.querySelectorAll('li.red');
// console.log(item_green_getele);
// console.log(item_green);
// console.log(items);
// console.log(items_red);
// items.forEach(function(elem){
//     console.log(elem.getAttributeNames());
// }) 
// console.log(items);
// console.log(items[0].getAttribute('class'));
// items[0].setAttribute('class','item red');
// console.log(items[0].getAttributeNode('class'));
// items[0].removeAttributeNode(items[0].getAttributeNode('class'));
// items[0].removeAttribute('class');
// items[0].setAttribute('class','item orange');
// console.log(items[0].getAttributeNames());
// items[0].firstChild.nodeValue = 'french';
// items[0].textContent = 'fre';
// items[0].className = 'item';
// console.log(items);
// console.log(items_red);
// console.log(items[0].firstChild.nodeValue);
// let str = '';
// console.log(String.toString());
// console.log(str instanceof Object);

// function test() {
//     let num = 10;
//     // console.log(num);
// }
// console.log(num);
// test();
let str = 'Link';
let tagP = `<a href="https://ithelp.ithome.com.tw/articles/10192175" class="link" target="_blank">${str}</a>`
item_green.innerHTML = tagP;
// console.log(typeof tagP);
// let link = document.querySelector('a.link');
// console.log(link)
// link.addEventListener('click',function(event){
//     event.preventDefault();
//     console.log("this.link");
// },false)

let list = document.querySelector('ul.list');
// console.log(list);
console.log(typeof list.className);
console.log(document.querySelector('.link').className);
list.addEventListener('click',function(event){
    if(event.target.className === 'link') {
        event.preventDefault();
        console.log(event.target.className);
    }
    console.log('list');
},false);

// console.log(tagP);