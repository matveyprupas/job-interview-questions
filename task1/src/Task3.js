import React, { useEffect } from "react";

// Given a string contaning only a, b and c, remove all b and then ac.
// removeChars('ab') = 'a'
// removeChars('abc') = ''
// removeChars('cabbaabcca') = 'caa'

/**
 * @param {string} input
 * @returns string
 */
function removeChars(input) {
  // missing implementation
  return "";
}

export default function Task3() {
  useEffect(() => {
    console.log(1, removeChars(""));
    console.log(2, removeChars("a"));
    console.log(3, removeChars("ab"));
    console.log(4, removeChars("abc"));
    console.log(5, removeChars("ccc"));
    console.log(6, removeChars("cabbaabcca"));
    console.log(7, removeChars("abbbaaccbbaccab"));
  }, []);
  return <div></div>;
}
