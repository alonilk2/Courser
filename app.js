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

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})
app.post('/signin', async (req, res) => {
    var user = await db.Users.findAll({
      where: {
        email: req.body.email
      }
    });
    console.log(user);
    res.send(user);
})
app.post('/signup', async (req, res) => {
    if(req.body){
      const [user, created] = await db.Users.findOrCreate({
        where: { email: req.body.email },
        defaults: {
          email: req.body.email,
          Username: req.body.username,
          password: req.body.password }
      });
      console.log(created); // The boolean indicating whether this instance was just created
      if(created) res.send(0);  // 0 Means user already registered.
      else res.send(user);
    }
    else res.error("Request's body is empty");
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
