
const express =  require('express');
const Router = express.Router();
const fs = require('fs');

Router.get('/users',(req,res)=>{
    fs.readFile('./users.json', {encoding:"utf-8"}, (err,data) => {
        const users = JSON.parse(data)
        res.send(users);
        })
    });

    Router.get('/user/:id',(req,res)=>{
        fs.readFile('./users.json', {encoding:"utf-8"}, (err,data) => {
            const users  = JSON.parse(data);
            const user = users.find((user)=>{
               
                return user.id == req.params.id;
            })
            if(user){
                res.send(user);
            }else {
                res.send('id ' + argv.id + ' not found');
            }
            });
        });
    

    Router.get('/users',(req,res)=>{
        fs.readFile('./users.json', {encoding:"utf-8"}, (err,data) => {
            const users = JSON.parse(data)
            res.send(users);
            })
        });


    Router.post('/adduser',(req,res)=>{
        console.log(req.headers);
            fs.readFile('./users.json', {encoding:"utf-8"}, (err,data) => {
                const users  = JSON.parse(data);
                const id = users[users.length - 1].id + 1;
                users.push({ ...req.body, id });
                fs.writeFileSync('./users.json', JSON.stringify(users));
                res.send('welcome' + req.body.name + 'you are user now');
           
                });
        });
    

    Router.put('/edituser/:id',(req,res)=>{
        fs.readFile('./users.json', {encoding:"utf-8"}, (err,data) => {
            const users  = JSON.parse(data);
            let id= null;
            const usersUpdata = users.map((user)=>{
                if(user.id == req.params.id)
                {   id = true;
                   user = {...req.body, id: user.id }
                }
                return user;
            })
            if(id){
                fs.writeFileSync('./users.json', JSON.stringify(usersUpdata));
                res.send('updata user name: ' + req.body.name + ' is done');
            }else {
               res.send('id ' + req.params.id + ' not found');
            }
           
            });
        });

        Router.delete("/userdelete/:id", (req, res)=> {
            fs.readFile('./users.json', {encoding:"utf-8"}, (err,data) => {
                const users  = JSON.parse(data);
                let id= null;
                const usersUpdata = users.filter((user)=>{
                   id =  user.id == req.params.id ?  true : false
                    return user.id != req.params.id;
                })
                if(id){
                    fs.writeFileSync('./users.json', JSON.stringify(usersUpdata));
                   res.send('delete done');
                }else {
                    res.send('id ' + req.params.id + ' not found');
                }
               
                });
        });

module.exports = Router;  