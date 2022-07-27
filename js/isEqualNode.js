var element;

var list1 = document.getElementById("list-1").firstChild;
var list2 = document.getElementById("list-2").firstChild;

var match=list1.isEqualNode(list2); //isEqualNode compare between two values and return true or false if match is success (nodetype,nodetype value, node attaributes,node value )


console.log(match);

