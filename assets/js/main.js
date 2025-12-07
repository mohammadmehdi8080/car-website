const toggleBtn = document.querySelector("#toggle")
const nav__list = document.querySelector(".nav__list")
const closeBtn = document.querySelector("#close")
toggleBtn.addEventListener("click" ,()=>{
    nav__list.classList.toggle("open")
    closeBtn.classList.toggle("open")
})

closeBtn.addEventListener("click" , ()=>{
    nav__list.classList.remove("open")
    closeBtn.classList.remove("open")
})