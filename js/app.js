/*Ref for document.getElementById: 
	http://www.w3schools.com/jsref/met_document_getelementbyid.asp
	add class:
	http://stackoverflow.com/questions/19068771/javascript-add-class-to-an-element-in-a-specific-div
	http://stackoverflow.com/questions/2739667/add-another-class-to-a-div-with-javascript
	if statements:
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
	*/

console.log("Hello");

var count = 1

function flip(id) {
	var test = document.getElementById(id);
	console.log(test);
	/* count ++
	if (count == 2) {
		$(test).addClass('card');
	} */
	$(test).addClass('back');
}