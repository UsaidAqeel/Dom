// Display all child elements of “main-content” element.
var maincontent = document.getElementById("main-content");
for(var i = 0 ; i < maincontent.childNodes.length ; i++){
    console.log(maincontent.childNodes[i]);
}
// Get all elements of class “render” and show their innerHTML
// in browser.
var clas  = document.querySelectorAll(".render");
for(var i = 0 ; i < clas.length ; i++){
document.write(clas[i].innerHTML+"<br />")
}


// Fill input value whose element id first-name using javascript.
var input1 = document.getElementById("first-name");
input1.value = "Usaid"

//  Repeat part iv for id ”last-name” and “email”.

var input2 = document.getElementById("last-name");
input2.value = "Aqeel"

var input2 = document.getElementById("email");
input2.value = "usiadaqeel@email.com"

// What is node type of element having id “form-content”.


var no = document.getElementById("form-content");
console.log(no.nodeType);

// ii. Show node type of element having id “lastName” and its child node.

var las = document.getElementById("lastName");
console.log(las.nodeType);
console.log(las.childNodes);


// Get First and last child of id “main-content”.

console.log(maincontent.firstChild);
console.log(maincontent.lastChild);

// Get next and previous siblings of id “lastName”.

console.log(las.nextSibling)
console.log(las.previousSibling)

// Get parent node and node type of element having id “email”

var email = document.getElementById("email");
console.log(email.parentNode);

