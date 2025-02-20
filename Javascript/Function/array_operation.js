/*
Objective:Write a function to give me the sum of all numbers in an array
step-1:declear a function
step-2:call check whether the function call properly
step-3:set a parameter(s)
step-4:pas the parameter(s),check whether parameter is passed in proper format
step-5:to do the function task step by step
*/

function sumOfNumbers(numbers){
    let sum=0;
    for(const number of numbers){
    console.log(number);
    sum=sum+number;
    return sum;
    }
}
const nums=[54,62,12,6];
const sum=sumOfNumbers(nums);
console.log('Sum of numbers is',sum);