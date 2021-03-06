// jshint esversion: 6

const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res) {
  const firstName = req.body.first;
  const secondName = req.body.second;
  const email = req.body.email;

  const data = {
    members : [{
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: firstName,
        LNAME: secondName
      }
    }]
  };
  const jason = JSON.stringify(data);

  const url = "https://us14.api.mailchimp.com/3.0/lists/cd6ea94f6e";
  const options = {
    method: "POST",
    auth: "ambadi:90008d37bf7d10d39eadc591eb56ac2e-us14"
  };

  const request = https.request(url, options, function(response) {
    const statusCode = response.statusCode;
    if(statusCode === 200){
      res.sendFile(__dirname + "/sucess.html");
    }else{
      res.sendFile(__dirname + "/failure.html");
    }
    response.on("data", function(data) {
      console.log(JSON.parse(data));
    });
  });
  request.write(jason);
  request.end();
});

app.post("/failure.html", function(req, res){
  res.redirect("/");
})

app.listen(process.env.PORT || 3000, function() {
  console.log("The server is runnnig in portal 3000");
});


