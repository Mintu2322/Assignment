// console.log("Hello World");
const express = require('express');
const   app = express();
const   port = 8000;

app.get('/', (request, response) => {
    response.send("Hello, world!");
});

app.get('/page', (request, response) => {
    response.send("Hello, world!, This Is The First Node JS Application");
});


app.listen(port, function() {
    console.log("Server Is Running On Port " + port);
});


