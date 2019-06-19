



// let count = 0;

// function dogCount() {
//     count++;
//     console.log(count);
// }
// dogCount();
// dogCount();
// dogCount();


// function catCount() {
//     count++;
//     console.log(count);
// }

// catCount();

/* Clourse */
// function dogHouse() {
//     let count = 0;
//     function dogCount() {
//         count++;
//         console.log(count);
//     }
//     return dogCount;
// }

// let dog = dogHouse();
// console.log('dog');
// dog();
// dog();
// dog();

// function catHouse() {
//     let count = 0;
//     function catCount() {
//         count++;
//         console.log(count);
//     }
//     return catCount;
// }
// let cat = catHouse();
// console.log('cat');
// cat();
// cat();
// cat();

function createCount() {
    let count = 0;
    return function() {
        count++;
        console.log(count);
    }
}
let dogCount = createCount();
dogCount();
dogCount();
let catCount  = createCount();
catCount();
catCount();
catCount();

// let x  = 10;
// function test() {
//     let x = 30;
//     function test2() {
//         return x;
//     }
//     return test2;
// }
// let testOb = test();
// console.log(testOb() );

let x = 10;
function test() {
    let x = 30;
    let f = new Function('return x;');
    return f();
}
console.log( test() ); 
/* Clourse */

/* Scope */
// function outer() {
//     let x = 1;
//     function inner() {
//         let x = 3;
//         let y = 10;
//         console.log('inner: '+ x);
//     }
//     console.log('outer: ' + x);
//     // console.log(y);
//     return inner();
// }
// outer();

// function outer() {
//     let x = 1;
//     function inner() {
//         console.log('inner: '+ x);
//     }
//     console.log('outer: ' + x);
//     return inner();
// }
// outer();



/* Counstructor */

/* toString() write in function*/
/* 這樣子每個cashcard都擁有自己的toString,容易造成資源浪費*/
// function CashCard(id) {
//     this.id = id;
//     this.money = 600;
//     this.toString = function() {
//         return this.id;
//     }
// }

// let cashcard1 = new CashCard('0100');
// let cashcard2 = new CashCard('0101');

// change cashcard1.toString //
// cashcard1.toString = function () {
//     return this.money;
// }

// console.log(cashcard1.toString());
// console.log(cashcard2.toString());
// console.log(cashcard1.toString == cashcard2.toString);


/* outside */
/* 這樣子cashcard的toString都是指向同一function */
// function CashCard(id) {
//     this.id = id;
//     this.money = 600;
//     this.toString = function() {
//         return this.id;
//     }
// }

// function toString() {
//     return this.money;
// }

// let cashcard1 = new CashCard('0100');
// let cashcard2 = new CashCard('0101');

// cashcard1.toString = toString;
// cashcard2.toString = toString;

// console.log(cashcard1.toString());
// console.log(cashcard2.toString());
// console.log(cashcard1.toString == cashcard2.toString);
/* Constructor */

/* Constructor */
function addMoney(mPlus) {
    if(this.money >= 0){
        this.money += mPlus;
    }else {
        console.log('Error');
    }
}

const cashcard1 = {
    id : '0100',
    money : 500,
    addMoney : addMoney
}
const cashcard2 = {
    id : '0100',
    money : 500,
    addMoney : addMoney
}
// console.log(cashcard1.addMoney === cashcard2.addMoney);

function CashCard(id,money){
    this.money = money;
    this.id = id;
}

// CashCard.prototype.toString = function () {
//     return 'ID:' + this.id + '\nmoney:' + this.money;
// }

cashcard3 = new CashCard('0102',1000);
// console.log(cashcard3.money);
// console.log(cashcard3.toString());

/* new 流程 */
//建立空的物件
//接下來這個物件的原型會被設定為"function prototype特性所參考的物件(所以每個用fucntion建構出來的Object都會有個Constructor特性)
//呼叫建構式並將物件設為this
let cashcard = {}
CashCard.call(cashcard,'0115',600);
// console.log(cashcard.id);