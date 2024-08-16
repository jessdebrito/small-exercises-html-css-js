function isPalindrome(str) {
  str = str.toLowerCase().replaceAll(" ", "");
  const reverseText = str.split("").reverse().join("");

  return str === reverseText;
}

function arrayMaxMin(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return [min, max];
}
