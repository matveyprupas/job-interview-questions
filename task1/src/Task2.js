import React, { useEffect } from "react";
import { A1, A2 } from "./data/data";

// Given two arrays, find the intersection(items occur in both arrays)
// 1. arrays are not sorted, and might have duplicates.
// 2. you can modify the arrays
// 3. you can return the items in any order, but without duplicates.
///

/**
 * @param {any[]} arr1
 * @param {any[]} arr2
 * @returns {any[]}
 */

function getIntersection(arr1, arr2) {
    // your solution here
    return [];
}

// console.log(getIntersection([1, 2, 3], [2, 3, 4]));

export default function Task2() {
  useEffect(() => {
    console.log(getIntersection(A1, A2));
  }, []);
  return <div></div>;
}
