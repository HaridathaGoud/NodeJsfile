const express = require('express')

carsRouting=express.Router()


let cars = [
    {

        id:1,
        Car:"BMW",
        Rating:5,
        Modelyear:2023
    },{
        id:2,
        Car:"Innova",
        Rating:4.5,
        Modelyear:2021
    },{
        id:3,
        Car:"Thar",
        Rating:4,
        Modelyear:2020
    },{
        id:4,
        Car:"Fortuner",
        Rating:5,
        Modelyear:2022
    }
]

carsRouting.get('/',(req,res)=>{
    res.status(200).send(cars)
})

carsRouting.get("/:id", (req, res) => {
    let car = cars.find(item => item.id == req.params.id)
     if (car) {
        res.status(200).send(car)
     } else {
        res.status(500).send('Data Not Exist')
     }
  })

  carsRouting.post("/upd",(req,res)=>{
    let item =req.body;
    item.id = cars.length+1;
    cars.push(item);
   res.status(200).send(item);
})

carsRouting.put('/:id',(req,res)=>{
    const _item =req.body
    cars.forEach((value,index)=>{
      if(value.id==req.params.id){
        cars[index]=_item
      }
 })
  res.status(200).send(_item)
 })

 carsRouting.delete('/:id', (req, res) => {
    const { id } = req.params;
    const deleted = cars.find(cars => cars.id == id)
    if (deleted) {
       cars = cars.filter(cars => cars.id != id)
       res.status(200).send(deleted)
    }
    else {
       res.status(404).send("Record not exist")
    }
 })

module.exports=carsRouting