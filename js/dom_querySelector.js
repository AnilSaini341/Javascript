var element;
element=document.querySelector(".w3-container"); // querySelector works with css elements and target first match element

//element=document.querySelectorAll(".w3-container")[1]; // querySelector works with css elements and returns array of all matched element
// for target single node use to index of array

element=document.querySelectorAll(".w3-container")[1].innerHTML; // querySelector works with css elements and returns array of all matched element and innerHTML returns HTML of targeted index
console.log(element);