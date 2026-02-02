function checkPin(){
    const pin = document.getElementById("pin").value;

    const pinPages = {
        "123": "First.html",
        "456": "Second.html",
        "789": "Third.html"
    };

    if(pinPages[pin]){
        window.location.href = pinPages[pin];
    }
    else{
        alert("Page can't be found");
    }
}

let Days = document.getElementById("days");
let Hours = document.getElementById("hours");
let Minutes = document.getElementById("minutes");
let Seconds = document.getElementById("seconds");

let tagertDate = new Date("March 1 2026 00:00:00").getTime();

function timer(){
    let currentDate = new Date().getTime();
    let distance = tagertDate - currentDate;

    let Days = Math.floor(distance / 1000 / 60 / 60 / 24);
    let Hours = Math.floor(distance / 1000 / 60 / 60) % 24;
    let Minutes = Math.floor(distance / 1000 / 60) % 60;
    let Seconds = Math.floor(distance / 1000) % 60;

    Days.innerHTML = days;
    Hours.innerHTML = hours;
    Minutes.innerHTML = minutes;
    Seconds.innerHTML = seconds;
}