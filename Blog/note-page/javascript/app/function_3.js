// function CashCard(id,money) {
//     this.id =id;
//     this.money = money;
    // this.toString = function () {
    //     return 'id: ' + this.id + '\nmoney:' + this.money;
    // }
// }

// function toString() {
//     return 'id: ' + this.id + '\nmoney:' + this.money;
// }
// cashcard1 = new CashCard('0100',500);
// cashcard1.toString = toString;



/* protorype */

function CashCard(id, money) {
    this.id = id;
    this.money = money;
}
cashcard1 = new CashCard('0100',500);
CashCard.prototype.toString = function () {
    return 'id: ' + this.id + '\nmoney:' + this.money;
}
// 一樣的效果
// console.log(cashcard1.toString());
console.log(cashcard1);
console.log(Object.getPrototypeOf(cashcard1));
console.log(CashCard.prototype);
console.log(cashcard1.constructor);

CashCard.prototype.name = 'joe';
console.log(CashCard.prototype);
// console.log((CashCard.prototype.constructor === CashCard));
// let ary = new Array();
// let str = 'joe';
// console.log(Object.getPrototypeOf(str));

/* 建構步驟*/
// function CashCard(id,name) {
//     this.id = id;
//     this.name = name;
// }
// let obj = {}
// obj.__proto__ = CashCard.prototype;
// CashCard.call(obj,'0100',500);
// console.log(obj);
// let test = new CashCard('01010',1000);
// console.log(test);

/* 繼承 */
// const Person = {
//     name : 'Joe',
//     age : 40
// }
// const WhitePerson = {
//     name: "Joe",
//     age: 40,
//     color: 'white'
// }
// const BlackPerson = {
//     name: 'Joe',
//     age : 40,
//     color: 'black'
// }

// const WhitePerson = {
//     color: 'white'
// }
// const BlackPerson = {
//     color: 'black'
// }
// console.log(WhitePerson.name);
// Object.setPrototypeOf(WhitePerson,Person);
// console.log(WhitePerson.name);



