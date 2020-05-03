;(() => {
    const $searchHeader = document.querySelector('.header__form__submit')
    const $searchCitySelect = document.querySelector('.cityActive__select')
    const $searchCitySelectOptionWrap = document.querySelector('.cityActive__selectOptions')

    function citySearch(city) {
        console.log(city)
        $searchCitySelect.textContent = city
        console.log($searchCitySelect)
    }


    $searchHeader.addEventListener('click',e => {
        e.preventDefault()
        console.log('click')
        
    })
    // $searchCitySelect.addEventListener('blur' , e => {
    //     console.log('blur')
    //     console.log(e.target.nextElementSibling)
    //     $searchCitySelectOptionWrap.click()
    //     e.target.nextElementSibling.classList.remove('open')
    // })
    $searchCitySelect.addEventListener('click',e => {
        e.preventDefault()
        console.log('click')
        let target = e.target

        if(target.matches('.cityActive__select')) {
            console.log('select click')
            let options = target.nextElementSibling
            // if browser support toggle
            options.classList.toggle('open')

            // options.style.setProperty('display','block')
        }
    })

    $searchCitySelectOptionWrap.addEventListener('click', e => {
        let target = e.target
        if(target.matches('.cityActive__selectOption')) {
            e.preventDefault()
            console.log('option click')
            citySearch(target.textContent)

            // if browser support toggle
            target.parentElement.classList.toggle('open')

            // target.parentElement.style.removeProperty('display')
        }
    })

})()