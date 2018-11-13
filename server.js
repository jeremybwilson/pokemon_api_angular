// ******************  Configuration  ******************
const  express = require("express"),
    parser = require("body-parser"),
    mongoose = require('mongoose'),
    session = require('express-session'),
    path = require("path"),
    flash = require('express-flash');

    port = process.env.PORT || 8005,
    // invoke express and store the result in the variable app
    app = express();

//connect to DB
require('./server/config/database');

// app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/public/dist/public')));
// app.set('views', path.join(__dirname, 'views'));

app.use(parser.urlencoded({ extended: true }));
app.use(flash());
app.use(parser.json());

app.use( function(request, response, next){
    console.log(`requesting url: ${request.url}`);
    next();
})
app.use(session({
    secret:'superSekretKitteh',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false, 
        maxAge: 600000
    }
}));

// Routing 
require('./server/config/routes')(app);

// port
app.listen(port, () => console.log(`Express server listening on port ${port} for Pokemon API`));    // ES6 way