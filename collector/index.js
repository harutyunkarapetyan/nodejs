var fs = require("fs");
var request = require('request');
var forEach = require('async-foreach').forEach;

forEach(url, function(url){

i = 0;

var url = "https://www.hltv.org/results?offset="+i;

request(url, function(error, response, html){
       if(!error){
           console.log(html)
       }

});
//if(i==26900){

//}
i+=100;
});