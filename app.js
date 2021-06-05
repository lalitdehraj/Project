require('dotenv').config();
const express=require("express");
const ejs=require("ejs");
const app=express();
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
mongoose.connect('mongodb://localhost:27017/userDB');
// lskfhtuh
const userSchema = new mongoose.Schema({
    email: String,
    password: String
  });

const User = mongoose.model('User', userSchema);

app.listen(3000,function(req,res){
    console.log("app is listening at port 3000");
});
app.get("/quiz",function(req,res){
  res.render("quiz");
})
app.get("/score.ejs",function(req,res){
  console.log("score mein saye");
  res.render("score");
});
app.get("/relaxer",function(req,res){
  console.log("relaxer mein aye");
      res.render("relaxer");
});

app.get("/sleep",function(req,res){
  res.render("sleep");
})
app.get("/body",function(req,res){
  res.render("body");
})
app.get("/music",function(req,res){
  console.log("music me aya");
  res.render("music");
})
app.get("/meditate",function(req,res){
  res.render("Meditate");
})

app.get("/fun",function(req,res){
  res.render("home2");
})

app.get("/",function(req,res){
    res.render("index");
});
app.get("/login", function(req, res) {
    res.render("login");
  });
  var loggedIn= false
  app.post("/register", function(req, res) {
    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
      if (err) {
        console.log(err);
      } else {
        const new_user = new User({
          email: req.body.username,
          password: hash
        });
        new_user.save(function(err) {
          if (err) {
            console.log(err);
          } else {
            loggedIn= true
            res.render("index");
          }
        })

      }
    });

  });

  app.post('/login', function(req, res) {

    const username = req.body.username;
    const password = req.body.password;

    User.findOne({
      email: username
    }, function(err, foundUser) {
      if (err) {
        console.log(err);
      } else {
        bcrypt.compare(password, foundUser.password, function(err, result) {
          if (result) {
            loggedIn= true
            res.render("index");
          }else{
              console.log("wrong password");
          }
        });
      }
    })
  })


  app.get("/register", function(req, res) {
    res.render("register");
  });
  app.get("/logout",function(req,res){
      res.render("home");
  })
app.get("/index.html",function(req,res){
    res.render("index");
})
app.get("/about.html",function(req,res){
    res.render("about");
})
app.get("/blog-single.html",function(req,res){
    res.render("blog-single");
})
app.get("/blog.html",function(req,res){
    res.render("blog");
})
app.get("/classes.html",function(req,res){
  if (loggedIn!= true){
    res.render("home");
  }
  else  
  res.render("classes");
})
app.get("/contact.html",function(req,res){
    res.render("contact");
})
app.get("/schedule.html",function(req,res){
  if (loggedIn!=true){
    res.render("home");
  }
  else
  res.render("schedule");
})
app.get("/trainer.html",function(req,res){
    res.render("trainer");
})
