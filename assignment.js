function calculateVAT( price ) {

    const total =price*(7.5/100);
    
    if(price>0){
    
    return total;
    
    }
    
    else{
    
    return "Invalid";
    
    }
    
    }
function  validContact( contact ) {
    if(typeof contact !=="string"){
        return false;
    }
    if(contact.length!==11){
        return false;
    }
    for(let i=0;i<contact.length;i++){
        if(contact[i]<'0' || contact[i]>'9'){
            return false;
        }
    }
    return true;

   }
   function willSuccess(marks){
    if(!Array.isArray(marks)){
        return "Invalid";
    }
    if(marks.length===0){
        return false;
    }
    for(let i=0;i<marks.length;i++){
        if(marks[i]>=50){
            return true;
        }
    }
    return true;
   }

   function validProposal(person1,person2){
    if(typeof person1!=="object" || typeof person2!=="object" || person1==null || person2==null){
        return "Invalid";
    }
    if(
        (person1.gender==="male" && person2.gender==="female")
        (person1.gender==="female" && person2.gender==="male")
    )
    {
        return true;
    }
   }

   function calculateSleepTime(times){
    if(Array.isArray(times)){
    let hour=Math.floor(ts/3600);
    let minute=Math.floor((ts%3600)/60);
    let second=Math.floor%60;
    return{hour,minute,second};
    }
    else{
        return "Invalid";
    }


   }

