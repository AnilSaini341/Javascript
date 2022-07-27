var clrTimeout= setTimeout(anim,5000);
function anim(){
    var target= document.getElementById("test");
        target.style.width= "500px";
}
function stopAnim(){
    clearTimeout(clrTimeout);
}