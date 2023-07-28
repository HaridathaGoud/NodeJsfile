const express = require('express')

const {MongoClient,ServerApiVersion,ObjectId} = require('mongodb');
const uri = "mongodb+srv://okayhari20:welcome1234@cluster0.tehugzd.mongodb.net/?retryWrites=true&w=majority";
const client= new MongoClient(uri,{useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })

sampleMongoRoute = express.Router()

//Geting Data From MongoDb
sampleMongoRoute.get("/",async(req,res)=>{
    await client.connect();
    const db=  client.db("haridathaDataBase");
    const collection = db.collection("haridatha");
    const data = collection.find();
    
    let _data = [];
    await data.forEach(item=>{
        _data.push(item)
    });
    await client.close();
    res.status(200).send(_data);
})

//  create record
sampleMongoRoute.post("/", async (req, res) => {
   // try {
      //await validateSchema(req.body);
      await client.connect();
      const db = client.db("haridathaDataBase");
      const collection = db.collection("haridatha");
      await collection.insertOne(req.body);
      res.status(200).send("Document Inserted")
  //}catch(error){
      res.status(500).send(error)
  //}
})


// udating data
sampleMongoRoute.put('/:id',async (req , res) => {
    await client.connect();
    const db = client.db("haridathaDataBase");
    const collection = db.collection("haridatha");
    await collection.updateOne({ _id: new ObjectId(req.params.id)} , { $set: req.body } )
    res.status(200).send(" Updated Successfully ");
})


// deleting data
sampleMongoRoute.delete("/:id",async(req,res)=>{
    await client.connect();
    const db = client.db("haridathaDataBase");
    const collection = db.collection("haridatha");
    await collection.deleteOne({_id:new ObjectId(req.params.id) })
    res.status(200).send("Deleted SuccessFully")
})

module.exports = sampleMongoRoute 
