var express = require('express');
var router = express.Router();

const messages = [
  { 
    title: "Welcome!",
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    title: "New here!",
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { heading: "Mini Message Board", messages: messages });
});

/*pushes message into home page*/
router.post('/new', function(req, res, next){
  console.log(req.body)
  messages.push({ title: req.body.title, text: req.body.post, user: req.body.userName, added: new Date() });
  
  res.redirect('/');
});

module.exports = router;
