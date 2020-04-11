let funparabola = function (element,target,options) {
    let defult = {
        speed: 166.67,
        curvature: 0.001,
        progress: function (){return this},
        complete: function () {return this}
    }

    let params = { } , option =  options || {}

    Object.keys(defult).forEach(key => {
        params[key] = option[key] || defult[key]
    })
    
    let exports = {
        mark: function () {return this},
        position: function () {return this},
        move: function (){return this},
        init: function() {return this}
    }




    let a = params.curvature , b = 0 , c = 0

    let isFlagMove = false
    if(element && target) {
        let centerElement = {} , centerTarget = {}
        let coordElement = {} , coordTarget = {}
        

        exports.position  = function() {
            if(isFlagMove) {return this}
            let [scrollTop,scrollLeft] = document.documentElement.scrollLeft ? 
            [document.documentElement.scrollLeft,document.documentElement.scrollTop] : [document.body.scrollLeft,document.body.scrollTop]


            // init 初始化位置
            element.style.setProperty('transform','translate(0,0)')


            let [elementRectLeft,elementRectTop] = [element.getBoundingClientRect().left , element.getBoundingClientRect().top]
            let [elementRectRight,elementRectBottom] = [element.getBoundingClientRect().right , element.getBoundingClientRect().bottom]
            let [targetRectLeft,targetRectTop] = [target.getBoundingClientRect().left , target.getBoundingClientRect().top]
            let [targetRectRight,targetRectBottom] = [target.getBoundingClientRect().right , target.getBoundingClientRect().bottom]


            // 絕對位置
            centerElement = {
                x : elementRectLeft + (elementRectRight - elementRectLeft) / 2 + scrollLeft,
                y : elementRectTop + (elementRectBottom - elementRectTop) / 2 + scrollTop
            }
            
            centerTarget = {
                x : targetRectLeft + (targetRectRight - targetRectLeft) / 2 + scrollLeft,
                y : targetRectTop + (targetRectBottom - targetRectTop) / 2 + scrollTop
            }


            //相對位置，以element 為(0,0)
            coordElement = {
                x : 0,
                y : 0
            }
            coordTarget = {
                x : -(centerElement.x - centerTarget.x),
                y : -(centerElement.y - centerTarget.y)
            }


            b = (coordTarget.y - a * coordTarget.x * coordTarget.x) / coordTarget.x

            return this;
        }

        exports.move = function() {
            if(isFlagMove) return this

            let count = 0
            let startx = 0 , rate = coordTarget.x > 0 ? 1 : -1

            function step() {
                console.log('animation move')
                let tangent = 2 * a * startx + b

                startx = startx + rate * Math.sqrt(params.speed / (tangent * tangent) + 1)

                //防超出
                if( (rate === 1 && startx > coordTarget.x) || (rate === -1 && startx < coordTarget.x)) {
                    startx = coordTarget.x
                }

                let x = startx , y = a * x * x + b * x
                console.log(x,y)
                element.style.setProperty('transform',`translate(${x}px,${y}px)`)

                if(startx !== coordTarget.x) {
                    console.log('continue move')
                    params.progress()
                    window.requestAnimationFrame(step)
                }else {
                    console.log('complete')
                    params.complete()
                    isFlagMove = false
                }  
                // if(count < 1) {
                //     count++
                //     window.requestAnimationFrame(step)
                // }
            }
            window.requestAnimationFrame(step)
            isFlagMove = true

            return this
        }

        exports.init = function () {
            this.position().move()
            return this
        }
    }
    return exports
}


