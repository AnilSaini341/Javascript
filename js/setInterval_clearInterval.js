var clrinterval= setInterval(perSecond,500);
var a= 0;
function perSecond(){
    a= a+10;
    if(a==200){
        clearInterval(clrinterval)
    }
    else{
        var target= document.getElementById("test");
        target.style.marginLeft=a+"px";
        target.style.width= a+"px";
    }
   
}