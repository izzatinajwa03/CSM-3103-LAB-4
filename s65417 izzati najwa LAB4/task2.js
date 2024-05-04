
//Function to find the sum of digits of a number:
function sumOfDigits(number) {
    if (number === 0) {
      return 0;
    } else {
      return (number % 10) + sumOfDigits(Math.floor(number / 10));
    }
  }
  
  //Function to compute x raised to the power y using recursion:
  function power(x, y) {
    if (y === 0) {
      return 1;
    } else {
      return x * power(x, y - 1);
    }
  }