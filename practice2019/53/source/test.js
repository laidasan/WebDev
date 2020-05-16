function arc() {
    const Person = {name : 'Joe'}
    // return 'Person'
    // return Person
}
arc.prototype.age = 30
let Joe = new arc()
console.log(Joe instanceof Object)
// let Joe = arc()
// console.log(Joe.age)

// function arc() {
//     const $li = document.cre
// }


// let li = new arc()

function Person(name) {
    this.name = name || 'Joe'

    this.prototype.setName = function(name) {this.name = name}
}
function Dad(name) {
    this.name = name || 'Joe'
}
function Son(name) {
    this.name = name || 'Joe'
}
Dad.prototype = Person.prototype
Son.prototype = Dad.prototype
let son = new Son('Cha')
console.log(Object.getPrototypeOf(son))
console.log(son instanceof Person)
console.log(son instanceof Dad)

console.log(Person.prototype === Dad.prototype === Son.prototype)
// Dad.prototype = JSON.parse(JSON.stringify(Person.prototype))
// Dad.prototype.constructor = Person

// console.log(Dad.prototype.constructor)
// console.log(Person.prototype.constructor)
// console.log(Person.prototype === Dad.prototype)
// console.log(Person.prototype.constructor === Dad.prototype.constructor)


// let dad = new Dad('Coco')
console.log(dad instanceof Person)
console.log(dad instanceof Dad)
// let mom = Object.create(dad)
// Object.setPrototypeOf(mom,{})
// console.log(Object.getPrototypeOf(mom))

// console.log(mom instanceof Person)
// console.log(dad instanceof Person)




// exports Object
// module.exports = Person
// require Person
// const Person = require('./Person.js')

// let dad = Person.constructor('Joe')




function Person(name) {
    this.name = name;
}
function Student(name) {
    Person.call(this,name);
}
function Child(name) {
    Student.call(this,name)
}
//studnet extand person
Student.prototype = new Person();
Student.prototype.constructor = Student;
Child.prototype = new Student()
Child.prototype.constructor = Child
delete Student.prototype.name;
delete Child.prototype.name

console.log(Person.prototype === Student.prototype)
console.log(Person.prototype === Child.prototype)

let s = new Student()
console.log(s)
console.log(Object.getPrototypeOf(s))



function Person (){}
function Dad(){}
// Dad.prototype = new Person();          //把Dad的prototype參考至Person的prototype
// Dad.prototype.constructor = Dad
Dad.prototype = Person.prototype
const dad = new Dad();                     //用Dad建構出一個新的物件
// console.log(dad instanceof Dad);           //true
// console.log(dad instanceof Person);        //true , dad的propotype === Dad的propotye , 而Dad的propotype為Person的實例 , 所以 dad insteadof Person 為 true
// console.log(Object.getPrototypeOf(dad) === Dad.prototype) // true
const person = new Person()
console.log(person)
// console.log(person instanceof Dad)
// console.log(person instanceof Person)
