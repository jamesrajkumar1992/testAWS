'use strict';

var express = require('express');
var app = express();

let sendFile = require('./routes/sendFile.js')
app.listen('3000');
console.log('Magic happens at http://localhost:' + "3000")

var hello = require('./hello.js')
app.get('/hi',hello.rooooo)

let x = "hi";

let add = (num1,num2)=> {
    if(num1 >0){
        let sum = num1+num2;
        return sum;
    }else{
        console.log('sum:',sum)
        return num2;
    }

} 

//console.log(add(0,2))

let word1 = 'james';
let word2 = 'raj';

let num1 = 1;
let num2 = 2;

const fullName = `Roll Number: ${num1 + num2} ,Name: ${word1} ${word2}`
console.log("fullname:"+fullName)

//document.getElementById('example') = fullName;


app.get('/',(req,res)=>{
    
        res.sendFile('index.html',{root: __dirname})
   
})

app.get('/test',sendFile.html)