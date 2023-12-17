const express = require('express');
const app = express();
const methodOverride = require('method-override');


app.use(express.urlencoded({extended : false}));
app.use(express.static('./public'));
app.use(methodOverride('_method'));


app.set('view engine', 'ejs');


app.listen(8080, () => {
    console.log('http://localhost:8080');
})

const mainRoutes = require('./routes/main.routes');
const userRoutes = require('./routes/user.routes');


app.use('/', mainRoutes);
app.use('/user', userRoutes);
