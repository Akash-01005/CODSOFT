let disp=document.getElementById("display");
function clr(){
    disp.value="";
}
function cal(){
    try{
        disp.value=eval(disp.value);
    }
    catch(exception){
        disp.value="Invalid";
    }
}
function del(){
    disp.value=disp.value.slice(0,-1);
}
function show(n){
    disp.value+=n;
}