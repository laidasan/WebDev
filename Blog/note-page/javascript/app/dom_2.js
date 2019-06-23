/* <script> */
let title = document.querySelector('.heading-primary');
let title_2 = title.nextElementSibling;
title.textContent = 'Hello!World!';

// console.log(document.querySelector('h1') );
// console.log(document.querySelector('#title-h1'));
// console.log(title);



/* selector */
// getElement //
document.getElementById('title-h1');
document.getElementsByTagName('h1');
document.getElementsByClassName('heading-primary');

document.querySelector('.heading-primary');
document.querySelectorAll('h1');

// console.log(
//     document.querySelector('body').childNodes
// );

// getElementBy***s querySelectorAll //
let titles_getBy = document.getElementsByTagName('h1');
let titles_query = document.querySelectorAll('.heading-primary');
// titles_query.forEach(function(Element) {
//     console.log(Element);
// })
// console.log(titles_getBy);
// console.log(titles_query);
// console.log(titles_getBy instanceof Array);
// console.log(titles_query instanceof Array);
// console.log(titles_getBy[0]);
// console.log(titles_query[0]);

/*  childNodes */
let body = document.querySelector('body');
// if(body.hasChildNodes) {
//     for(let i = 0;i < body.childNodes.length;i++) {
//         console.log(body.childNodes[i]);
//     }
// }



/* parentNode */
title.parentNode;
// console.log(title.parentElement );

/* firstchild */
title.firstChild;
title.firstElementChild;

/* lastchild */
title.lastChild;
title.lastElementChild;

/* previousSibling */
title_2.previousSibling;
title_2.previousElementSibling;

/* HTMLCollecion v.s querySelectorAll */
let body_Coll = document.getElementsByTagName('h1');
let body_Selector = document.querySelectorAll('h1');
console.log(body_Coll);
console.log(body_Selector);

body.innerHTML = '';  //清空body