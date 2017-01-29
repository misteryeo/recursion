// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

// document.body
// element.childNodes
// element.classList

var getElementsByClassName = function(className) {
  var matches = [];
  
  // Traverse the dom and look at each element or node
  var traverseDOM = function (element, func) {
    func(element);	
	  var children = element.childNodes;
	  for (var item in children) {
	    element = children[item];
	    if (element) { // If element has childNodes, recurse and traverseDOM again
	      traverseDOM(element, func);
	    }
	  };
  }
  
  // If elements or nodes on the page contain a class, push to matches array
  traverseDOM(document.body, function(element) { 
    if (element.classList && element.classList.contains(className)) {
      matches.push(element);
    }
  });
  return matches;
};

