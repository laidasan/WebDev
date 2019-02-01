let html;
html = `
<h1>Have a nice day</h1>
`;
let div1 = document.getElementById("div1");
// document.body.innerHTML = html;
// document.getElementById("div1").innerHTML = html;
div1.innerHTML = html;





const person = {
    Name: 'joe',
    age: 23,
    hobbies: ['music','sports'],
    address: {
        city: 'Nantou',
        state: 'FL',
    },
    getBirthYear: function() {
        return 1996;
    },
    Fullname: this.Name,
    getBirthYearUseAge: function() {
        // return 2019 - age;    //We can't use this way. We need a keyword 'this'.
        return 2019 - this.age
    }
}

let val;

val = person;
console.log(val);

//Get specific value
// val = person.Name;
val = person['Name'];
console.log(val);
val = person.age;
console.log(val);
val=person.address;
console.log(val);
val = person.getBirthYear();
console.log(val);
val = person.hobbies;
console.log(val);
val = person.hobbies[0];
console.log(val);
val = person.address.city;
console.log(val);
val = person.address['state'];
console.log(val);
val = person.getBirthYearUseAge();
console.log(val);

// const people = [
//     'joe','sara'
// ]
const people = [
    {name: 'joe',age: 23},
    {name: 'Dolphin',age: 22}
];
val = people;
console.log(val);
val = people[0];
console.log(val);

for(let i = 0;i <people.length;i++){
    console.log(people[i].name);
    console.log(people[i].age); 
}



//about time
const today = new Date();
val = today;
console.log(val);
console.log(typeof (val));
// val = today.toString();
// console.log(typeof val);

const birthday = new Date('8-15-1996');
val = birthday;
console.log(val);