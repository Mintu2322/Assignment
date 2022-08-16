const array = [1,4,7,8,3,1,4,7]

function removeDuplicates(array) {
   const res =[];
   for(let i = 0; i < array.lenght; i++)
        if (res.includes(array[i])) {
          res.push(array[i]);
          console.log(res)
        } else {
            console.log(array[i]);
        }
}
