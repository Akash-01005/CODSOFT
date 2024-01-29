let tl =document.getElementsByClassName("tab-titles");
let con=document.getElementsByClassName("contents");
function show(tab){
    for(tls of tl){
        tls.classList.remove("active-title");
    }
    for(cons of con){
        cons.classList.remove("active");
    }
    event.currentTarget.classList.add("active-title");
    document.getElementById(tab).classList.add("active");
}
