const express = require('express');
const web =  require('./routes/web.js');
const api =  require('./routes/api.js');
const app = express();
 


app.use(express.json());

app.use('/', web);
app.use('/api', api);

// app.use("/api/*", api);
//#middleware
// json()
// static
// urlencodeed()

//#template engine
// hbs handlebars
app.use(express.static("./"))
app.use(express.json());
app.set('view engine', 'hbs');


app.get('/user/:id', (req,res)=>{


});

app.listen(7000);