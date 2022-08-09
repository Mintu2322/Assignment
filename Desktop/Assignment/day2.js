console.log('Hello');
let b = 00;
// var let const : read :https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/
// create  a function
function add() {
    let a = 30;
    console.log(b);
    console.log(10 +20);
}
console.log(b);

// call a funciton
add();

function subtract(a, b){
    //          100 - 1000 
    console.log(a - b);
}
//        a   b 
subtract(20, 10);
let x = 100;
let y = 1000;

subtract(x, y);
//  types of variables: string, number, boolean
// == : it checks value: = 
// 2 == 2 true
// 2 == '2' true 
// 2 === '2' - false -> it checks value as well as type of the variable.

 function calculate(value1, value2, sign){
    if (sign === '-'){
        console.log(value1 - value2);
    } else if(sign === '+'){
        console.log(value1 + value2);
    } else if(sign === '*'){
        console.log(value1 * value2);
    } else {
        console.log(value1 / value2);
    }
}
calculate(10,20,'+');