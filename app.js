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
const nodemailer = require("nodemailer");
const bcrypt = require('bcrypt');
const saltRounds = 10;
const crypto = require('crypto');

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

app.use(express.static('public'));

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'techstar1team@gmail.com',
    pass: 'tech123!@!' // naturally, replace both with your real credentials or an application-specific password
  }
});

const jwtMW = exjwt({
  secret: 'manyplacees are awsome 4now',
  algorithms: ['RS256']
});

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.post('/sendMail', async (req, res) => {
  if(req.body) {
    try {
      const user = await db.users.findOne({
        where: { email: req.body.email }
      })
      if(user){
        const mailOptions = {
          from: 'techstar1team@gmail.com',
          to: req.body.email,
          subject: req.body.subject,
          text: req.body.text
        };
        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
            res.json({
              error: error,
              status: 0
            })
          } else {
            res.json({
              success: true,
              message: info
            })
          }
        });
      }
    } catch (error) {
      res.json({
        error: error,
        status: 1
      })
    }
  }
  else res.json({
    error: "error",
    status: 2
  })
})

app.post('/updateDet', async (req, res) => {
  try {
    if(req.body) {
      console.log("update det: ");
      const user = await db.users.findOne({
          where: { email: req.body.email }
      })
      console.log(user.dataValues.password)
      if(user) {
        await user.update({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            phonenumber: req.body.phonenumber,
            country: req.body.country,
            city: req.body.city
        })
      }
      res.json({
          success: true
      })
    }
    else res.json({
        error: "error",
        status: 2
    })
  } catch (error) {
    res.json({
        error: error,
        status: 0
    })
  }
})

app.post('/updatePass', async (req, res) => {
  try {
    if(req.body) {
      const user = await db.users.findOne({
        where: { email: req.body.email }
      })
      await bcrypt.compare(req.body.oldpass, user.dataValues.password, async function(err, result) {
        if(result == true){
          await bcrypt.hash(req.body.newpass, saltRounds, async function(err, hash) {
            await user.update({ password: hash }, {
              where: {
                email: req.body.email
              }
            });
            const mailOptions = {
              from: 'techstar1team@gmail.com',
              to: req.body.email,
              subject: "Your Techstar's account password has changed",
              text: "Was it you ? if not, please contact us immediately"
            };
            transporter.sendMail(mailOptions, function(error, info){
              if (error) {
                console.log(error);
                res.json({
                  error: error,
                  status: 0
                })
              } else {
                res.json({
                  success: true,
                  message: info
                })
              }
            });
            res.json({
              success: true
            })
          })
        }
        else if(err){
          res.json({
            error: err,
            success: false,
            status: 1
          })
        }
      });
    }
    else res.json({
      error: "error",
      status: 2
    })
  } catch (err) {
    console.log(err);
    res.send(err);
  }
})

app.post('/signin', async (req, res) => {
  try {
    const user = await db.users.findOne({
      where: { email: req.body.email }
    });
    await bcrypt.compare(req.body.password, user.dataValues.password, async function(err, result) {
      if(result == true) {
        if(user.active == 0){
          res.json({ 
            success: false,
            error: 1
          }); // 1 Means user was not activated.
        }
        else {
          let tok = jwt.sign(
            {user},
            'manyplacees are awsome 4now',
            {expiresIn: 129600}
          );
          res.json({
            success: true,
            error: null,
            user: user,
            tok,
          });
        }
      }
      else res.json({ 
        success: false,
        error: 0
      }); // 0 Means user not found.
    });
  } catch (error) {
    res.json({
      success:false,
      error: error
    })
  }
});

app.post('/approve_user', async (req, res) => {
  try {
    const userId = req.body.userid
    const token = req.body.token
    const user = await db.users.findOne({ where: {id: userId}});
    if(user.dataValues){
      try {
        await bcrypt.compare(token, user.dataValues.token, async function (error1, result) {
          if(result){
            await db.users.update({ active: 1 }, { where: { id: userId }})
            res.json({ success: true });
          }
          else {
            console.log(error1); 
            res.json({ success: false, error: 1});
          }
        })
      } catch (error0) {
        console.log(error0);
        res.json({success: false, error: 2});
      }
    }
  } catch (error) {
    console.log(error); 
    res.json({ success: false, error: 3 });
  }
});

app.post('/approveEmail', async (req, res) => {
  try {
    const userId = req.body.userid
    const token = req.body.token
    const user = await db.users.findOne({ where: {id: userId}});
    if(user.dataValues){
      try {
        await bcrypt.compare(token, user.dataValues.token, async function (error1, result) {
          if(result){
            await db.users.update({ email: user.dataValues.newemail }, { where: { id: userId }})
            res.json({ success: true });
          }
          else {
            console.log(error1); 
            res.json({ success: false, error: 1});
          }
        })
      } catch (error0) {
        console.log(error0);
        res.json({success: false, error: 2});
      }
    }
  } catch (error) {
    console.log(error); 
    res.json({ success: false, error: 3 });
  }
});

app.post('/signup', async (req, res) => {
    try{
      if(req.body){
        await bcrypt.hash(req.body.password, saltRounds, async function(err, hash) {
          token = crypto.randomBytes(32).toString('hex');
          await bcrypt.hash(token, saltRounds, async function(err, hashtok) {
            const promo = await db.PromoCode.findOne({ where: {promocode: req.body.promo}});
            if(promo){
              const [user, created] = await db.users.findOrCreate({
                where: { email: req.body.email },
                defaults: {
                  email: req.body.email,
                  first_name: req.body.firstname,
                  last_name: req.body.lastname,
                  password: hash,
                  active: 0,
                  token: hashtok
                }
              });
              if(created) {
                const mailOptions = {
                  from: 'techstar1team@gmail.com',
                  to: req.body.email,
                  subject: "Welcome my friend!",
                  html: '<h4><b>Activate Account</b></h4>' +
                  '<p>To activate your account, please enter this URL:</p>' +
                  '<a href=https://techstar12.herokuapp.com/activate/' + user.id + '/' + token + '>' + 'https://techstar12.herokuapp.com/activate/' + user.id + '/' + token + '</a>' +
                  '<br><br>' +
                  '<p>--Team</p>'
                };
                transporter.sendMail(mailOptions, function(error, info){
                  if (error) {
                    console.log(error);
                    res.json({
                      error: error,
                      status: 0
                    })
                  } else {
                    res.json({
                      success: true,
                      message: info
                    })
                  }
                });
                res.json({
                  success: true,
                  error: null,
                  user: user
                });
              }
              else res.json({
                success: false,
                error: 0 // 0 Means user already registered.
              }); 
            } 
            else res.json({
              success: false,
              error: 3 // 3 Means promocode wasnt found
            }); 
          });
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

app.post('/fetch_categories', async (req, res) => {
  try{
      const categories = await db.Categories.findAll();
      res.json({
        success: true,
        result: categories
      })
  } 
  catch(err){
      console.log(err);
      res.json({
        success: false,
        error: err
      })
  }
})

app.post('/storePassword', async (req, res) => {
  try {
    const userId = req.body.userid
    const token = req.body.token
    const password = req.body.newpass
    const userrecovery = await db.passrecovery.findOne({ where: {userid: userId}});
    if(userrecovery.dataValues){
      try {
        await bcrypt.compare(token, userrecovery.dataValues.token, async function (error1, result) {
          if(result){
            await bcrypt.hash(password, saltRounds, async function(error2, hash) {
              const user = await db.users.findOne({
                where: { id: userId }
              });
              await db.users.update({ password: hash }, { where: { id: userId }});
              userrecovery.destroy({
                where: {
                  userid: userId
                }
              })
              const mailOptions = {
                from: 'techstar1team@gmail.com',
                to: user.dataValues.email,
                subject: "Warning: Your password has changed",
                text: "Note that your password has changed recently. If you didn't ask us to change it, please call us immediately."
              };
              transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                  res.json({
                    error: error,
                    status: 0
                  })
                } else {
                  res.json({
                    success: true,
                    message: info
                  })
                }
              });
              res.json({ success: true })
            })
          }
          else {
            console.log(error1); 
            res.json({ success: false, error: 1})
          }
        })
      } catch (error0) {
        console.log(error0);
        res.json({success: false, error: 2})
      }
    }
  } catch (error) {
    console.log(error); 
    res.json({ success: false, error: 3})
  }
});


app.post('/updateEmail', async (req, res) => {
  try {
    const user = await db.users.findOne({
      where: { email: req.body.email }
    });
    token = crypto.randomBytes(32).toString('hex');
    bcrypt.hash(token, saltRounds, async function (err, hash) {
      await db.users.update({ token: hash, newemail: req.body.newemail }, { where: { email: req.body.email }});
      try {
        const mailOptions = {
          from: 'techstar1team@gmail.com',
          to: req.body.email,
          subject: "Email Change Approval needed",
          html: '<h4><b>Email Change</b></h4>' +
                '<p>To change your email, please enter the URL below:</p>' +
                '<a href=https://techstar12.herokuapp.com/updatemail/' + user.id + '/' + token + '>' + 'https://techstar12.herokuapp.com/updatemail/' + user.id + '/' + token + '</a>' +
                '<br><br>' +
                '<p>--Team</p>'
        };
        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
            res.json({
              error: error,
              status: 0
            })
          } else {
            res.json({
              success: true
            })
          }
        });
      } catch (error) {
        console.log(error)
        res.send(error)
      }
    });
  } catch (error) {
    console.log(error)
    res.send(error)
  }
})

app.post('/forgotPass', async (req, res) => {
  try {
    const user = await db.users.findOne({
      where: { email: req.body.email }
    });
    const userrecovery = db.passrecovery.findOne({ where: {userid: user.dataValues.id}});
    if(userrecovery.dataValues){
      userrecovery.destroy({
        where: {
          userid: userrecovery.dataValues.userid
        }
      })
    }
    token = crypto.randomBytes(32).toString('hex');
    console.log("token:" + token);
    bcrypt.hash(token, saltRounds, async function (err, hash) {
      try {
        const recoveryentry = await db.passrecovery.create({
          userid: user.id,
          token: hash
        }) 
        const mailOptions = {
          from: 'techstar1team@gmail.com',
          to: req.body.email,
          subject: "Reset Password",
          html: '<h4><b>Reset Password</b></h4>' +
                '<p>To reset your password, complete this form:</p>' +
                '<a href=https://techstar12.herokuapp.com/reset/' + user.id + '/' + token + '>' + 'https://techstar12.herokuapp.com/reset/' + user.id + '/' + token + '</a>' +
                '<br><br>' +
                '<p>--Team</p>'
        };
        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
            res.json({
              error: error,
              status: 0
            })
          } else {
            res.json({
              success: true
            })
          }
        });
      } catch (error) {
        console.log(error)
        res.send(error)
      }
    });
  } catch (error) {
    console.log(error)
    res.send(error)
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