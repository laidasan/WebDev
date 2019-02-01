const name = 'joe';
const age = 32;
const str = 'Hello! I am ' + name;
const numbers = [];
let html;

console.log(str);
// console.log(typeof(numbers));

// without template  strings(ES5)
// html = '<ul>' +
//     '<li>Name:' + name + '</li>' + 
//     '<ul>';

// template strings(ES6) use ` `  not ' '
html = `
<ul>
<li> Nmae: ${name} </li>
<li> Nmae: ${age > 30 ? 'Over 30' : 'under 30' } </li>
</ul>
`;

document.body.innerHTML = html;

//creage arrays
const numbers2 = [43,2,34,54];
const numbers3 = new Array(36,1,4,6,3);
const strs = ['apple', 'bunana','nice picture','another voice'];
const numbers5 = [22,'apple',true,false,undefined,null,{a:1,b:2},new Date()];
let val;
console.log(val);
val = Array.isArray(numbers);
console.log(numbers5);
console.log(typeof(numbers5));
console.log(val)
val = numbers2[2];
console.log(val);
val = numbers2.indexOf(34);
console.log(val);
val = numbers2.indexOf(50);
console.log(val);
console.log(typeof(val));
console.log(val);
console.log(typeof(val));
// console.log(typeof(val));
// numbers2 = [33,2,5];
// console.log(val);

//add on to end
numbers2.push(250);
console.log(numbers2);
//add on to front
numbers2.unshift(100);
console.log(numbers2);
// take off from end
numbers2.pop();
console.log(numbers2);
//take off from front
numbers2.shift();
console.log(numbers2);
//splice values
// numbers2.splice(0,3);
console.log(numbers2);
//splice values
numbers2.splice(2);
console.log(numbers2);

//reverse
numbers2.reverse();
console.log(numbers2);
//concattenate
val = numbers2.concat(numbers3);
console.log(val);

//sorttin arrays
val = strs.sort();
console.log(val);

//sortting number
val = numbers2.sort();
console.log(val);
// you will find something you don't want use numbers2.sort().
// this way will is better.
val = numbers2.concat(numbers3).sort(function(a,b) {
    return a - b;
});
console.log(val);
    val = numbers2.concat(numbers3).sort(function(a,b) {
        return b - a;
    });
console.log(val);

//find
function under20(num){
    return num < 20;
}
function up30(num) {
    return num >30
;}
val = numbers2.concat(numbers3).sort(function(a,b){return a - b}).find(up30);
console.log(numbers2.concat(numbers3).sort(function(a,b){return a - b}));
console.log(val);
