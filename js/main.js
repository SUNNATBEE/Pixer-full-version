// var elBtn = document.querySelector(".site-header__btn");



// elBtn.addEventListener("click" , function(){
    
    
// })
var elBurgerBtn = document.querySelector(".site-header__btn");
var elNav = document.querySelector(".sitenav")
var elBody = document.querySelector("body");

elBurgerBtn.addEventListener("click", function () {
    elBurgerBtn.closest(".header").classList.toggle("shownav");
    elBody.classList.toggle("scroll");
    elNav.classList.toggle("sitenav-block");
});