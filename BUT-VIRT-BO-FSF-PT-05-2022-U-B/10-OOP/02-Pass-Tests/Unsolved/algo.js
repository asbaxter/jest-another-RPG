function Algo() {}

Algo.prototype.reverse = function(str) {
  // TODO: Your code here
  // TODO: convert string to an array
  // TODO: reverse substrings in array
  // TODO: convert array back into a string
  return str.split('').reverse().join('');
};

Algo.prototype.isPalindrome = function(str) {
  // TODO: Your code here
  return str === this.reverse(str);
};

Algo.prototype.capitalize = function(str) {
  // TODO: Your code here
  return str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
};


module.exports = Algo;
