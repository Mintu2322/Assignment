const express = require(express);
const app = express();
const port = 8000;


app.get('/', (Request, Response) => {
    Response.send('Hello World');
});


app.get('/page', (Request, Response) => {
    Response.send('Hello World on page!');
});


app.listen(port, function() {
    console.log('server is running on port' + port);
});