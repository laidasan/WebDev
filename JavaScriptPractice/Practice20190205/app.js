const id = 100;
console.log(id);

if (id == 100) {
    console.log('Correct');
}else {
    console.log('Incorrect');
}
if (id != 100) {
    console.log('Incorrect');
}else {
    console.log('Correct');
}
if (id )

// Equal to Value & Type   
if(id === 100) {
    console.log('Correct');
} else {
    console.log('Incorrect');
}
if(id !== 100) {
    console.log('Correct');
} else {
    console.log('Incorrect');
}

//Test id is undefined
if(typeof id !== 'undefined') {
    console.log(`The id is ${id}`)
}else {
    console.log('No id  ');
}

const color = 'red';

if (color === 'red') {
    console.log('color is red');
} else if (color === blue) {
    console.log('color is blue');
} else {
    console.log('color');
}

const name = 'Joe';
const age = 20;

// AND &&
if(age > 15 &&　age <=20) {
    console.log(`Joe is a ${age}  teenager`);
}
// OR ||
if (name === 'Joe' || name === 'Steve' ) {
    console.log(`My name is ${name}`);
}

console.log(id === 100 ? 'correct' : 'Incorrect');


//Switch 
const font_size = 27;
switch(font_size) {
    case 18:
    console.log(`font-size is ${font_size}`);
    break;
    case 27:
    console.log(`font-size is ${font_size}`);
    break;
    default:
    console.log('nothing');
    break;
}

//FUCTION
function call() {
    console.log('Call me');
}
call();
function greet(firstname) {
    if (typeof firstname === 'undefined') {firstname = 'Joe'}
    return `Hello ${firstname}`;
}
console.log(greet());
// console.log(greet('Joe'));

//FUCTION　EXPRESIONS
const square = function(x) {
    return x * x;
};

console.log(square(5));


(function(){
    console.log('What');
})  ();

(function(myname){
    console.log(`love you ${myname}`);
})  ('Dolpnin');


const todo = {
    add: function() {
        console.log('add someting...');
    }
}

todo.delete = function() {
    console.log('delete something');
}

todo.add();
todo.delete();


//Loop 
for(let i =0;i <11;i++) {
    if (i === 5) {break;}
    console.log(i);
}
let i = 0;
while(i < 10) {
    console.log(i);
    i++;
}

let x = 100;
do {
    console.log(x);
    x++;
}while(x < 10);

const cars = ['Toyata',"Ford",'Chevy','Honda'];

// for (let i =0;i < cars.length;i++) {
//     console.log(cars[i]);
// }


cars.forEach(function(car){
    console.log(car);
});
cars.forEach(function(car,index){
    console.log(`${index} : ${car}`);
});
cars.forEach(function(car,index,array){
    // console.log(`${index} : ${car}`);
    console.log(array);
})

//Map
const users = [
    {id:1,name:'Joe'},
    {id:2,name:'John'},
    {id:3,name:'Josh'},  
];
const names = users.map(function(user) {
    return user.name;
});
console.log(names);


//For In
const user = {
    Name : 'Joe',
    age : 40
}
for(let x in user) {
    // console.log(x);
    console.log(`${x} : ${user[x]}`);
}