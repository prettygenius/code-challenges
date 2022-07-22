//Write a function that takes an integer minutes and converts it to seconds.


//Examples Input Output
// convert(5) ➞ 300
// convert(3) ➞ 180
// convert(2) ➞ 120

//MySolution
function convert (minutes) {
	let seconds = minutes * 60
	return seconds
}
console.log(convert(2))