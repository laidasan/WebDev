

// window.onload = function () {
//     let deg;
//     let range = document.querySelector('#circle-control');
//     function rangeChage(e) {
//         deg = range.value;
//         circleChane(deg);
//         // target = e.target;
//         // if(range.getAttribute('id') === 'circle-control') {
//         //     deg = range.value;
//         //     circleChane(deg);
//         // }else {
//         //     console.log('what?');
//         // }
//     }
//     function circleChane(deg) {
//         let head = document.querySelector('head');
//         let lessdeg = "<style>" +
//         ".circle{width:50px;height:100px;margin-right:0;border-radius:0 50px 50px 0;}" +
//         ".circle::before {transform:rotate(" + (deg - 90) + "deg);}" +
//         ".circle::after {opacity:0;}" +
//         "</sylte>";
//         if(deg < 180) {
//             head.append(lessdeg);
//         }else {
//             console.log('not yet');
//         }
//     }
//     range.addEventListener('mousemove',rangeChage,false);
// }