// var x  = 10;
// function consoleinfo() {
//     var x = 20;
//     console.log(x);
// }

// consoleinfo();
// console.log(x);


// primitive
//composite


/*淺層複製*/
let ary_name = [0,1,2];
let ary_name_copy = ary_name;
let ary_name_copy_def = copyArr(ary_name);


console.log(ary_name_copy_def);
console.log(ary_name);
console.log(ary_name_copy);
console.log(ary_name_copy_def);
ary_name[0] = 'joe';
console.log(ary_name);
console.log(ary_name_copy);
console.log(ary_name_copy_def);


function copyArr(arr) {
    let res= [];
    for(let i = 0;i < arr.length;i++) {
        res[i] = arr[i];
    }
    return res;
}

let num = 10;
let person = {
    name: 'joe'
}
function changeValue(num) {
    num = 20;
}
function changeObject(obj) {
    obj = { name: 'shelly'};
}
changeObject(person);
console.log(person);
changeValue(num);
console.log(num);

console.log(0 % 3);


const nm = {
    toString : function () {
        return 3;
    },
    valueOf : function() {
        return 12;
    }
}
const nm2 = {
    toString : function() {
        return 3;
    }
    // valueOf : function() {
    //     return 15;
    // }
}

console.log(nm <= nm2);

for(var i = 0;i < 5;i++) {
    console.log(i);
}
var i = 30;
console.log(delete i);
console.log('var:' + i);

const y = 20;
// y = 30;
console.log(y);

Number.MAX_VALUE


let arr = [0,1,2,3];
console.log(arr[0]);
console.log(arr['3']);



let nul = null;
console.log(nul);


let coin1 = {value: 10};
coin1 = {value: 20};
console.log(coin1);
function change(obj){
    obj = {value: 30};
}
console.log(coin1);


const objj = {
    toString: function() {
        return '30';
    }
    // valueOf: function(){
    //     return this;
    // }
}
console.log(objj.valueOf());
// console.log(Number(undefined));
console.log('two' + objj);
console.log(1 + objj);
console.log(1 - objj);


console.log((function(x){
    f(x);
}).toString());

console.log(1 + {});
let date = new Date();
console.log(date.toString());
console.log(1 + date);    //use toString  
console.log(date -1);    //use valueOf

let number = 10;
console.log(number.toString());

console.log(-Infinity + -Infinity);

console.log(typeof ({}.valueOf()));
console.log({}.valueOf());


let obj = {
    toString: function() {
        return 'one';
    },
    valueOf: function() {
        return 30;
    }
}

console.log(1 + obj);
console.log({age: 5}.valueOf.call(obj));

console.log(1 + {});
console.log(1 - {});