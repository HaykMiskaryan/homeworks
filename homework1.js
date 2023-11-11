//1.Given a number. Print “odd” if the number is odd and “even” if it’s even.
let a = prompt("write any number")

if(a%2 === 0){
    console.log("even")
}else{
    console.log("odd")
}

//2.Given two numbers print 1 if one of them is divisible by the other one, otherwise print 0.

let x = prompt("write your first number please")
let y = prompt("write your second number please")

if(x%b === 0 || b%a === 0){
    console.log("1")
}else{
    console.log("0")
}

//3.Given a positive integer. Bring the last digit of the number to the beginning. Print the newnumber. If the last digit of the inserted number is 0, number remains the same.





//4.Given five numbers as input. Calculate and print the average of the numbers(withoutusing arrays).

let num1 = +prompt("write your first number")
let num2 = +prompt("write your second number")
let num3 = +prompt("write your third number")
let num4 = +prompt("write your fourth number")
let num5 = +prompt("write your fifth number")

let sumOfNumbers = num1 + num2 + num3 + num4 + num5

let average = sumOfNumbers/5

console.log(average)

//5.Given the following code rewrite it using only two if operators. (Hint: use logicaloperators).

let n = +prompt();

let i = 0;
let j = 0;

if (n % 2 === 0 && !Math.floor(n / 10)){
    i++;
}

if(n % 3 === 0 && n % 10 === 1){
    j++;
}