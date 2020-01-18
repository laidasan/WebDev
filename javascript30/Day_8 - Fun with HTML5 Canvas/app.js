;(function () {
    const canvas = document.querySelector('#draw');
    let {offsetWidth,offsetHeight} = canvas;
    let ctx = canvas.getContext('2d');


    let isdrawing = false;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.lineWidth = 60;
    let offsetX = 0;
    let offsetY = 0;
    let hue = 0;
    let direction = true;

    function drawing(e) {
        if(isdrawing) {
            ctx.strokeStyle = `hsl(${hue},100%,50%)`;
            ctx.beginPath();
            ctx.moveTo(offsetX,offsetY);
            ctx.lineTo(offsetX,offsetY);
            ctx.stroke();

            [offsetX,offsetY] = [e.offsetX,e.offsetY];
            hue++;
            if(hue >= 360) {
                hue = 0;
            }

            console.log(ctx.lineWidth);
            console.log(hue);
            if(ctx.lineWidth >=60 || ctx.lineWidth <= 1) {
                direction = !direction;
            }

            if(direction) {
                ctx.lineWidth++;
            }else {
                ctx.lineWidth--;
            }
        }else {
            return;
        }
    }

    canvas.addEventListener('mousedown',(e) => {
        isdrawing = true;
        [offsetX,offsetY] = [e.offsetX,e.offsetY];
    });



    canvas.addEventListener('mousemove',drawing);
    canvas.addEventListener('mouseup',() => {
        isdrawing = false;
    });
    canvas.addEventListener('mouseleave',() => {
        isdrawing = false;
    });


})();