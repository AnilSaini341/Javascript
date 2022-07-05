var element;


var target =document.getElementById("text");
element= "<h2>This is insetAdjacentHTML Method</h2>"

target.insertAdjacentHTML("afterend",element); //insertAdjacentHTML Method create and add HTML tag. (beforebegin beforeend afterbegin afterend positions of add HTML)


//insertAdjacentElement  -create and add html tag only
//insertAdjacentText -create and add text only
//insertAdjacentHTML -create and add HTML TAG and text 