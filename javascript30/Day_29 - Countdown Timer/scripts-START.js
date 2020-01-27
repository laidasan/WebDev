;(function () {
    let timeout = null;
    const timerButtons = document.querySelectorAll('.timer__button');
    const display = document.querySelector('.display__time-left');
    const displayEnd = document.querySelector('.display__end-time');
    const custom = document.querySelector('#custom');
    const body = document.querySelector('body');
    function timer(seconds) {
        clearInterval(timeout);
        const now = Date.now();
        const then = now + seconds * 1000;
        displayTimeLeft(seconds);
        displayEndTime(then);
        
        // console.log('now',now,'\nthen',then);

        timeout = setInterval(() => {
            const secondLeft = Math.round((then - Date.now()) / 1000);
            if(timeout && secondLeft < 0) {
                clearInterval(timeout);
                return;
            }
            displayTimeLeft(secondLeft);
        },1000)
        
    }

    function displayTimeLeft(seconds) {
        const minute = Math.floor(seconds / 60);
        const second = seconds % 60;
        display.textContent = `${minute}:${second < 10 ? '0' : ''}${second}`;
        console.log('minute',minute,'\nsecond',second);
    }
    function displayEndTime(then) {
        const end = new Date(then);
        const hour = end.getHours();
        const minute = end.getMinutes();
        const second = end.getSeconds();
        console.log('hour',hour,'\nminute',minute);
        displayEnd.textContent = `back at ${hour}:${minute}:${second}`;
    }
    function timerHandle() {
        const secondLeft = parseInt(this.dataset.time);
        timer(secondLeft);
        // return timer(seconds);
    }
    // timerButtons[0].addEventListener('click',timerHandle);
    timerButtons.forEach((button) => {
        button.addEventListener('click',timerHandle);
    })

    custom.addEventListener('submit',(e) => {
        e.preventDefault();
        if(e.target.firstElementChild.value.trim() === '') {return;}
        const min = e.target.firstElementChild.value;
        console.log(typeof min);
        timer(min * 60);
        // e.target.reset();
        e.target.firstElementChild.textContent = '';
    })
    // custom.addEventListener('submit',function (e) {
    //     e.preventDefault();
    //     console.log(this)
    // })
})();