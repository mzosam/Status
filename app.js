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

    const targetDate = new Date("2026-03-01T00:00:00").getTime();
    const day = document.getElementById("day");
    const hour = document.getElementById("hour");
    const minute = document.getElementById("minute");
    const second = document.getElementById("second");
    
    const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;
    
    if (distance < 0) {
    clearInterval(countdown);
    return;
    }
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    day.innerHTML = days;
    hour.innerHTML = hours;
    minute.innerHTML = minutes;
    second.innerHTML = seconds;
    }, 1000);
