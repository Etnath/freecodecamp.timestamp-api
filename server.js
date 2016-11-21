var express = require("express");

var app = express()

app.get('/:time', function (req, res) 
{
  try 
  {
    var timeInput = parseInt(req.params.time);
    var date;
    if(timeInput)
    {
      date = new Date(timeInput);
    }
    else
    {
      date = new Date(req.params.time);
    }
    var unixTime = date.getTime();
    var time = date.toDateString();
  
    var timeObject = 
    {
      "unix": unixTime, 
      "natural": time
    };
    res.send(JSON.stringify(timeObject));
  } 
  catch (e) 
  {
    var timeObject = 
    {
      "unix": null, 
      "natural": null
    };
    res.send(JSON.stringify(timeObject));
  }
});

app.listen(8080, function () 
{
  console.log('Example app listening on port 8080!')
});