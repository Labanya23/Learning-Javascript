/*
*for a given string tell me whether it was even number of character on not
*/

function evenSizedString(str){
    const size=str.length;
    if(size%2==0){
        console.log('even size')
    }
    else{
        console.log('odd size')
    }
    console.log(str,size);
}

evenSizedString('Dhaka');

function doubleOrTriple(number,doDouble){
    if(doDouble === true){
        const result=number*2;
        return result;
    }
    else{
        const result=number*3;
        return result;
    }

}
consle.log(doubleOrTriple(5,true));
consle.log(doubleOrTriple(5,false));

function numberOfElements(numbers){
    const len=numbers.length;
    return len;
}
//numberOfElements([12,45,78,45,121254,4,5])

function getAge(person){
    const age=person.age;
    return age;
}