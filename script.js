const themeBtn=document.querySelector(".theme")
const header=document.querySelector(".header")
const btn=document.querySelectorAll(".btn")
const body=document.body;
const mSec=document.querySelectorAll(".m-sec")
const mInfo=document.querySelector(".m-info")

themeBtn.addEventListener("click",()=>{
    header.classList.toggle("light")
    mInfo.classList.toggle("m-info-change")
    body.classList.toggle("body")
    mSec.forEach((sec)=>{
        sec.classList.toggle("mSec-change")
    });
    btn.forEach((button) => { 
        button.classList.toggle("btn-change");
    });
});

const fontChange=document.querySelector(".font-change")
