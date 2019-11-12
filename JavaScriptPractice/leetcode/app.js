// leetcode


//twoSum
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// let num = [0,0];
// let ans = [];
// let taget;
// function twoSum(nums,target) {
//     for(let i =0;i < nums.length;i++) {
//         for(let j = i+1;j < nums.length;j++){
//             if(nums[j] === (target - nums[i]) ) {
//                 ans.push(new Array(nums[i],nums[j]));
//                 console.log(ans.length)
//             }
//         }
//     }
//     return ans;
// }

// test
// console.log(twoSum([1,2,3,4,5],9));


//leetcode 

// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:
// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

let l1 = [2,4,3];
let l2 = [5,6,4];
let ans = [];
let plus = false;
function addTwoNumbers(l1,l2) {
    for(let i = 0;i < l1.length ; i++) {
        if( (l1[i] + l2[i]) >= 10 && (plus === false)){
            ans[i] = (l1[i] + l2[i]) % 10;
            plus = true;
        }else if ( (l1[i] + l2[i]) >= 10 && (plus === true) ) {
            ans[i] = (  (li[i] + l2[i]) % 10 ) + 1;
            plus = false;
        }else if ( (l1[i] + l2[i]) < 10 && (plus === true) ) {
            ans[i] = l1[i] + l2[i] + 1;
            plus = false;
        }else {
            ans[i] = l1[i] + l2[i];
        }
    }
    return ans;
}
console.log(addTwoNumbers(l1,l2) );


