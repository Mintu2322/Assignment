const practceObject = [
    {
        id: 1,
        name: "Mintu Nagar",
        username: "mintu1023",
        email: "mintunagar1023@gmail.com",
        address: {
            street: "satkar shopping center",
            suite: "Apt. 501",
            city: "jaipur",
            zipcode: "302017",
        },
        phone: "8005795032",
        company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets",
        },
    },
    
    {
        id: 02,
        name: "Clementina DuBuque",
        username: "Moriah.Stanton",
        email: "Rey.Padberg@karina.biz",
        address: {
            street: "Kattie Turnpike",
            suite: "Suite 198",
            city: "Lebsackbury",
            zipcode: "31428-2261",
        },
        phone: "024-648-3804",
        website: "ambrose.net",
        company: {
            name: "Hoeger LLC",
            catchPhrase: "Centralized empowering task-force",
            bs: "target end-to-end models",
        },
    },
];

// console.log(Object.values(practceObject));
// console.log(Object.keys(practceObject));

// console.log(practceObject[0]);
// console.log(Object.keys(practceObject[0]));
// console.log(Object.values(practceObject[0]));

// Object.keys(practceObject).forEach((data) =>{
//     console.log("practceObject",[data],"=>",practceObject[data]);
// })

let KeysArray  = Object.keys(practceObject[0]);
for (i = 0; i < KeysArray.length; i++) {
    console.log(i ,"=", KeysArray[i]);
}

let ValuesArray  = Object.values(practceObject[0]);
for (i = 0; i < ValuesArray.length; i++) {
    console.log(i,"=",ValuesArray[i]);
}

// for (i = 0; i < Object.values(practceObject).length; i++) {
    // console.log(practceObject.values[i]);
    // console.log("Value no - ",i);
// }