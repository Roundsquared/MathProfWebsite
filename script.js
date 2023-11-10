const themeBtn=document.querySelector(".theme")
const header=document.querySelector(".header")
const btn=document.querySelectorAll(".btn")

themeBtn.addEventListener("click",()=>{
    header.classList.toggle("light")
    btn.forEach((button) => { 
        button.classList.toggle("btn-change");
    });
});

const fontChange=document.querySelector(".font-change")
