const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')

const app = express();
app.use(cors());
app.use(bodyParser.json())

const users=['asad','sabana','josim','bilkis','rubel'];
app.get('/', (req, res) => {
    const fruit = {
        product: 'ada',
        prisce: '220'
    }
    res.send(fruit)
})
// app.get('/fruits/banana',(req,res)=>{
//     res.send({fruit:'banana', quantity:1000, price:10000});
// })
app.get('/users/:id',(req,res)=>{
    const userId=req.params.id;
    console.log(req.query.sort)
    const name =users[userId];
    res.send({userId,name})
})
app.post('/addUser',(req,res)=>{
   //save to database
   const user=req.body;
   user.userId =55;
   res.send(user)
})
app.listen(3000, () => console.log('Listenting to port 3000'));