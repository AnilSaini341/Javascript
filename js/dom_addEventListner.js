var element;

// Method 1 call functions on events

document.querySelector("#main-title").onclick= abc;  
function abc(){
    document.querySelector("#main-title").style.backgroundColor="green";
}

// Method 2 Add Event Listner important beacause we add multiple events using it

document.getElementById("about_section").addEventListener("mouseleave",bgcolorChange);

document.getElementById("about_section").addEventListener("click",nobgcolorChange);

function bgcolorChange(){
    document.getElementById("about_section").style.backgroundColor="green";
} 

document.getElementById("main-title").addEventListener("mouseenter",function(){
    this.style.border="2px solid red";
});  

function nobgcolorChange(){
    document.getElementById("about_section").removeEventListener("mouseleave",bgcolorChange);
}

//console.log(element);