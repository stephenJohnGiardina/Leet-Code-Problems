/**
 * Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */

var lengthOfLongestSubstring = function(s) {

};

var lengthOfLongestSubstringRecursiveSolution = function(s) {
  if (s.length === 0) return 0;
  let arr = [];
  let helper = (string) => {
    arr.push(string)
    if (string.length === 1) {
      return;
    } else {
      const left = string.substring(1)
      if (!arr.includes(left)) {
        helper(left);
      }
      const right = string.substring(0, string.length - 1);
      if (!arr.includes(right)) {
        helper(right);
      }
    }
  }
  helper(s);
  return arr.filter((string) => {
    let obj = {};
    for (let i = 0; i < string.length; i++) {
      if (obj[string[i]] === undefined) {
        obj[string[i]] = true;
      } else {
        return false;
      }
    }
    return true;
  }).reduce((accumulator, string) => {
    if (string.length > accumulator) {
      return string.length;
    } else {
      return accumulator;
    }
  }, 0);
};

// TEST SUITE

// TEST 1

console.log(lengthOfLongestSubstring("abcb"));

// TEST 2

console.log(lengthOfLongestSubstring("suqqjkuuxfeinpgjucmoc"));

// TEST 3

console.log(lengthOfLongestSubstring("mrjkdfwfsfjoblbhtjcpdbjdqkvevshhjssnzosstdgwqhelqibumkzcwujsnsbyktlkkgeflkectkpjuqfgdgjbduvqm"));