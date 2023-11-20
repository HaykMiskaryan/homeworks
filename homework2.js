//1. Given a number print its digits count. Use both loops (for, while)

//for

let count = 0;
for (let a = +prompt("Enter any number");  a!==0 ;a =  Math.floor(a / 10)){
     
    count++
}
console.log("" + count);

//while

let a = +prompt("enter any number")
let count = 0;
while(a !== 0 ){
    count++
    a=Math.floor(a / 10)
}
console.log("" + count)

//2.Count numbers of digit 9 in a number. Use both loops (for, while)
//for

let number = +prompt("enter any number")
let count = 0;

for(let a = number ; a !==0 ; a = Math.floor(a / 10) ){
    if(a % 10 === 9 ){
        count++
    }
}
console.log(count);

//while
let number = +prompt("enter any number")
let count = 0;
let a = number 
while(a !== 0){
    if(a % 10 === 9 ){
        count++
    }

    a = Math.floor(a / 10)
}
console.log(count);

//3. Given two numbers. Print ony odd numbers between that numbers.
//for
let firstNumber= +prompt("enter your small number")
let secondNumber = +prompt("enter your big number")

if (firstNumber > secondNumber){
    alert("first number must be smaller than the second")
}else{
    for(let a = firstNumber ; a <= secondNumber ; a++ ){
        if (a % 2 !== 0 ){
            console.log(a)
        }
    }
}

//while
let firstNumber= +prompt("enter your small number")
let secondNumber = +prompt("enter your big number")
   
if (firstNumber > secondNumber){
    alert("first number must be smaller than the second")
}else{
    let a = firstNumber;
    while(a <= secondNumber){
        if (a % 2 !== 0 ){
            console.log(a)
        }
        a++
    }
}

//4. Given a number as input, insert dashes (-) between each two even numbers.
let Num = +prompt("enter a number")
for(let i = 0 ; i){

}


//5. Given a positive number. Print it in reverse order.

let posNum = +prompt("enter any number")
let revNum = "";
let posNumStr = String(posNum)

for (let i = posNumStr.length -1 ;  i >= 0 ; i--){
    revNum += posNumStr[i]
    
}
console.log(revNum)

