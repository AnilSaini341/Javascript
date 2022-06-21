var element;

document.getElementById("about_section").addEventListener("click",addClasses);

function addClasses(){
    document.getElementById("about_section").classList.add("abc","xyz"); //add classes
    //document.getElementById("about_section").classList.remove("xyz"); // remove Class
    //document.getElementById("about_section").classList.toggle("xyz"); // remove Class
    
    //var clist=document.getElementById("about_section").classList.length; //get length of class
    //var clist=document.getElementById("about_section").classList.item(1); //get name of class index 1.

    var clist=document.getElementById("about_section").classList.contains("abc2"); //check class name exist or not and it returns true or false.

    console.log(clist);
}
//console.log(element);