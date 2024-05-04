
//Function to find the square of a given number:
function square(number) {
    return number * number;
  }
  
  //Function to find the sum of cubes of two numbers:
  function sumOfCubes(num1, num2) {
    var cube1 = num1 * num1 * num1;
    var cube2 = num2 * num2 * num2;
    return cube1 + cube2;
  }
  
  //Function to reverse a number:
  function reverseNumber(number) {
    var reversed = 0;
    while (number > 0) {
      reversed = (reversed * 10) + (number % 10);
      number = Math.floor(number / 10);
    }
    return reversed;
  }
  
  //Function to print all numbers between 1 and 100 which are divisible by a given number z:
  function printDivisibleByZ(z) {
    var result = [];
    for (var i = 1; i <= 100; i++) {
      if (i % z === 0) {
        result.push(i);
      }
    }
    return result.join(', ');
  }