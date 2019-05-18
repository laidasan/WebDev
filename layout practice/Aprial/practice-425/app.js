// {
// let body = document.querySelector('#body');
// body.innerHTML = '';

// let wrap = document.createElement('div');
// body.appendChild(wrap);
// console.log(body);

// let str = '<h1 class="heading-primary">Browser Window:</h1>' +
//           '<h2 class="heading-secondary">Width:' + window.innerWidth + '</h1>' + 
//           '<h2 class="heading-secondary">Height:' + window.innerHeight + '</h1>' + 
//           '<h1 class="heading-primary">Screen Window</h1>' + 
//           '<h2 class="heading-secondary">Width:' + screen.width+ '</h2>' + 
//           '<h2 class="heading-secondary">Height:' + screen.height + '</h2>'; 
//  let str = '<h1 class="heading-primary">Window:' + window.outerWidth + '</h1>'; 
// let div = body.firstChild;
// div.innerHTML = str;    
// console.log(div);
// }

// let nums = [43,22,34,55,61,122];
// nums.splice(1,4);
// nums.reverse();
// nums.sort();
// nums.sort(function(x,y) {
//     return x - y;
// });
// nums.sort(function(x,y) {
//     return y - x;
// })
// console.log(nums);
// console.log(nums.length);


{
    let href = window.location.href;
    let hrefsplit = href.split('/');
    let nowLocation = hrefsplit[hrefsplit.length - 1];

    let navLinks = document.querySelectorAll('.navigation__link');

    function getNowLink() {
        switch (nowLocation) {
            case 'index.html':
                navLinks[0].setAttribute('style','color:#ffffff;');
                break;
            case 'about.html':
                navLinks[1].setAttribute('style', 'color: #ffffff;');
                break;
        }
    }

    getNowLink();
}