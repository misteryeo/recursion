// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:



var stringifyJSON = function(obj) {
  
 // Check for the five primitive types and convert into a string
  if (typeof(obj) === 'number' || typeof(obj) === 'boolean' || obj === undefined || obj === null) {
    return obj + '';
  } 
  else if (typeof(obj) === 'string') {
   return '"' + obj + '"';
  }
 // Check if it's an array and map each element into a string in a new array
  else if (Array.isArray(obj)) {
    return '[' + obj.map(function(item) {
      return stringifyJSON(item); 
    }) + ']';
  }
 // Check if it's an object and convert into a string
  else if (typeof(obj) === 'object') {
    var strKeyValuePairs = [];
    for (var key in obj) {
      var strKey = '"' + key + '":';
      if (typeof(obj[key]) === 'function' || typeof(obj[key]) === undefined) {
        strKeyValuePairs.push('');
      } else if (typeof(obj[key]) === 'string') {
        strKeyValuePairs.push(strKey + '"' + obj[key] + '"');
      } else if (typeof(obj[key]) === 'boolean' || typeof(obj[key]) === 'number' || obj[key] === null) {
        strKeyValuePairs.push(strKey + obj[key]);
   	// Check if there are any nested objects and recursively call them
      } else if (typeof(obj[key]) === 'object') {
        strKeyValuePairs.push(strKey + stringifyJSON(obj[key]));
      }
    };
    return '{' + strKeyValuePairs + '}';
  }
};