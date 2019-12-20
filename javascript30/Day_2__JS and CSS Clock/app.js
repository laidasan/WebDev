(function (){
    const secondHand = document.querySelector('.second');
    const hourHand = document.querySelector('.hour');
    const minuteHand = document.querySelector('.minute');
    function setDate() {

        const now = new Date();
        const secondsDeg = (now.getSeconds() / 60) * 360;
        const minuteDeg = (now.getMinutes() / 60) * 360;
        const hourDeg = ( (now.getHours() / 12) * 360 ) + (now.getMinutes() / 2);

        secondHand.setAttribute('style',`transform: rotate(${secondsDeg}deg);`);
        minuteHand.setAttribute('style',`transform: rotate(${minuteDeg}deg);`);
        hourHand.setAttribute('style',`transform: rotate(${hourDeg}deg);`);
        console.log(now.getSeconds());
        console.log(now.getMinutes());
        console.log(now.getHours());
    }

    setInterval(setDate,1000);
})();