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

const Days = document.getElementById("days");
const Hours = document.getElementById("hours");
const Minutes = document.getElementById("minutes");
const Seconds = document.getElementById("seconds");

const tagertDate = new Date("March 1 2026 00:00:00").getTime();

function timer(){
    const currentDate = new Date().getTime();
    const distance = tagertDate - currentDate;

    const Days = Math.floor(distance / 1000 / 60 / 60 / 24);
    const Hours = Math.floor(distance / 1000 / 60 / 60) % 24;
    const Minutes = Math.floor(distance / 1000 / 60) % 60;
    const Seconds = Math.floor(distance / 1000) % 60;

    Days.innerHTML = days;
    Hours.innerHTML = hours;
    Minutes.innerHTML = minutes;
    Seconds.innerHTML = seconds;
}