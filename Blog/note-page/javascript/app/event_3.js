let container = document.querySelector('.container');
let input = document.querySelector('.text');
let textarea = document.querySelector("#testarea");
let submit = document.querySelector('.submit');
let form = document.querySelector('.form');

/*    mouse event    */
// mousedown
// mouseup
// mouseclick/dbclick
// mouseenter => mousemove => mouseleave

container.addEventListener('mousemove',function(){
    console.log('mousemove');
},false);
container.addEventListener('mousedown',function(){
    console.log('mouse.down');
},false)
container.addEventListener('mouseup',function(){
    console.log('mouseup');
})
container.addEventListener('dblclick',function(){
    console.log('dbclick');
})
container.addEventListener('mouseenter',function(){
    console.log('mouseenter');
})
container.addEventListener('mouseleave',function(){
    console.log('mouseleave');
})


/*    window    */
// scroll 當window或是指定元素的scroll被拉動的時候觸發

window.addEventListener('scroll',function(){
    container.textContent = window.scrollY;
})

window.addEventListener('resize',function(){
    console.log('resize');
})
window.onload = function(){
    console.log('onload');
}
//DOMContentLoaded 有別於 onload的地方是
//onload => 等整個網頁資源載入完成之後才會觸發(包括影片、照片等等)
//DOMContentLoaded => DOM結構被完整讀取與解析出來後就會觸發
//很像jQuery的 $(document).ready(handler)，也是等待HTML被解析完成之後觸發
document.addEventListener('DOMContentLoaded',function(){
    console.log('DOMContentLoaded');
})

/*    keyboard    */
// keydown/up
// keypress => 按著
//順序 keydown => keypress => keyup
input.addEventListener('keydown',function(){
    console.log('keydown');
})
input.addEventListener('keyup',function(){
    console.log('keyup');
})
input.addEventListener('keypress',function(){
    console.log('keypress');
})




/*    form    */
// input 當input、textarea以及帶有contenteditable元素內容被改變時觸發 
// change 跟input別於 => 同樣是被改變時觸發，但change是在目前焦點離開輸入框時才觸發(切記，一樣內容有改變時觸發，時機不同而已)
// submit 表單送出時觸發
// focus 當元素聚焦時觸發
// blur 當元素失去焦點時觸發
// change => blur
textarea.addEventListener('input',function(){
    console.log('input');
})
textarea.addEventListener('change',function(){
    console.log('change');
})
form.addEventListener('submit',function(e){
    e.preventDefault()
    console.log('submit');
})
textarea.addEventListener('focus',function(){
    console.log('focus');
})
textarea.addEventListener('blur',function(){
    console.log('blur');
})

/*    special    */
/*    Composition    */
// compositionstart / end / update

// start => 開始拼字時觸發
// update => 正在拼字、選字時觸發
// end => 拚完字時觸發(按下enter確認時)
textarea.addEventListener('compositionstart',function(){
    console.log('compositionstart');
})
textarea.addEventListener('compositionupdate',function(){
    console.log('compositionupdate');
})
textarea.addEventListener('compositionend',function(){
    console.log('compositionend');
})

/*    cumtom event    */
let myEvent = new Event('build');
let custom_event = new CustomEvent('build',{'detail': elem.dataset.time});
function eventHandler(e) {
    console.log('The time is: ' + e.detail);
}