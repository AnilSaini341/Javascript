var element;
//element=document.getElementById("main-title").innerText; // Returns the text of main-title id

//element=document.getElementById("about_section").innerHTML; // Returns the HTML of about_section id

//element=document.getElementById("about_section").getAttribute("class"); // Returns the value  of class of about_section id

//element=document.getElementById("about_section").getAttribute("id"); // Returns the value  of id of about_section id

//element=document.getElementById("about_section").getAttributeNode("id"); // Returns the name and value  of id of about_section id

//element=document.getElementById("about_section").attributes; // Returns the name of all attributes of id about_section 

//element=document.getElementById("about_section").attributes[1].name; // Returns the name of  attribute of id about_section 

//element=document.getElementById("about_section").attributes[1].value; // Returns the value of  attribute of id about_section 

//document.getElementById("main-title").innerText="Weekly Reports" // set the text of id main-title

//document.getElementById("main-title").innerHTML="<h2>Weekly Reports</h2>" // set the inner HTML of id main-title

document.getElementById("main-title").innerHTML="<h1>Weekly Reports</h1>" // set the inner HTML of id main-title

document.getElementById("main-title").setAttribute("style","border:4px solid #333;") // set style Attribute with value of id main-title

document.getElementById("main-title").removeAttribute("style") // Remove style Attribute of id main-title

console.log(element);