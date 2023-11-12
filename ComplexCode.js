/* 
   Filename: ComplexCode.js
   Description: This code demonstrates a complex algorithm that calculates the nth Fibonacci number using memoization technique. It also includes other helper functions and features to enhance performance and readability.
*/

// Function to calculate the nth Fibonacci number
function fibonacci(n) {
  // Array to store previously calculated Fibonacci numbers
  let memo = [0, 1];

  // Helper function to recursively calculate Fibonacci number while applying memoization
  function fib(n) {
    if (memo[n] !== undefined) {
      return memo[n];
    }

    memo[n] = fib(n - 1) + fib(n - 2);
    return memo[n];
  }

  if (n < 0) {
    throw new Error("Fibonacci number cannot be negative.");
  }

  return fib(n);
}

// Function to generate the first n Fibonacci numbers
function generateFibonacciSequence(n) {
  if (n <= 0 || !Number.isInteger(n)) {
    throw new Error("Invalid input. n must be a positive integer.");
  }

  let sequence = [];
  for (let i = 0; i < n; i++) {
    sequence.push(fibonacci(i));
  }

  return sequence;
}

// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1 || !Number.isInteger(num)) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

// Function to generate the first n prime numbers
function generatePrimeNumbers(n) {
  if (n <= 0 || !Number.isInteger(n)) {
    throw new Error("Invalid input. n must be a positive integer.");
  }

  let primeNumbers = [];
  let currentNum = 2; // Start from the first prime number

  while (primeNumbers.length < n) {
    if (isPrime(currentNum)) {
      primeNumbers.push(currentNum);
    }
    currentNum++;
  }

  return primeNumbers;
}

// Example usage of the functions
console.log("Fibonacci numbers:");
console.log(generateFibonacciSequence(10)); // Generate first 10 Fibonacci numbers

console.log("\nPrime numbers:");
console.log(generatePrimeNumbers(15)); // Generate first 15 prime numbers

/*
   This code demonstrates the use of memoization technique to efficiently calculate the Fibonacci numbers and provides helper functions to generate sequences of Fibonacci and prime numbers.
   Feel free to experiment with different inputs and explore the output of this code.
*/