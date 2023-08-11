const express = require('express');
const app = express();
const routes = require('./routes/routes');
const db = require('./db')
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// app.use(express.json())

app.use('/',routes);

// app.use(express.json());



// app.use('/likes', routes);


app.listen(5000,()=>{   
    console.log("listening at 5000")
});