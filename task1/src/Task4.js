import React, { useEffect } from "react";

// create isPrime()
// A Prime number is a natural number greater than 1 that is divisible only by itself and 1,
// such as 2,3,5....
// You are asked to implement isPrime() to check if a number is prime.

/**
 * @param {number} num - positive integer
 */
function isPrime(num) {
  // implementation missing
  return false;
}

export default function Task4() {
  useEffect(() => {
    console.log("3 is prime", isPrime(3));
    console.log("17 is prime", isPrime(17));
    console.log("89 is prime", isPrime(89));
    console.log("99991 is prime", isPrime(99991));

    console.log("6 is NOT prime", isPrime(6));
    console.log("25 is NOT prime", isPrime(25));
    console.log("77 is NOT prime", isPrime(77));
  }, []);
  return <div></div>;
}
