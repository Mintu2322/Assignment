const UserName = "Mintu Nagar";
console.log(UserName);
console.log(UserName.length);

for (let i = 0; i < UserName.length; i++){
    console.log(UserName[i]);
}

console.log(UserName.slice(7,15));
console.log(UserName.replace("Nagar","Kumari"));
console.log(UserName.toUpperCase());
console.log(UserName.toLowerCase());

let message = "          Hello World            "
console.log(message.trim());

let Arr = UserName.split(" ");
console.log(Arr);
console.log(Arr.length);

let emptystr = "";
console.log(emptystr.concat(UserName));
