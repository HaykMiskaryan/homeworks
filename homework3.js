//1.Insert a number.Print “yes” if it contains 3 successive zeros, otherwise print “no”.
function checkForThreeZeros(number){
    let numberString = String(number)
    if (numberString.includes("000")){
        console.log("yes")
    }else{
        console.log("no")
    }
}

//2.Insert a number. Remove all zeros from the number, except the last one and print the number. If there are at most one zero, print “Nothing to remove”.
//վեջին 0 չի պահում
function removeZeros(num){
    let numString = String(num)
   
    if (numString.indexOf("0") === -1){
        console.log("nothing to remove")
        return;
    }
    let result = ""
    for (let i = 0 ; i < numString.length - 1 ; i++){
        if (numString[i] === "0"){
            return numString.replace(/0/g , "" )
            
        }else{
            result = numString[i] + result;
        }
        
    }
    console.log(result)
}

// 3.Insert a n positive number. Check number is prime or not. Prime numbers are numbers that have only 2 factors: 1 and themselves. For example, the first 5 prime numbers are2, 3, 5, 7, and 11.

function isPrime(num){
    if (typeof num !== "number" || num <= 1 || num % 1 !== 0){
        return false
    }
    for (let i = 2 ; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            return false
        }  
    }
    return true;
}

//4.Insert a n positive number. Print the n-st prime number.

function  primeNumber (n){
    let primes = []
    let b =2;
    while(primes.length < n ){
        if (isPrime(b)){
            primes.push(b)
        }
        b++
    }
    console.log("The " + n + "-th prime number is: " + primes[n - 1]);
}