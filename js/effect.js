// window.onscroll = function() {
//     myFunction();
// }

// get nav
// let navbar = document.querySelector(".navBar");

// let sticky = navbar.offsetTop;

// function myFunction() {
//     if (window.scroll >= 180) {
//         navbar.classList.add("sticky")
//     } else {
//         navbar.classList.remove("sticky")
//     }
// }
// console.log(navbar.offsetHeight)

window.addEventListener("scroll", function() {
    var navBar = document.querySelector(".navBar");
    navBar.classList.toggle("sticky", window.scrollY > 530);
})



// fetch snow HTML content