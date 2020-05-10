; (() => {
    const $loginForget = document.querySelector('.login--forget')
    const $emailList = document.querySelector('.emailList')


    function listClickHandler(target) {
        console.log('List Click')
        console.log(target)
        target.parentElement.previousElementSibling.textContent = target.textContent
        target.parentElement.classList.toggle('open')
        target.parentElement.parentElement.classList.toggle('open')
    }

    function emailClickHandler(target) {
        console.log('Email Span Click')
        target.parentElement.classList.toggle('open')
        $emailList.classList.toggle('open')
    }

    function submit(target) {
        
    }


    function loginClickHandler(e) {
        let target = e.target
        let active = ''

        // if(target.matches('.email')) {
        //     active = 'email'
        // }else if(target.matches('.emailList')) {
        //     active = 'emailList'
        // }else if(target.matches('.login__btn--forget')) {
        //     active = 'submit'
        // }

        // email => click p tag , open or close select window
        // emailList => after open select window , select email
        // login__bnt--forget => form submit button
        target.className.includes('email') ? active = 'email' : ''
        target.parentElement.className.includes('emailList') ? active = 'emailList' : ''
        target.className.includes('login__btn--forget') ? active = 'submit' : ''

        switch (active) {
            case 'email':
                emailClickHandler(target)
                break;
            case 'emailList':
                listClickHandler(target)
                break;
            case 'submit':
                e.preventDefault()
                submit(target)
                break;
        }
    }



    function loadEvent() {
        $loginForget.addEventListener('click', loginClickHandler)
    }

    loadEvent()
})()