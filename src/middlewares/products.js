const express = require("express")


let productsRout = express.Router()

let products=[
    {   id:1,
        item:"Redmi",
        type:"Touch",
        price:"10k"
    },{ 
        id:2,
        item:"Sumsung",
        type:"Keypad",
        price:"7k"
    },{
        id:3,
        item:"Vivo",
        type:"Touch",
        price:"25k"
    }
]
productsRout.get("/", (req, res) => {
    res.status(200).send(products)
 })

 productsRout.get("/:id", (req, res) => {
    let all = products.find(item => item.id == req.params.id)
     if (all) {
        res.status(200).send(all)
     } else {
        res.status(500).send('Data Not Exist')
     }
  })

productsRout.post("/new",(req,res)=>{
    let record =req.body;
    record.id = products.length+1;
    products.push(record);
   res.status(200).send(record);
})


 productsRout.put('/:id',(req,res)=>{
    const _record =req.body
    products.forEach((value,index)=>{
      if(value.id==req.params.id){
        products[index]=_record
      }
 })
  res.status(200).send(_record)
 })

 productsRout.delete('/:id', (req, res) => {
    const { id } = req.params;
    const delet = products.find(products => products.id == id)
    if (delet) {
        products = products.filter(products => products.id != id)
       res.status(200).send(delet)
    }
    else {
       res.status(404).send("Record not exist")
    }
 })



 module.exports = productsRout