let div_event = document.querySelector('.event');
console.log(window.scrollY);
// console.log(window.screenY);
// $('div.event').addClass('event-animation');
function show() {
    if(window.scrollY >= 300) {
        $('div.event').addClass('animation');
    }
    if(window.scrollY > 1000) {
        $('div.photo').addClass('animation');
    }
}
window.addEventListener('scroll',show,false);

