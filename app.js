// var btn = document.getElementsBy("menu-btn")
var btn = document.getElementById("menu-btn")
var sideNav = document.getElementById("side-nav")
var menu = document.getElementById("menu-image")

sideNav.style.right = "-250px";
sideNav.style.transition = "0s";


btn.onclick = function (){
    console.log("i entered")
    if (sideNav.style.right == "-250px"){
        sideNav.style.display = "block";
        sideNav.style.right = "0";
        sideNav.style.transition = "0.3s";
        menu.src = "images/close.png"
    }
    else{
        sideNav.style.right = "-250px";
        menu.src = "images/menu.png"
    }
};

var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true
});


// btn.onclick = function (){
//     console.log("i entered")
//     if (sideNav.style.right == "-250px"){

//         sideNav.style.right = "0";
//         // menu.src = "images/menu.png"
//     }
//     else{
//         sideNav.style.right = "-250px";
//     }
// }
