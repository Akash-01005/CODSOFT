let tl =document.getElementsByClassName("tab-titles");
let con=document.getElementsByClassName("contents");
function tab(tabs){
    for(tls of tl){
        tls.classList.remove("active-title");
    }
    for(cons of con){
        cons.classList.remove("active");
    }
    event.currentTarget.classList.add("active-title");
    document.getElementById(tabs).classList.add("active");
}
function show(){
    var m= document.getElementById("menu");
    m.style.right="0";
}
function hide(){
    var m= document.getElementById("menu");
    m.style.right="-200px";
}