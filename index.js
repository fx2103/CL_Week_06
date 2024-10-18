let express = require('express');
let app = express();

let fruits ={
    "data": [
        {
            name:'Apple',
            info:'Red'
        },
        {
            name:'Banana',
            info:'Yellow'
        },
        {
            name:'Milk',
            info:'White'
        }
    ]
}

// app.get('/',(request, response) =>{
//     response.send('Hello');
// })

// app.get('/',express.static('public'));

app.use('/',express.static('public'));

app.get('/fruits',(request, response) =>{
    response.json(fruits);
})

app.get('/fruits/:datas',(request, response) =>{
    console.log(request.params.datas);
    let user_sign = request.params.datas;
    let user_obj;
    for (let i=0; i<fruits.data.length; i++){
        if (user_sign == fruits.data[i].name){
            user_obj = fruits.data[i];
        }
    }
    console.log(user_obj);
    if (user_obj){
        response.json(user_obj);
    }else{
        response.json({status:'Sorry, try again'});
    }
    response.send('next step');
})

app.listen(3000,()=>{
    console.log('app is listening at loscalhost 3000');
})










// let a = 10;
// let b = 10;
// console.log(a+b);
