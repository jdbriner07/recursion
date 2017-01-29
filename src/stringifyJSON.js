// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

//helper function to turn obj into array binary arrays
var objToArray = function(object){
	var acc = [];
	for (var key in object) {
 		acc.push([key, object[key]]);
	}
 	return acc;
}
//helperfunction to turn array into object
var arrayToObject = function(array) {
	var acc = {};
	for (var i = 0; i < array.length; i++){
		acc[array[i][0]] = array[i][1];
	}
	return acc;
}

var objectToString = function(obj) {
	// if (obj === {}) {
	// 	return "";
	// }
  var array = objToArray(obj);
  if (array[0] === undefined || array[0][0] === "undefined" || array[0][0] === "functions") {
  	return "";
  }

  var trimmedArray = array.shift();
  // if ( array[0][0] === "function"|| array[0][0] === "undefined"){
  // 	trimmedArray = array.shift();
  // 	if ( array === undefined||array[0] === undefined ){
  // 		return "";
  // 	}
  // }
  return '"' + trimmedArray[0]+'":'+trimmedArray[1]+","+ objectToString(arrayToObject(array));
};

var stringToString = function(string) {
	return '"'+string+'"';
}

var arrayToString = function(array){
	if (array[0] === undefined) {
		return "";
	}
	var placeHolder = array.slice();
	placeHolder.shift();
	// if (typeof array[0] === "string"){
	// 	return '"'+array[0] + '",' + arrayToString(placeHolder);
	// }
	return array[0] + "," + arrayToString(placeHolder);
}


var deepStringify = function(collection){
	if (Array.isArray(collection)) {
		for (var i = 0; i < collection.length; i++){
			if (typeof collection[i] === "string"){
				collection[i] = '"'+collection[i] + '"'; 
			}
			else if (Array.isArray(collection[i])) {
				collection[i] = stringifyJSON(collection[i]);
			}
			else if (typeof collection[i] === "object"){
				collection[i] = stringifyJSON(collection[i]);
			}
		}
	}
	else {
		for (var key in collection)	{
			if (typeof collection[key] === "string") {
				collection[key] = '"'+collection[key]+'"';
			}
			else if(Array.isArray(collection[key])) {
				collection[key] = stringifyJSON(collection[key]);
			}
			else if (typeof collection[key] === "object") {
				collection[key] = stringifyJSON(collection[key]);
			}
		}
	}
	return collection;
}



var stringifyJSON = function(value) {
	if (value === null) {
		return "null";
	}
	if (Array.isArray(value) || typeof value === "object") {
		var deepString = deepStringify(value); 
	}
	if(Array.isArray(deepString)) {
		return "["+arrayToString(deepString).slice(0,-1) + "]";
	}
	if (typeof deepString === "object"){
		var string = objectToString(deepString).slice(0,-1);
		console.log("{" + string + "}")
		return "{" + string + "}";
	}
	if (typeof value === "string"){
		return stringToString(value);
	}

	else {
		return value+"";
	}

}