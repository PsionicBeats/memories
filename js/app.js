/*Ref for document.getElementById: 
	http://www.w3schools.com/jsref/met_document_getelementbyid.asp
	add class:
	http://stackoverflow.com/questions/19068771/javascript-add-class-to-an-element-in-a-specific-div
	http://stackoverflow.com/questions/2739667/add-another-class-to-a-div-with-javascript
	if statements:
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
	*/

console.log("Hello");

/*var count = 1

function flip(id) {
	var test = document.getElementById(id);
	console.log(test);
	 count ++
	if (count == 2) {
		$(test).addClass('card');
	} 
	$(test).addClass('back');
}*/


function turnCard (card){
	document.getElementById(card).style.transform = 'rotateY(180deg)';

if (document.getElementById(card).style.transform === 'rotateY(180deg)'){
	setTimeout(function(){
		document.getElementById(card).style.transform = 'rotateY(0deg)';
		}, 1000);
	}
}

var clickCount = 0;
var clickMax = 2;

if (clickCount == clickMax) {
	
}