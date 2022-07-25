// Load env vars (FIRST!)
require('dotenv').config();

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const expressListRoutes = require('express-list-routes');

const bodyParser = require('body-parser');
const session = require('express-session');
const expressValidator = require('express-validator');

// Import routes
const articlesRouter = require('./routes/articles.routes');
const categoriesRouter = require('./routes/categories.routes');
const manageRouter = require('./routes/manage.routes');
const indexRouter = require('./routes/index.routes');
const usersRouter = require('./routes/users');

// DB connector
const connectDB = require("./conf/db");

const app = express();

// Connect to DB
connectDB();

// Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Express messages
app.use(require('connect-flash')());
app.use((req, res, next) => {
  res.locals.messages = require('express-messages')(req, res);
  next();
});

// Express validator
// app.use(expressValidator({
//   errorFormatter: (param, msg, value) => {
//       let namespace = param.split('.')
//       , root    = namespace.shift()
//       , formParam = root;
//
//     while(namespace.length) {
//       formParam += '[' + namespace.shift() + ']';
//     }
//     return {
//       param : formParam,
//       msg   : msg,
//       value : value
//     };
//   }
// }));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use('/articles', articlesRouter);
app.use('/categories', categoriesRouter);
app.use('/manage', manageRouter);
app.use('/users', usersRouter);
app.use('/', indexRouter);

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

module.exports = app;
