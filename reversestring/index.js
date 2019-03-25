// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// SOLUTION 1:
function reverse(str) {
  return str
    .split('')
    .reverse()
    .join('');
}

// SOLUTION 2:
// function reverse(str) {
//   let reversed = '';

//   for (let char of str) {
//     reversed = char + reversed;
//   }

//   return reversed;
// }

// SOLUTION 3:
// function reverse(str) {
//   return str.split('').reduce((rev, char) => char + rev, '');
// }

// SOLUTION 4:
// function reverse(str) {
//   let reversed = '';

//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }

//   return reversed;
// }

module.exports = reverse;
