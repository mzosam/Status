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
