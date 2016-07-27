var express = require('express'),
    app = express(),
    path = require('path');
    bodyParser = require('body-parser'),
    logger = require('morgan'),
    methodOverride = require('method-override'),
    router = express.Router();

require('locus');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// routes

router.get('/', (req,res)=>{
  res.sendFile('/public/views/index.html');
})

// start server
app.listen('9001',() => {
  console.log('The Server is OVER 9000!!!');
});
