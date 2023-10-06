function myFunction() {
    document.getElementById("demo").style.fontSize = "25px";
    document.getElementById("demo").style.color = "red";
    document.getElementById("demo").style.backgroundColor = "yellow";
}

function light(sw) {
    var pic;
    if (sw ==0) {
        pic = "earth3.gif"
    } else {
        pic = "earth2.gif"
    }
    document.getElementById('myImage').src = pic;
}