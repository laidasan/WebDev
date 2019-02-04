let val;
const today = new Date();
// val = today.toString();
val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();   /*get milltime*/
console.log(typeof val);
console.log(val);
const birth = new Date('8-15-1996 12:00:00');  /*Month day year*/
birth.setMonth(11);
val = birth;
console.log(val);
// val =birth;
// console.log(birth);