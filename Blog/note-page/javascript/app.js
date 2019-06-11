
// function takename(value) {
//     var name = value || 'Eric';
//     var name2 = 'Dolphin';
//     newName = 'Joe';
//     console.log(name);
// }

// globalName = 'Shelly';
// console.log(this.globalName);
// console.log(this);
// takename('Nick');
// takename();
// console.log(newName);
// console.log(name2);


//閉包，有點像Java裡面的封裝 or private，不讓資料外洩
//如果不必包可以直接在網站的console的上面直接找到，很危險
//閉包的話會自動直接執行一次
// (function takename(value) {
//     var name = value || 'Eric';
//     console.log(name);
// }) ();

//在新的ES6上可以直接用大括弧
//不用在用以前醜醜的閉包方式
// {
//     function takename(value) {
//         var name = value || 'Joe';
//         console.log(name);
//     }
// }



//global variable
//function variable
// (function test() {
//     var x = 10;
// })();
// if(true) {
//     var y = 20;
// }
// function test() {
//     var x = 10;
// }

// test();
// console.log(y);
// console.log(x);


//fucntion varialbe
// function test2() {
//     if(true) {
//         var z = 30;
//         console.log(z);
//     }
// }
// var z = 20;
// test2();
// console.log(z);



/* different between var and let*/
// var a = 1;
// var a = 2;
// console.log(a);

// let b =1;
// let b =2;
// console.log(b);


/*變量提升問題*/
// function hoisting() {
//     console.log(c + 10);
// }
// hoisting();


// console.log(c);
// var c = 10;


//實際上 ↓
//var c;
//console.log(c);
// c = 10;
// console.log(e);


// console.log(d);
// let d = 20;





// console.log(test);
// var test = function () {
//     console.log('test');
// }
// console.log(test2);
// let test2 = function() {
//     console.log('test2');
// }

// let person = {
//     name: 'Eric',
//     age: 40,
//     Show: function () {
//         // console.log(person.name,person.age);
//         // person.age = 50;
//         console.log('hi')
//     }
// }
// console.log(person.Show);
// console.log(person.show);
// person.show;
// console.log(person.age);
// person.Show;

//function hositing
// test();
// function test() {
//     console.log('Joe');
// }
// // ↓

// // function test() {
// //     console.log('Joe');
// // }
// // test();


// console.log(function2);
// var function2 = function () {
//     console.log('John');
// }
// ↓
//var function2;
// console.log(function2);
// function2 = function () {
//     console.log('John');
// }


//block scope vs function scope
// if(true) {
//     var a = 10;
//     let b = 20;
//     if(true) {
//         console.log(b);
//         let c = 30;
//     }
//     console.log(c);
// }
// console.log(a);
// console.log(b);



//const
// const PI = 3.14;
// console.log(PI);
// PI = 5;
// const person = {
//     name: 'Joe',
//     age: 40
// }
// console.log(person.name);
// person.name = 'John';
// console.log(person.name);
// person = {
//     name: "John"
// }


/*function*/
//first
// function note() {


// }
//second
// let note2 = function(){

// }

//tertiary
// (function() {
//     console.log('any');
// })();
// console.log(typeof note);
// console.log(note instanceof Object);
// let num1 = 10;
// let num2 = 010;
// let num3 = 0x10;
// console.log(num1);
// console.log(num2);
// console.log(num3);

// let float1 = 3.12;
// let float2 = 5.12E13;
// let float3 = 5.12E-12;

// console.log(float1);
// console.log(float2);
// console.log(float3);

// let num = 1 / 'two';
// let nan = NaN;
// console.log(num);
// console.log(nan);
// console.log(isNaN(nan));

// let ary = [1,2,3];
// console.log(typeof ary);
// let ary2 = new Array();
// console.log(typeof ary2);
// console.log(ary instanceof Array);
// console.log(ary instanceof Object);


// console.log(note());
// let data = new Date;
// console.log(data);

// let str = '1';
// let str2 = '2';
// let i = 2;
// console.log(str + i);
// console.log(str2 - str);
// console.log(typeof (str2 - str));
// console.log(parseInt('010',10));
// console.log(parseInt('010',8));

// console.log(str2 == i);
// console.log(str2 === i);

// let blen = '';

// if(i) {
//     console.log('true');
// }else {
//     console.log('false');
// }

// console.log(typeof (i.toString() ) );
// console.log((10).toString());
// let text = 'joe';
// console.log(text.toUpperCase());
// console.log('john'.toUpperCase());

// console.log(7/3);

// const person = {
//     name: 'Joe',
//     age: 22
// }

// if(person.age) {
//     console.log('have');
// }else {
//     console.log('do not have');
// }

// let testn = 3;
// let testnr = '3';
// console.log(testn == testnr);
// console.log(testn === testnr);

// const person = {
//     name: 'joe',
//     age: 40,
//     toString: function () {
//         return 'My name is ' + this.name;
//     },
    // valueOf: function() {
    //     return 40;
    // }
// }
// let num = 20;
// let numr = '20 is good';
// console.log(num >= numr);
// console.log(person - num);
// console.log('Hi,' + person);
// console.log(30 && 20 && 10);
// console.log(20 && undefined && 10);
// console.log(undefined || 20 || null);

// function show(x) {
//     return x;
// }
// console.log(show());

const person = {
    name: 'joe',
    // 'name.second': 'Shelly',
    // age:40,
    // valueOf:function() {
    //     return this.age;
    // },
    toString:function() {
        return this.name;
    }
}
const person2 = {
    name: 'Joe'
}
const obj = {
    x : 10
}
const person3 = person;
console.log(person == obj);
console.log(person == person2);
console.log(person == person3);

// console.log(person['name.second']);

// console.log(delete person.age);
// console.log(person.age);

// if(person.name) {
//     console.log(person.name)
// }else {
//     console.log('No Name');
// }
// for (let prop in person) {
//     console.log(prop);
//     console.log(typeof prop);
// }
// console.log(60 + person);

function test(num1,num2) {
    for(let i = 0;i < arguments.length;i++){
        console.log(arguments[i]);
    }
}
// test(10,20,30);
console.log(person.toString());
