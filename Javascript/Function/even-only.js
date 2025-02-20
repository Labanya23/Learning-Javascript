/*
create function that will return only the even number
return the sum of numbers
*/

function evenNumberOnly(numbers){
    //let sum=0;
    const evens=[];
    for(const number of numbers){
        if(number %2==0){
        console.log(number);
        //sum=sum+numbers;
        evens.push(number);
        //return evens;
        }
    }
    return evens;
}

const numbers=[5,8,91,24,6];
//const evens=evenNumberOnly(numbers);
//console.log(evens)

function sumOfNumbers(numbers){
    let sum=0;
    for(const number of numbers){
        if(number %2===0){
            console.log(number);
            sum=sum+numbers;
        }
    }
    return sum;
}
const sum=sumOfEvenNumbers(numbers);
console.log('sum of the even number is',numbers);