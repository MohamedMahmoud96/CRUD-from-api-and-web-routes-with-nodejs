
const express =  require('express');
const Router = express.Router();
const fs = require('fs');



Router.get('/users',(req,res)=>{
fs.readFile('./users.json', {encoding:"utf-8"}, (err,data) => {
    const users = JSON.parse(data)
    res.render("users/index", {
       users:users
     });
    })
   });

Router.get('/user/:id',(req,res)=>{
      fs.readFile('./users.json', {encoding:"utf-8"}, (err,data) => {
          const users = JSON.parse(data)
          const user = users.find((user)=>{return user.id == req.params.id;})
          res.render("users/single", {
          user
           });
          })
         });
      

 module.exports = Router;   