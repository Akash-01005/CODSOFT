let menu=document.getElementById("menu");
let cl=document.getElementById("close");
menu.addEventListener("click",()=>{
    let men=document.getElementById("nav");
    men.style.display="block";
    menu.style.display="none";
    cl.style.display="block";
    let v=document.querySelector(".mob-nav");
    v.classList.remove(".animation-add");
});
cl.addEventListener("click",()=>{
    let lc = document.getElementById("nav");
    lc.style.display="none";
    cl.style.display="none";
    menu.style.display="block";
    let v=document.querySelector(".mob-nav");
    v.classList.add(".animation-add");
});
