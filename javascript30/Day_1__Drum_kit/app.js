(function () {
    function removeTransition(e) {
        if (e.propertyName !== 'transform') {
            return;
        } else {
            e.currentTarget.classList.remove('playing');
        }
    }
    function playSound(e) {


        function play(key, audio) {
            if (audio && key) {
                key.classList.add('playing');
                audio.currentTime = 0;
                audio.play();
            } else {
                return;
            }
        }


        if (e.keyCode) {
            const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
            const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
            play(key,audio);
            // if (audio && key) {
            //     key.classList.add('playing');
            //     audio.currentTime = 0;
            //     audio.play();
            // } else {
            //     return;
            // }
        } else {
            let data_key = Number(e.currentTarget.getAttribute('data-key'));
            const key = document.querySelector(`div[data-key="${data_key}"]`);
            const audio = document.querySelector(`audio[data-key="${data_key}"]`);
            play(key,audio);
            // key.classList.add('playing');
            // audio.currentTime = 0;
            // audio.play();
        }



        // if (!audio || !key) {
        //     return;
        // } else {
        //     key.classList.add('playing');
        //     audio.currentTime = 0;
        //     audio.play();
        // }


        // if(audio && key) {
        //     key.classList.add('playing');
        //     audio.currentTime = 0;
        //     audio.play();
        // }else {
        //     return;
        // }
    }



    // const keys = Array.from(document.querySelectorAll('.key'));
    const keys = document.querySelectorAll('.key');
    // for(let i = 0;i < keys.length;i++) {
    //     keys[i].addEventListener('transitionend',removeTransition,false);
    // }

    keys.forEach(function (key) {
        key.addEventListener('transitionend', removeTransition, false);
        key.addEventListener('click', playSound, false);
    })
    window.addEventListener('keydown', playSound);



})();