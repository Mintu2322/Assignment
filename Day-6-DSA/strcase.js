const names = ['A', 'B', 'c', 'D', 'e', 'F', 'g', 'H', 'I', 'J', 'k', 'l'];

function letter(array){
    const uppercase = [];
    const lowercase = [];
    array.forEach(element => {
        if (element == element.toUpercase()){
            uppercase.push(element)  
        } else {
            lowercase.push(element)
        }
        console.log(uppercase);
        console.log(lowercase);
    }
        
    );
}
    letter(array);

module.exports = {letter};

