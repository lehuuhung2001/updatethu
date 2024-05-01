function run(str) {
	
	var discarda = str.replace(/a/gi,"4")
	var discarde = discarda.replace(/e/gi,"3")
	var discardi = discarde.replace(/i/gi,"1")
	var discardo = discardi.replace(/o/gi,"0")
	var discards = discardo.replace(/s/gi,"5")
	
	console.log(discards.trim())
}
const a = "   javascript is cool"
run(a)

