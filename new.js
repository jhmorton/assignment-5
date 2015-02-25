var myCat = "Peaches"
var yourCat = "Billy"
// 1. Variables (can be cats)

alert("My Cat Is " + myCat +
	"\nYour Cat Is " + yourCat)
/* 2. This is an alert about our cats.
Alerts can be used in debugging to show errors, and the console can be used to run snippets of JavaScript
*/

/* 3. Data Types. Can includes a String ("My Cat Is " above), numbers, Boolean values, or undefined */


myArray = [ myCat , yourCat , "Thor"]
// 4. An Array of cats. Arrays can collect various data types.



if (myCat === yourCat) {
	console.log("we have the same cat.");
} else if (myCat != yourCat) {
	console.log("we have different cats.")
}

// 5. Testing can show the relationship between two variables. Here, we test if we have the same cat.
// 6. This statement shows if/else logic. Since myCat doesn't equal yourCat above, this should return "we have different cats.""

function Add(Number1, Number2) {
	return Number1 + Number2
}

console.log(Add(2, 4))

/* 7. Functions lay out the basic structure of an equation or argument.
This can later be 'called' to run the equation/argument with provided data.

*/



