;(function() {
    const whoImgBox = document.querySelectorAll('.who__img-box');
    const btnProcess = document.querySelectorAll('.btn--howProcess');
    let lastOpen = null;
    let thisOpen = null;
    function openimg(e) {
        lastOpen = thisOpen;
        thisOpen = e.currentTarget;
        if(lastOpen && lastOpen !== thisOpen){lastOpen.classList.remove('open')}
        e.currentTarget.classList.toggle('open');
    }
    

    function chooseProcess(e) {
        e.preventDefault();
        btnProcess.forEach((btn) => {
            btn.classList.remove('choose');
        })
        e.currentTarget.classList.add('choose');
    }



    whoImgBox.forEach((imgBox) => {
        imgBox.addEventListener('click',openimg);
    })
    btnProcess.forEach((btn) => {
        btn.addEventListener('click',chooseProcess);
    })

    

})();