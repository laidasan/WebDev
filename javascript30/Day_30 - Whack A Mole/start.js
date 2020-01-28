; (function () {
    const holes = document.querySelectorAll('.hole');
    const scoreBoard = document.querySelector('.score');
    const moles = document.querySelectorAll('.mole');
    const startButton = document.querySelector('button');
    let speed = 500;
    let timeup = false;
    let gameing = false;
    let timer = null;
    let moleMax = 0;
    let score = 0;
    let isUp = Array.from(holes).map(() => 0);
    let timeoutsUp = Array.from(holes).map(() => null);
    let timeoutsDown = Array.from(holes).map(() => null);

    function getRandomTime(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function findHole() {
        let randomIndex = Math.floor(Math.random() * holes.length);
        return [holes[randomIndex],randomIndex];
    }
    function peep() {
        timer = setInterval(() => {
            const find = findHole();
            const hole = find[0];
            const holeIndex = find[1];
            console.log(isUp);
            // console.log(hole,holeIndex)
                if (isUp[holeIndex] === 0 && moleMax <= 3) {
                    let randomTime = getRandomTime(10, 40);
                    isUp[holeIndex] = 1;
                    moleMax++;
                    console.log('up',moleMax,'up',isUp[holeIndex]);
                    timeoutsUp[holeIndex] = setTimeout(() => {
                        hole.classList.add('up');
                        console.log('up');
                        timeoutsDown[holeIndex] = setTimeout(() => {
                            isUp[holeIndex] = 0;
                            moleMax--;
                            hole.classList.remove('up');
                            console.log('Down',moleMax,'Down',isUp[holeIndex]);
                            console.log('down');
                        }, 60 * randomTime);
                    }, 50 * randomTime)
                }
        }, speed);
    }


    function hitMole(index) {
        score++;
        moleMax--;
        isUp[index] = 0;
        console.log('click', score);
        console.log(moleMax);
        scoreBoard.textContent = score;
        clearTimeout(timeoutsDown[index]);
        clearTimeout(timeoutsUp[index]);
        holes[index].classList.remove('up');
    }

    function resetGame() {
        console.log('reset');
        timeup = false;
        gameing = true;
        moleMax = 0;
        score = 0;
        scoreBoard.textContent = 0;
        isUp = isUp.map(() => 0);
        console.log('reset',isUp)
        holes.forEach((hole) => {
            hole.classList.remove('up');
        })
    }
    function startGame(e) {
        if (gameing) { return; }
        e.preventDefault();
        resetGame();
        peep();
        setTimeout(() => {
            timeup = true;
            gameing = false;
            timeoutsUp.forEach((timeout) => {
                if (timeout) {
                    console.log('clear timeout');
                    clearTimeout(timeout);
                }
            })
            timeoutsDown.forEach((timeout) => {
                if (timeout) {
                    console.log('clear timeout');
                    clearTimeout(timeout);
                }
            })
            console.log('timeover');
            console.log(timeup)
            clearInterval(timer);
        }, 15000);
    }




    
    startButton.addEventListener('click', startGame);
    moles.forEach((mole,index) => {
        mole.addEventListener('click',function(e) {if(!timeup){hitMole(index);} });
    })

})()



