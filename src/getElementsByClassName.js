// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
	bodyObject = document.body;
	var acc = [];
	if (bodyObject.classList.contains(className)){
		acc.push(bodyObject);
	}
	acc.push(checker(bodyObject, className));
	console.log(acc);
};

var checker = function(bodyObject, className) {
	children = bodyObject.childNodes;
	if (children === undefined){
		return 1;
	}
	if(!children[0].classList){
		bodyObject.removeChild(bodyObject.firstChild);
	}
	if(children[0].classList){
		
		return 1;
	}
}
