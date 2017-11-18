// The following function validates bracces in a given string
// The '*' is considered either opening/closed braces as per the need
// Example : "te(*))st" ----- isValid
// Example : "te(*)))st" ----- isInvalid

function stringValidator(str) {
  var temp = {
    '(': 0,
    '*': 0
  };
  for(var i=0; i < str.length; i++) {
    var char = str[i];
      if(char === '(') {
        temp[char]++;
      } else if(char === ')') {
        temp['(']--;
      } else if(char === '*') {
        temp[char]++;
      }
  };

  if(!temp['('] || (temp['('] && temp['('] <= temp['*'])) {
    return 'balanced';
  }else {
    return 'unbalanced';
  }
};

console.log(stringValidator('((*))'));
console.log(stringValidator('((*)'));
console.log(stringValidator('(((*)'));
console.log(stringValidator('(((*)**'));
