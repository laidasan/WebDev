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

let nan = 1 / 'two';
console.log(isNaN(nan));


let num_2 = 101010;
let num_16 = 0xFF;
let num_8 = 040;
console.log(num_8);
console.log(parseInt(num_2,2));
console.log('sss\nss');
console.log('\u0048');

let p = {
    name: 'joe'
}

function Person(){};
function inherit(o) {
    if(o === null){
        throw TypeError();
    }else if(typeof o !== 'object' && typeof o !== 'function') {
        throw TypeError();
    }else if(Object.create && typeof o !== 'function'){
        return Object.create(o)
    }else if(typeof o === 'function'){
       return new o();
    }else {
        function f(){};
        f.prototype = o;
        return new f();
    }
}
let t = inherit(Person);
console.log(t);
function Person() {
    console.log('Hi');
}
// const joe = new Person();
const joe = Object.create(Person);
console.log(Object.getPrototypeOf(joe));
console.log(typeof joe);
console.log(joe instanceof Object);
console.log(joe instanceof Function);

function Person() {
    this.name = 'joe';
}
let o = new Person();
let p = {age: 40};
Object.setPrototypeOf(p,o);
let x = Object.setPrototypeOf({},p);
console.log(x instanceof Person);


let name = 'Joe'
let nam = new String('shelly');
console.log(name instanceof nam);


function Person (){

}
function Dad(){
    
}
Dad.prototype = Person.prototype;
const dad = new Dad();
console.log(Object.getPrototypeOf(dad));
console.log(dad instanceof Dad);
console.log(dad instanceof Person);


console.log(0 / 3);

let num = 3;
let num_obj = Number(3)
console.log(num_obj);
console.log(typeof num_obj.valueOf());
console.log(typeof Number(100).toString());

console.log(Number(true))

console.log('1' + true);
console.log(true.toString());
console.log(-Infinity % 100)


let static = 0;
