// NAVIGATION
const navSlide = () => {
    const burger =document.querySelector(".burger");
    const nav =document.querySelector(".items");

    burger.addEventListener("click",()=>{
        nav.classList.toggle("nav-active")
    });

}
navSlide();


// NAVIGATION END
