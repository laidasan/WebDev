// let val;

// val =document;
// val = document.all;
// val = document.all[1];
// // val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.domain;
// val = document.URL;
// console.log(val);
// console.log(typeof val);


// let scripts = document.scripts;
// let scriptarr = Array.from(scripts);
// scriptarr.forEach(function(script) {
//     console.log(script);
// })
// console.log(scripts);
// console.log(typeof scripts);

let element = document.getElementById('title');

//DOM SELECTOR 
console.log(document.getElementById('profile-card')  );
/* 這邊要注意，這邊會發現會有null的問題，明明已經命名了但找的時候還是return null*/
/* 那是因為就像城市進入點一行一行往下讀一樣，看看是不是script先跑了才跑到(我們要找的Element)*/
/* 像這裡在head裡面也有連接到這個js檔，但Element在head裡面的script之後，所以會找不到(return null)*/
console.log(document.getElementById('profile-card').id);
console.log(document.getElementById('profile-card').className);
document.getElementById('img').style.background = '#fff';
document.getElementById('img').style.color = 'black';
// console.log(document.querySelector('#title'));

//Change content
document.getElementById('title').textContent = 'Test';
element.innerText = 'Test2';
element.innerHTML = 'Test3';

// let eleinnerhtml = element.innerHTML;
// console.log(eleinnerhtml);
// console.log(typeof eleinnerhtml);

// element.innerHTML = `<span style="color: red;"> Practice </span>`;
// console.log(document.querySelector('#title').nodeName);
// console.log(document.querySelector('#title').className);
// // console.log(document.querySelector('.footer'));
// console.log(document.querySelector('div'));
// console.log(document.querySelector('td'));
// document.querySelector('td').style.color = 'red';
// document.querySelector('tr td').style.color = 'blue';
// document.querySelector('td:last-child').style.color = '#fff';
// console.log(document.querySelector('td:last-child'));
// console.log(document.querySelector('tr:last-child'));
// document.querySelector('tr:last-child').style.background = '#fff';
// console.log(document.querySelector('tr:nth-child(2)'));
// document.querySelector('tr:nth-child(2)').style.background = 'blue';
// console.log(document.querySelector('tr:nth-child(2) td'));
// document.querySelector('tr:nth-child(2) td').style.color = '#fff';
// document.querySelector('tr:nth-child(2) td:last-child').style.color = '#fff';
// document.querySelector('tr:nth-child(2) td:last-child').innerHTML = '#fff';


//GET BY ClassName
const items = document.getElementsByClassName('l-gray');
console.log(items);
console.log(typeof items);
console.log(items[2]);  
// items[0].style.color = '#fff';
const table = document.querySelector('table').getElementsByClassName('l-gray');
console.log(table);
console.log(typeof table);
console.log(table[0]);

//document.getElementsByTagName
const lis = document.getElementsByTagName('td');
console.log(lis);
console.log(typeof lis);
let lisarrs = Array.from(lis);
console.log(lisarrs);
// console.log(typeof lisarrs);    //OBJECT ARRAY is a OBJECT
console.log(lis[2]);  
// lis[2].style.color = '#fff';

// lis.reverse();
// lisarrs.reverse();  
console.log(lisarrs);

lisarrs.forEach(function(tx) {
    console.log(tx);
    console.log(tx.className);
})
// for(let i = 0;i < lisarrs.length;i++) {
//     console.log(lisarrs[i]);
//     console.log(lisarrs[i].className)
// }
lisarrs.forEach(function(tx,index) {
    console.log(tx.className);
    // tx.innerHTML = `${index} : td`;
})


//doucument.querySelectorAll
const tds = document.querySelectorAll('td.l-gray');
console.log(tds);
tds.forEach(function(td,index) {
    console.log(td.className);
    // td.innerHTML = `${index} : td.l-gray`
})  

const tdodd = document.querySelectorAll('td:nth-child(odd)');
const tdeven = document.querySelectorAll('td:nth-child(even)');

console.log(tdodd);
console.log(tdeven);

tdodd.forEach(function(td) {
    console.log(td);
    td.style.background = 'red';
});

for (let i = 0;i < tdeven.length;i++) {
    tdeven[i].style.background = 'blue';
};

