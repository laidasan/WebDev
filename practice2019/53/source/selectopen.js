; (() => {
    const $login = document.querySelector('.login')
    // const $selectList = document.querySelector('.selectList')
    // console.log($login,$selectList)


    function listClickHandler(target) {
        // change select value and open or close selectList
        target.parentElement.previousElementSibling.textContent = target.textContent
        target.parentElement.classList.toggle('open')
        target.parentElement.parentElement.classList.toggle('open')

        if(target.parentElement.className.includes('cityList')) {
            let locationList = document.querySelector('.locationList')
            locationList.innerHTML = ''
            let $city = document.querySelector('.city')
           
            let xhr = new XMLHttpRequest
            xhr.open('Get','../data/location.json')
            xhr.onload = function () {
                let data = JSON.parse(xhr.responseText)
                let index = data['city'].findIndex(cityName => cityName === $city.textContent)
                data['region'][index].forEach(location => {
                     // create list item
                    let listItem = document.createElement('li')
                    listItem.className = 'login__selectGroup__listItem'
                    listItem.textContent = location
                    // append item to list
                    locationList.appendChild(listItem)
                })
            }
            xhr.send()
        }
    }

    function selectClickHandler(target) {
        // console.log('select Span Click')
        // open or close selestList
        let $selectList = target.nextElementSibling
        target.parentElement.classList.toggle('open')
        $selectList.classList.toggle('open')

        
        
    }

    function submit(target) {
        return this
    }


    function loginClickHandler(e) {
        console.log('click')
        let target = e.target
        let active = ''

        // select => click p tag , open or close select window
        // selectList => after open select window , select email
        // login__btn => form submit button

        new RegExp(/select$/).test(target.className) ? active = 'select' : ''
        // target.matches('.select') ? active = 'select' : ''

        target.parentElement.className.includes('selectList') ? active = 'selectList' : ''
        target.className.includes('login__btn') ? active = 'submit' : ''
        console.log(active)

        switch (active) {
            // case 'email':
            case 'select':
                console.log(target)
                selectClickHandler(target)
                break;
            // case 'emailList':
            case 'selectList':
                listClickHandler(target)
                break;
            case 'submit':
                e.preventDefault()
                submit(target)
                break;
        }
    }



    function loadEvent() {
        $login.addEventListener('click', loginClickHandler)
    }

    loadEvent()
})()