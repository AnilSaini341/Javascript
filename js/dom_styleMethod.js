var element;
document.querySelector("#about_section").style.backgroundColor="tan"; //set Background Color Property.
element=document.querySelector("#about_section").style.color; // returns the value of style color


document.querySelector("#about_section").className="w3-justify tan"; //SET classes by className.
element=document.querySelector("#about_section").className; // return classes by className as a string.

document.querySelector("#about_section").classList="w3-justify tan"; //SET classes by classList.

document.querySelector("#about_section").classList.add("tan","abc","xyz"); //add classes by classList.add Method.

document.querySelector("#about_section").classList.remove("xyz"); //remove classes by classList.remove Method.

element=document.querySelector("#about_section").classList; // return classes by className as array.



console.log(element);