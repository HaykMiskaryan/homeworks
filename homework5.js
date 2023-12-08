//1. Given a string. Check whether the string is palindrome or not.
function isPolidrome(str){
    let stringStr = String(str)
   let start = 0
   let end = stringStr.length - 1

   while(start < end ){
        if(stringStr[start] !== stringStr[end]){
            return false
        }
        start++
        end--
   }
   return true
}

//2. Given a string and symbols. Change first symbol by the second one in the string.

function changingSymbol (str , smb , newSmb){
    let worldStr = String(str)
    let smbStr = String(smb)
    let newSmbStr = String(newSmb)
    let newString = ""
    for (let i = 0 ; i < worldStr.length ; i++){
        if(worldStr[i] === smbStr){
            newString += newSmbStr
        }else{
            newString += worldStr[i];
        }
    }
    return newString;
}


//3. Insert a string. Create new string which is the mirror reverse of the inserted one around its center.
function reverseString(str){
    let newStr = String(str)
    let half = Math.floor(newStr.length / 2)
    let firstHalf = ""
    let secondHalf = ""
    for(let i = 0 ; i < half; i++ ){
        firstHalf += newStr[i]; //arajin kesy lcvec mejy 
       
    }
    for(let j = newStr.length - 1 ; j >= half ; j--){
        secondHalf += newStr[j]
    }
    return secondHalf + firstHalf
}

//4.Print the following number pattern: function will take argument (in this case it is 5)

function printFollowingNumber(num){
    for (let i = 1 ; i <= num ; i++){
        let p = ''
        for(let j = 1 ; j <= i ; j++){
            p += j + ' '
        }
        console.log(p)
    }
    for(let x = num ; x >= 1 ; x -- ){
        let k = ''
        for(let  y = 1 ; y < x ; y++){
            k += y + ' '
        }
        console.log(k);
    }
    
}

//5. Given an object. Invert it (keys become values and values become keys).
//--------------------------------
function valuesBecomeKeys(obj){
    
}