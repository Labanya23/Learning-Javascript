function add(price1,price2){
    const total=price1+price2;
    return total;
}
const bill=add(5,80);

function add2 (price1,price2){
    return price1+price2;
}

const bill2=add(5,80);
console.log(bill,bill2);

function doMath(num1,num2){
    const num=num1+num2;
    const diff=num1-num2;
    const mult=sum*diff;
    const result=mult/2;
    return result;
}

const result = doMath(10,5);
console.log(result);
/*
function isEven(number){
    if(number%2==0){
        return true;
    }
    else{
        return false;
    }
}
    */