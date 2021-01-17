var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
const db = require('./models/index.js');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const exjwt = require('express-jwt');
const jwt = require('jsonwebtoken');
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
const jwtMW = exjwt({
  secret: 'manyplacees are awsome 4now',
  algorithms: ['RS256']
});
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})
app.post('/signin', async (req, res) => {
    try{
      if(req.body){
        const user = await db.users.findOne({
          where: { email: req.body.email, password: req.body.password }
        });
        if(user) {
          let tok = jwt.sign(
            {user},
            'manyplacees are awsome 4now',
            {expiresIn: 129600}
          );
          res.json({
            success: true,
            error: null,
            tok,
          });
        }
        else res.json({ 
          success: false,
          error: 0
        }); // 0 Means user not found.
      }
      else res.json({
        success: false,
        error: 1  // 1 Means no request body
      })
    }
    catch(err){
      res.json({
        success:false,
        error: err
      })
    }
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
        if(created) {
          let tok = jwt.sign(
            {user},
            'manyplacees are awsome 4now',
            {expiresIn: 129600}
          );
          console.log(user.users.dataValues);
          res.json({
            success: true,
            error: null,
            tok
          });
        }
        else res.json({
          success: false,
          error: 0 // 0 Means user already registered.
        }); 
      }
      else res.json({
        success: false,
        error: 1  // 1 Means no request body
      })
    }
    catch(err){
      res.json({
        success:false,
        error: err
      })
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
