const array2 = [10,30,65,6009,2322,1212];

function evenElements(array) {
    const even =[];
    const odd =[];
    for(let i = 0; i < array.lenght; i++){
        if (array[i] % 2 == 0) {
    even.push(array[i])
    console.log(even);
} else {
    odd.push(array[i]);
}

    }
    console.log('even---->>>',even);
    console.log('odd----->>>', odd );

}
     evenElements(array2);

     module.exports = {evenElement};