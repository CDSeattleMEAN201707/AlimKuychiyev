var express = require("express");
var session = require("express-session");
var bodyParser = require("body-parser")
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/static'));
app.use(session({secret: 'secrettssssssss'}));
app.use(bodyParser.urlencoded({extended: true}));

  app.get('/',function(req,res){
    console.log('cool');
    res.render("index")
  })

  app.get('/result',function(req,res){
    console.log('result');
    res.render("result",{ post : postInfo})
  })


  app.post('/success', function (req,res) {
    postInfo = {
        name : req.body.name,
        location : req.body.location,
        language : req.body.language,
        comment : req.body.comment,
    }

    console.log("rESULTS PAGE");
    console.log(postInfo.name);
    res.redirect('result');
  })

  app.get('/logout', function(req,res) {
      req.session.destroy();
      postInfo = {};
    res.redirect('/')
  })

  app.listen(8000, function(){})
