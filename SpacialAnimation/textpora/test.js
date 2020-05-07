const person = {
    firstname : 'Joe',
    lastname : 'Chen'
}

delete person['firstname']
console.log(person.hasOwnProperty('lastname'))