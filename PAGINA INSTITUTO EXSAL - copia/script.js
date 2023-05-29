var typed = new Typed(".textito", {
    strings: ["Name", "Address"
       , "Life" , "Phone", "Age"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
   })





const menuBtn = document.querySelector(".menu-btn")
const navigation = document.querySelector(".navigation")


menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
 })

 const btns = document.querySelectorAll(".nav-btn");
 const slides = document.querySelectorAll(".img-slide");
 const contents = document.querySelectorAll(".content");

 var sliderNav = function(manul){
    btns.forEach((btn) => {
        btn.classList.remove("active")
    })
 


    slides.forEach((slide) => {
        slide.classList.remove("active")
    });


    contents.forEach((content) => {
        content.classList.remove("active")
    });


    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");

    }


    btns.forEach((btn, i) => {
        btn.addEventListener("click", () => {
            sliderNav(i)
        });
   
 });
