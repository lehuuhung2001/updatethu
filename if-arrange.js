// function run (a,b,c,d){
//     var value, value_1, value_2, value_3
// 	var sorted_str 
//     if (( a >= b) && (a >= c) && (a >= d)){
//         value = a
// 		value_1 = max_3(b,c,d)
// 		if(value_1 == b){
// 			value_2 = max_2(c,d)
// 			if (value_2 == c){
// 				value_3 = d
// 			} else if (value_2 == d) {
// 				value_3 = c
// 			}
// 		}
// 		else if(value_1 == c){
// 			value_2 = max_2(b,d)
// 			if (value_2 == b){
// 				value_3 = d
// 			} else if (value_2 == d) {
// 				value_3 = b
// 			}
// 		}
// 		else if(value_1 == d){
// 			value_2 = max_2(b,c)
// 			if (value_2 == b){
// 				value_3 = c
// 			} else if (value_2 == c) {
// 				value_3 = b
// 			}
// 		}
//     }
//     else if (( b >= a) && (b >= c) && (b >= d)){
//         value = b
// 		value_1 = max_3(a,c,d)
// 		if(value_1 == a){
// 			value_2 = max_2(c,d)
// 			if (value_2 == c){
// 				value_3 = d
// 			} else if (value_2 == d) {
// 				value_3 = c
// 			}
// 		}
// 		else if(value_1 == c){
// 			value_2 = max_2(a,d)
// 			if (value_2 == a){
// 				value_3 = d
// 			} else if (value_2 == d) {
// 				value_3 = a
// 			}
// 		}
// 		else if(value_1 == d){
// 			value_2 = max_2(a,c)
// 			if (value_2 == a){
// 				value_3 = c
// 			} else if (value_2 == c) {
// 				value_3 = a
// 			}
// 		}
//     }
//     else if (( c >= a) && (c >= b) && (c >= d)){
//         value = c
// 		value_1 = max_3(a,b,d)
// 		if(value_1 == a){
// 			value_2 = max_2(b,d)
// 			if (value_2 == b){
// 				value_3 = d
// 			} else if (value_2 == d) {
// 				value_3 = b
// 			}
// 		}
// 		else if(value_1 == b){
// 			value_2 = max_2(a,d)
// 			if (value_2 == a){
// 				value_3 = d
// 			} else if (value_2 == d) {
// 				value_3 = a
// 			}
// 		}
// 		else if(value_1 == d){
// 			value_2 = max_2(a,b)
// 			if (value_2 == a){
// 				value_3 = b
// 			} else if (value_2 == b) {
// 				value_3 = a
// 			}
// 		}
//     }
//     else if (( d >= b) && (d >= c) && (d >= a)){
//         value = d
// 		value_1 = max_3(a,b,c)
// 		if(value_1 == a){
// 			value_2 = max_2(b,c)
// 			if (value_2 == b){
// 				value_3 = c
// 			} else if (value_2 == c) {
// 				value_3 = b
// 			}
// 		}
// 		else if(value_1 == b){
// 			value_2 = max_2(a,c)
// 			if (value_2 == a){
// 				value_3 = c
// 			} else if (value_2 == c) {
// 				value_3 = a
// 			}
// 		}
// 		else if(value_1 == c){
// 			value_2 = max_2(a,b)
// 			if (value_2 == a){
// 				value_3 = b
// 			} else if (value_2 == b) {
// 				value_3 = a
// 			}
// 		}
//     }
// 	sorted_str = value + "," + value_1 + "," + value_2 + "," + value_3
// 	console.log(sorted_str,typeof sorted_str)
// }
// function max_3 (a,b,c){
//     var value, nextValue, result;
//     if (( a >= b) && (a >= c)){
//         value = a
// 		nextValue = max_2(b,c)
//     }
//     else if (( b >= a) && (b >= c)){
//         value = b
// 		nextValue = max_2(a,c)
//     }
//     else if (( c >= a) && (c >= b) ){
//         value = c
// 		nextValue = max_2(a,b)
//     }
// 	result = value + "," + nextValue
// 	return value 
// }

// function max_2 (a,b){
//     var value;
//     if( a >= b){
//         value = a
//     }
//     else if ( b >= a ){
//         value = b
//     }
// 	return value
// }

// run (5,8,4,1)


function max_2(a, b) {
	var result;
	if (a >= b) {
	  result = a + "," + b;
	} else {
	  result = b + "," + a;
	}
	return result;
  }
  function max_3(a, b, c) {
	var result;
	if (a >= b && a >= c) {
	  second = max_2(b, c);
	  result = a + "," + second;
	} else if (b >= a && b >= c) {
	  second = max_2(a, c);
	  result = b + "," + second;
	} else {
	  second = max_2(b, a);
	  result = c + "," + second;
	}
	return result;
  }
  function max_4(a, b, c, d) {
	var result, third;
	if (a >= b && a >= c && a >= d) {
	  third = max_3(b, c, d);
	  result = a + "," + third;
	} else if (b >= a && b >= c && b >= d) {
	  third = max_3(a, c, d);
	  result = b + "," + third;
	} else if (c >= a && c >= b && c >= d) {
	  third = max_3(a, b, d);
	  result = c + "," + third;
	} else {
	  third = max_3(b, c, a);
	  result = d + "," + third;
	}
	return result;
  }
  
  function run(a, b, c, d) {
	  result = max_4(a, b, c, d)
	  console.log(result)
  }
  run(5,8,9,6)