const createError = require('http-errors')
const express = require('express')
const morgan = require('morgan')
const path = require('path')
const app = express()

const cookieParser = require('cookie-parser')
const homeRouter = require('./routes/home')
const loginRouter = require('./routes/login')
const productRouter = require('./routes/product')
const registerRouter = require('./routes/register')
const storeRouter = require('./routes/store')


//setup public
app.use(express.static(path.join(__dirname,"public")))

app.use(morgan('combined'))
app.use(cookieParser());


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use('/', homeRouter)
app.use('/login', loginRouter)
app.use('/register', registerRouter)
app.use('/product', productRouter)
app.use('/store', storeRouter)

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