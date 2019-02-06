function showtime() {
    const date = new Date();
    // date.setHours(24);
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    minute = checktime(minute);
    secoud = checktime(second);
    let time = `${hour} : ${minute} : ${second}`;

    // console.log(hour);
    // let time = hour + ":" + minute + ":" + second;
    // document.getElementById("colock").innerText = time;
    // document.getElementById("colock").textContent = time;
    document.getElementById("colock").innerHTML = time;
    setTimeout(showtime,500);
}

function checktime(t) {
    if(t < 10) {
        t = "0" + t;
    }
    return(t);
}
showtime();
console.log(typeof timestr);