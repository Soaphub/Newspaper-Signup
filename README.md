# Newspaper-Signup

The web application where users can provide their name and email id for weekly newspaper.   

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview


### The challenge

I was able to:

- View the optimal layout for each of the website's pages depending on their device's screen size.
- To maintain the user name and email id using mail chip API.

### Links

- Solution URL: (https://github.com/Soaphub/Newspaper-Signup)
- Live URL: (https://enigmatic-journey-79606.herokuapp.com/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Bootsrap Grid and cards
- Mail chip API
- Mobile-first workflow


### What I learned

```.js
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
```

## Author

- Website - [Ambadi](https://enigmatic-journey-79606.herokuapp.com/)

## Acknowledgments

The udemdy coarse by Angela helped a lot in completing the project.
