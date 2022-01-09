// Config Server Backend
const express = require('express');
const app = express();
// Listen on a specific host via the HOST environment variable
const host = process.env.HOST || 'localhost';
// Listen on a specific port via the PORT environment variable
const port = process.env.PORT || 8000;
const cors_proxy = require('cors-anywhere');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const router = require('./router/index');

app.use(router);

app.listen(port, () => {
    console.log(`server running in http://localhost:${port}`);
})