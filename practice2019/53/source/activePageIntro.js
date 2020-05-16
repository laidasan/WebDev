// ; (() => {
//     const $aboutList = document.querySelector('.activePageAbout__desTags')
//     const $aboutListItem = $aboutList.querySelectorAll('a')
//     const $aboutDes = document.querySelectorAll('.activePage__paragraph')

//     // console.log($aboutDes)
//     function showDescrip(e) {
//         e.preventDefault()
//         let target = e.target
//         if(target.matches('a')) {
//             let index = target.dataset['index']
//             $aboutDes[0].parentElement.style.setProperty('display','block')
//             $aboutDes.forEach(p => {
//                 p.style.setProperty('display','none')
//             })
//             $aboutDes[index].style.setProperty('display','block')
//             $aboutListItem.forEach(a => a.classList.remove('choose'))
//             target.classList.add('choose')
//         }


//     }

//     function loadEvent() {
//         $aboutList.addEventListener('click',e => showDescrip(e))
//     }
//     loadEvent()
// })()



;(() => {
    function activePageIntro() {}
    activePageIntro.prototype.getData = function(document) {
        this['$aboutList'] = typeof document === 'object' && document.querySelector ? document.querySelector('.activePageAbout__desTags') : null
        this['$aboutListItem'] = this['$aboutList'] ? this['$aboutList'].querySelectorAll('a') : null
        this['$aboutDes'] = typeof document === 'object' && document.querySelector ? document.querySelectorAll('.activePage__paragraph') : null
        return this
    }
    activePageIntro.prototype.showDescrip = function(e,aboutListItem,aboutDes) {
        e.preventDefault()
        let target = e.target
        if (target.matches('a')) {
            let index = target.dataset['index']
            aboutDes[0].parentElement.style.setProperty('display', 'block')
            aboutDes.forEach(p => {
                p.style.setProperty('display', 'none')
            })
            aboutDes[index].style.setProperty('display', 'block')
            aboutListItem.forEach(a => a.classList.remove('choose'))
            target.classList.add('choose')
        }
    }
    activePageIntro.prototype.loadEvent = function () {
        this['$aboutList'].addEventListener('click',e => this.showDescrip(e,this.$aboutListItem,this.$aboutDes))
        return this
    }
    activePageIntro.prototype.init = function(document) {
        if(document && typeof document === 'object')
        this.getData(document).loadEvent()

        return this
    }

    const activeIntro = new activePageIntro()
    activeIntro.init(document)
})()


