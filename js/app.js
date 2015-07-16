var array = [];

function todo() {
	var reply = prompt("Put in something.");
	array.push(reply);
	var node = document.createElement("LI");                 // Create a <li> node
	var textnode = document.createTextNode(reply);           // Create a text node
	node.appendChild(textnode);                              // Append the text to <li>
	document.getElementById("myList").appendChild(node);
}