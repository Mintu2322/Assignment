console.log(UserName.join(" - "));

//pop() - removes the last element from an array
UserName.pop();
for (let i=0; i<UserName.length; i++){
    console.log(UserName[i] );
}

//push() - adds a new element to an array (at the end)
UserName.push("Sidharth");
console.log(UserName);

//shift() - removes the first array element and "shifts" all other elements to a lower index
UserName.shift();
console.log(UserName);

//unshift() - adds a new element to an array (at the beginning), and "unshifts" older elements
UserName.unshift("Naresh");
console.log(UserName);

//delete() - delete array element (Using delete leaves undefined holes in the array)
// delete UserName[0];
// console.log(UserName);

//concat() - creates a new array by merging (concatenating) existing arrays
let data = id.concat(UserName);
console.log(data);

//tosring() - convert an array to a coma separated string
console.log(data.toString());

//slice() - slices out a piece of an array into a new array
let id2 = data.slice(4);
console.log(id2);
console.log(data);

//splice() - With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array
data.splice(0,4);
console.log(data);

//sort() - sorts an array alphabetically
data.sort()
console.log(data);

//reverse() -  reverses the elements in an array
data.reverse();
console.log(data);