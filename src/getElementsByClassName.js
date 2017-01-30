// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var result = [];

  function check(element, result) {
    var children = element.children;
    var parts = element.className.split(' ');
    if(parts.indexOf(className) >= 0){
      result.push(element);
    }
    for(var i = 0; i < children.length; i++) {
      inspect(children[i], result);
    }
  }

  check(document.body, result);
  return result;
}
