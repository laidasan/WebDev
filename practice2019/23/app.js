// // var x  = 10;
// // function consoleinfo() {
// //     var x = 20;
// //     console.log(x);
// // }

// // consoleinfo();
// // console.log(x);


// // primitive
// //composite


// /*淺層複製*/
// let ary_name = [0,1,2];
// let ary_name_copy = ary_name;
// let ary_name_copy_def = copyArr(ary_name);


// console.log(ary_name_copy_def);
// console.log(ary_name);
// console.log(ary_name_copy);
// console.log(ary_name_copy_def);
// ary_name[0] = 'joe';
// console.log(ary_name);
// console.log(ary_name_copy);
// console.log(ary_name_copy_def);


// function copyArr(arr) {
//     let res= [];
//     for(let i = 0;i < arr.length;i++) {
//         res[i] = arr[i];
//     }
//     return res;
// }

// let num = 10;
// let person = {
//     name: 'joe'
// }
// function changeValue(num) {
//     num = 20;
// }
// function changeObject(obj) {
//     obj = { name: 'shelly'};
// }
// changeObject(person);
// console.log(person);
// changeValue(num);
// console.log(num);

// console.log(0 % 3);


// const nm = {
//     toString : function () {
//         return 3;
//     },
//     valueOf : function() {
//         return 12;
//     }
// }
// const nm2 = {
//     toString : function() {
//         return 3;
//     }
//     // valueOf : function() {
//     //     return 15;
//     // }
// }

// console.log(nm <= nm2);

// for(var i = 0;i < 5;i++) {
//     console.log(i);
// }
// var i = 30;
// console.log(delete i);
// console.log('var:' + i);

// const y = 20;
// // y = 30;
// console.log(y);

// Number.MAX_VALUE


// let arr = [0,1,2,3];
// console.log(arr[0]);
// console.log(arr['3']);



// let nul = null;
// console.log(nul);


// let coin1 = {value: 10};
// coin1 = {value: 20};
// console.log(coin1);
// function change(obj){
//     obj = {value: 30};
// }
// console.log(coin1);


// const objj = {
//     toString: function() {
//         return '30';
//     }
//     // valueOf: function(){
//     //     return this;
//     // }
// }
// console.log(objj.valueOf());
// // console.log(Number(undefined));
// console.log('two' + objj);
// console.log(1 + objj);
// console.log(1 - objj);


// console.log((function(x){
//     f(x);
// }).toString());

// console.log(1 + {});
// let date = new Date();
// console.log(date.toString());
// console.log(1 + date);    //use toString  
// console.log(date -1);    //use valueOf

// let number = 10;
// console.log(number.toString());

// console.log(-Infinity + -Infinity);

// console.log(typeof ({}.valueOf()));
// console.log({}.valueOf());


// let obj = {
//     toString: function() {
//         return 'one';
//     },
//     valueOf: function() {
//         return 30;
//     }
// }

// console.log(1 + obj);
// console.log({age: 5}.valueOf.call(obj));

// console.log(1 + {});
// console.log(1 - {});

// console.log(!!'false' == !!'true');
// console.log(!!'false' === !!'true');

// console.log(typeof []);

// for(let i = 0;i < 5;i++) {
//     console.log('i++: ' + i);
// }

// for(let i = 0;i < 5;++i) {
//     console.log('++i: ' + i);
// }

// let num = 1;
// console.log(num++);
// console.log(++num);

// let x = '10' && false;
// console.log(x);

// let x = 'String';
// let y = 'Apple';
// console.log(x == y);
// console.log(x === y);
// console.log(x > y);
// console.log(x < y);

// console.log([].toString());
// console.log({}.toString());

// console.log(Boolean([]));

// function test(){
//     for(let i = 0;i < arguments.length;i++){
//         console.log(arguments[i]);
//     }
// }
// test(1,2,3);

// let ary = [
//     {
//         name : 'Joe',
//         age : 30,
//         likeFood : 'meat'
//     },
//     {
//         name: 'Shelly',
//         age: 18,
//         likeFood : 'vegetable'
//     },
//     {
//         name : 'Tommy',
//         age : 15,
//         likeFood : 'everything'
//     }
// ]
// let aryMap = ary.map(function(elem,index,ary){
//     return elem.age > 15;
// })
// // console.log(aryMap);
// let aryForEach = ary.forEach(function(elem,index,ary){
//     // console.log(elem);
//     return ary[0];
// })
// console.log(aryForEach);

// let aryFilter = ary.filter(function(elem,index,ary){
//     return elem.age > 15;
// });
// // console.log(aryFilter);

// aryFilter.forEach(function(elem,inedex){
//     // console.log(elem.name);
// });

// let aryFind = ary.find(function(elem,index){
//     return elem.age > 15;
// })
// // console.log(typeof aryFind);
// for(let prop in aryFind) {
//     // console.log(prop);
//     // console.log(aryFind[prop]);
// }

// for(var i = 0; i < 5; i++) {
//     (function(i){
//         window.setTimeout(function(){
//             console.log(i);
//         },1000);
//     })(i);
// }


    

// function dogHouse(){
//     var count = 0;

//     function dogCount(){
//         count++;
//         console.log(count);
//     }
//     return dogCount;
// }

// function catHouse() {
//     var count = 0;

//     function catCount(){
//         count++;
//         console.log(count);
//     }
//     return catCount;
// }

// let doeA = dogHouse();
// doeA();
// doeA();
// doeA();
// let catA = catHouse();
// catA();
// catA();
// catA();
    

// function rangeClosed(startValue,endValue,step) {
//     let step_function = step || 1;
//     let numbers = [startValue];
//     for(let i = 0; numbers[i] < endValue ;i++) {
//         numbers.push(numbers[i] + step_function);
//     }
//     return numbers;
// }

// console.log(rangeClosed(1,5,1) );



// /* this */

// let obj = {
//     name: 'Yuri',
//     age: 16,
    
//     toStirng: function() {
//         console.log(this.name);
//         return this.name || 'Joe';
//     }
// }

// let obj_2 = {
//     name: 'Shelly',
//     age: 18,
//     '0': 'Yuri',
//     '1': 18,
//     length: 2,
//     toString: function() {
//         console.log(this.name);
//         return this.name || 'Joe';
//     },
//     forEach: function(callback) {
//         for(let i = 0; i < this.length;i++) {
//             callback(this[i]);
//         }
//     }
// }
// // obj.toStirng();
// // obj.toStirng.call(obj_2);
// // console.log(this);
// obj_2.forEach(function(elem){
//     console.log(elem);
// });



// function outer () {
//     let x = 10;
//     function inner(y){
//         return x + y;
//     }
//     return inner;
// }

// let foo = function () {
//     this.count++;
// }
// foo.count = 0;
// for( let i = 0;i < 5;i++){
//     foo();
// }
// count = 0;
// console.log(this.count);

// var bar = function(){
//     console.log(this.a);
// }

// let foo = function(){
//     var a = 123;
//     this.bar();
//     console.log(this.bar);
// }

// foo();

// let obj = {
//     a : 30
// }

// let funcc = function(){
//     console.log(this.a);
// }
// let nums = [10,20];
// function func(num1,num2){
//     console.log(this.a + num1 + num2);
// }
// // func.bind(obj)();
// // func.call(obj,10,20);
// func.apply(obj,nums);

// function Person(name,age){
//     let obj_name = name;
//     this.toStirng = function(){
//         return obj_name;
//     }
// }

// let kuro = new Person('kuro',19);
// console.log(kuro.toStirng() );

// function Person(name) {
//     let obj = {};

//     (function() {
//         obj.name = name;
//     })();

//     this.getName = function(){
//         return name;
//     }

//     obj.prototype = Person.prototype;
//     return obj;
// }

// function Person_2 (name){
//     this.getName = function() {
//         return name;
//     }
// }
// // let kuito = new Person('shelly');
// // let kuito = Person('Joe');
// // console.log(kuito.name);
// // console.log(Object.getPrototypeOf(kuito));
// let yuri = new Person_2('Yuri');
// console.log(yuri.getName());
// console.log(Object.getPrototypeOf(yuri).name);
// Object.getPrototypeOf(yuri).name = 'Joe';
// console.log(Object.getPrototypeOf(yuri).name);

// // console.log(Object.getPrototypeOf(yuri));

"use strict"
let obj = {};
Object.defineProperty(obj,'name',{
    // value: 'Joe',
    // writable: true,
    // enumerable: true,
    // configurable: true
    get: function(){return this.__name__;},
    set: function(value){this.__name__ = value}
});
// // Object.defineProperty(obj,'name',{
// //     enumerable: false
// // })
Object.defineProperty(obj,'__name__',{
    writable: true,
    enumerable:false,
    configurable: false
})
// console.log(Object.getOwnPropertyDescriptor(obj,'name'));
obj.name = 'joe';
// console.log(obj.name);
console.log(Object.getOwnPropertyDescriptor(obj,'__name__'));
for(let prop in obj) {
    console.log(obj[prop]);
}
Object.defineProperty(obj,'__name__', {
    writable: false
})
console.log(Object.getOwnPropertyDescriptor(obj,'__name__'));
// console.log(delete obj.name );
// console.log(obj.name);
// obj.name = 'Yuri';
// console.log(obj.name);
// // Object.myseal = function(obj){
// //     Object.getOwnPropertyNames(obj).forEach(function(prop){
// //         let desc = Object.getOwnPropertyDescriptor(obj,prop);
// //         desc.configurable = false;
// //         Object.defineProperty(obj,prop,desc);
// //     });
// //     return Object.preventExtensions(obj);
// // }
// Object.seal(obj);
// obj.name = 'Shelly';

// // Object.defineProperty(obj,'__name__',{
// //     writable:false
// // })
// // obj.name = 'Shelly';
// // console.log(obj.__name__);
// // console.log(obj.name);
// // console.log(obj.name);
// // for(let prop in obj) {
// //     console.log(prop);
// // }

// function Food(name){

// }
// Food.prototype.name = 'llk';
// console.log(Food.prototype);
// let food  = new Food('lu');
// Object.getPrototypeOf
// const skt = {
//     name: 'joe'
// }
// Object.defineProperty(skt,'name',{
//     writable: false
// })

// Object.seal(skt);
// // Object.freeze(skt);
// // skt.kat = 'shelly';
// // console.log(skt.kat);
// console.log(delete skt.name);
// skt.name = 'shelly';
// console.log(skt.name);
// console.log(Object.isSealed(skt));

// console.log(3 / 2);


// 'use strict'
// let x = 0;
// console.log(delete x);
function test(num1,num2) {
    let  x = num1;
    let  y = num2;
    for(let i in arguments) {
        console.log(i);
    }
    console.log(arguments.callee);

    arguments[0] = 30;
    console.log(arguments[0]);
    return x + y;
    // return num1 + num2;
    // return this;
}
console.log(test(1,2,3,4,5));
// console.log(test() );
// console.log(eval('var x = 10') );
// console.log(x);

let obj = {
    name : 'joe',
    name: 'shelly'
}
console.log(obj.name);

function Person() {
    
}

let obj = new Person;
console.log(obj.valueOf() );
console.log(Person.prototype.valueOf());
let kuro = {};
console.log(kuro.valueOf());
let ary =[1];
console.log(ary.toString());
console.log(ary.valueOf());

//Object.create();
//function constructor
function inherit(o) {
    if( o === null || (typeof o !== 'object' && typeof o !== 'function')) {throw TypeError();}
    if(Object.create) {
        return Object.create(o);
    }else  {
        function f() {};
        f.prototype = o;
        return new f();
    }
}
function Person() {
}
// console.log(Person.prototype);
// Object.defineProperty(Person.prototype,'name',{
//     value : 'shelly',
//     writable: true,
//     enumerable: false,
//     configurable: true
// })
// Person.prototype.name = 'shelly';
// let person = new Person();
// let obj = inherit(new Person());
// let obj = inherit(person);
// console.log(Object.getPrototypeOf(obj));
// console.log(obj.name);

let person = {

}
Object.defineProperty(person,'name', {
    set: function(value){this.__name__ = value;},
    get: function(){return this.__name__;}
})

// person.name = 'shelly';
// console.log(person.name);
// console.log(typeof person);
function inherit(o){
    if(o === null || (typeof o !== 'object' && typeof o !== 'function')){throw TypeError();}
    if(Object.create) {
        return Object.create(o);
    }else {
        function f(){};
        f.prototype = o;
        return new f();
    }
}

let kuro = inherit(person);
console.log(kuro);
kuro.name = 'Joe';
console.log(kuro);
console.log(kuro.name);


let l1 = {val:0,next:null}
let l2 = l1;

l2.next = {val:0,next:null}
console.log(l1);


let strs = 'pwwke';
// let astr = Array.from(str);
// console.log(astr.find(function(elem,index,ary){
//     return elem === 'd';
// }))
// function test(str) {
//     let sary = Array.from(str);
//     let ar = [];
//     sary.forEach(function(elem,index,ary){
//         if(!ar.find(function(ele){return ele === elem})){
//             ar.push(elem);
//         }
//     })
//     return ar;
// }

function test(s) {
    const length = s.length;
    let longlength = 0;
    let current = 0;
    let windowstart = 0;
    let found = new Map();

    while(current < length) {
        const c = s[current];

        if(found.get(c) >= windowstart){
            windowstart = found.get(c) + 1;
        }
    }
}
console.log(test(strs));

let found = new Map();
found.set('a',0)
found.set('a',2);
console.log(found.get('a'));

let str = 'pweke';
function long(s) {
  const length = s.length
  let windowStart = 0
  let current = 0
  let longest = 0
  let found = new Map()

  while ( current < length ) {
    const c = s[ current ]

    if ( found.get( c ) >= windowStart ) {
      windowStart = found.get( c ) + 1
    }
    
    found.set( c, current )

    longest = Math.max( longest, ( current - windowStart ) + 1 )
    current++
  }

  return longest;
}
console.log(long(str));



console.log(0 % -Infinity);

// "use strict"

(function(){
    // var a = b = 3;
    b = 3;
    var a = b;
    //var a;
    //b = 3;
    console.log(a);
    console.log(b);
})();


(function() {
    console.log(1); 
    setTimeout(function(){console.log(2)}, 1000); 
    setTimeout(function(){console.log(3)}, 0); 
    console.log(4);
    })();


console.log("i'm a lasagna hog".split("").reverse());

let obj = {}
console.log('x' in obj);
console.log(obj.hasOwnProperty('x'));
