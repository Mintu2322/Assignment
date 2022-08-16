const names = ['Mintu','priyansh','ashish','Deepak','Izhar','Naresh', 'priya', 'Shivam', 'jayesh',];

function checkFirstChar(names){
    names.forEach(element => {
       if(element[0] == element[0].toUpperCase()) {
            console.log(element);
       }
    });
}

checkFirstChar(names);

module.exports = {checkFirstChar};