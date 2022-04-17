const express = require('express');
const https =require('https');

const app = express();

app.get('/',function(req,res){
  const url =('https://api.openweathermap.org/data/2.5/weather?lat=57&lon=-2.15&appid=b91aaa37f11b9138fcd81d8268a62a10')
  https.get(url, function(response){
    console.log(response.statusCode);

    response.on('data', function(data){
      const weatherData = JSON.parse(data);
      const object = {
        name: 'Shawntez',
        favouriteFood: 'Pizza'
      }
      console.log(JSON.stringify(data));
  });
  res.send('Server is up and running')
});
});
app.listen(1111, function(){
  console.log('Server on Port 1111');
});
