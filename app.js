var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
const db = require('./models/index.js');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
/*app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');*/

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());	
app.use(bodyParser.urlencoded({extended: true}));
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})
app.post('/signin', async (req, res) => {
    var user = await db.users.findAll({
      where: {
        email: req.body.email
      }
    });
    console.log(user);
    res.send(user);
})
app.post('/signup', async (req, res) => {
    try{
      if(req.body){
        const [user, created] = await db.users.findOrCreate({
          where: { email: req.body.email },
          defaults: {
            email: req.body.email,
            first_name: req.body.firstname,
            last_name: req.body.lastname,
            password: req.body.password }
        });
        if(created) res.send(user);  
        else res.json({ message: 0, error: {}}); // 0 Means user already registered.
      }
      else res.send("Request's body is empty");
    }
    catch(err){
      res.send(err);
    }
})

/*app.use('/', indexRouter);
app.use('/users', usersRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
*/
module.exports = app;
