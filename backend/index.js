const express = require('express')
const app = express()
const port = 9090

const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors(),bodyParser.json())
var cars = [
    {
        id : 1,
        brand : 'BMW',
        price : 1000000
    },
    {
        id : 5,
        brand : 'Volvo',
        price : 500000
    },
    {
        id : 9,
        brand : 'Saab',
        price : 450000
    }

]
app.get('/cars/:id',(req,res)=>{   //get some car
    let index = cars.findIndex((car)=>{
        return car.id == req.params.id
    })
    let found = cars[index]
    if(!found){
        res.json({'message':'Fail'})
    }else{
    res.json({'message':'Succeed',found})
    }
})
app.get('/cars', (req,res)=>res.json(cars)) // get all car 



app.delete('/cars/:id', (req,res)=>{
    if(req.params.id>cars[cars.length-1].id){
        res.json({'message':'Fail'})
    }else{
        var newCars = cars.filter(cars=>{
            return cars.id != req.params.id
        })
        cars = newCars
        res.json({'message':'Succeed',cars})
    }
    console.log(cars)
})

app.put('/cars/:id',(req,res)=>{
    
    let index = cars.findIndex(cars=>cars.id==req.params.id)
    if(cars[index]){
        cars[index].brand = req.body.brand
        cars[index].price = req.body.price
        res.json({'message':'Succeed',cars})
    }else{
        res.json({'message':'Fail'})
    }
})

app.post('/cars',(req,res)=>{
    let newCar  = {}
    newCar.id = cars[cars.length-1].id+1
    newCar.brand =  req.body.brand
    newCar.price =  req.body.price
    
    cars.push(newCar)
    res.json({'message':'Succeed',cars})
})

app.listen(port ,()=>{
    console.log("ONLINE WITH PORT : 9090")
})