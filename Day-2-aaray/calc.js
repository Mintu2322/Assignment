function calculate(a, b, sign) {
    if(sign === '+'){
        console.log(a + b);
    }else if(sign === '-'){
        console.log(a - b);
    }else if(sign === '*'){
        console.log(a * b);
    }else if(sign === '/'){
        console.log(a / b);
    }else if(sign === '%'){
        console.log(a % b);
    }
}
calculate(25, 35, '+');
calculate(30, 20, '-');
calculate(10, 20, '*');
calculate(25, 05, '/');
calculate(25, 03, '%');