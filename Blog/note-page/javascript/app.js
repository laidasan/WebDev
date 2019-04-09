function takename(value) {
    var name = value || 'Eric';
    var name2 = 'Dolphin';
    newName = 'Joe';
    // console.log(name);
}

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
const person = {
    name: 'Joe',
    age: 40
}
console.log(person.name);
person.name = 'John';
console.log(person.name);
person = {
    name: "John"
}