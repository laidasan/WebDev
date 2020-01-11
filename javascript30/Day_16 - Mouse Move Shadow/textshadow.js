(function() {
const hero = document.querySelector('.hero');
const text = document.querySelector('.text');
// let walk = Math.round((Math.random() * 500) + 1);
let walk = 300;


function shadow(e) {
    const {offsetWidth,offsetHeight} = hero;
    let {offsetX,offsetY} = e;
    const {offsetLeft,offsetTop} = e.target;
    if(this !== e.target) {
        // console.log('before',offsetX,offsetY);

        //計算鼠標再h1裡面時，鼠標再指個可見視窗中的座標，所以要加上offsetLeft,offsetTop
        offsetX = offsetX + offsetLeft;
        offsetY = offsetY + offsetTop;
        console.log('after',offsetX,offsetY);
    }
    // console.log(offsetX / offsetWidth)
    // console.log(offsetY / offsetHeight)

    //offestX(Y) / offsetWidth(Height)取得鼠標在可視視窗上的位置(百分比)
    //乘上walk位移量
    //減掉walk的目的是為了讓鼠標再可是視窗中正中間的時候陰影回到正中間
    //一半是因為鼠標再正中間的時候，offsetX(Y) / offsetWidth(Height)剛好等於 1/2，乘上我們的加大位移量 => 1/2 * walk
    //所以把1/2 walk減掉就可以變成0了
    const xwalk = Math.round( (offsetX /  offsetWidth * walk) - (walk / 2));
    const ywalk = Math.round( (offsetY /  offsetHeight * walk)- (walk / 2));
    console.log(xwalk,ywalk)
    text.style.setProperty('text-shadow',
    `
    ${xwalk}px ${ywalk}px 0 rgba(255,255,0,.75),
    ${-xwalk}px ${ywalk}px 0 rgba(255,0,255,.75),
    ${ywalk}px ${-xwalk}px 0 rgba(0,255,255,.75),
    ${-ywalk}px ${xwalk}px 0 rgba(0,0,255,.75)
    `
    )


}

hero.addEventListener('mousemove',shadow)
    
})()