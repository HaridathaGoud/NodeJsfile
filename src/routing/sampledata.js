const express = require("express")
//const JOI = require("joi")

const { MongoClient, ServerApiVersion,ObjectId } = require('mongodb');
const uri = "mongodb+srv://okayhari20:welcome1234@cluster0.tehugzd.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
sampleDataRout = express.Router()

// const sampleSchema = JOI.object({
//   name: JOI.string().min(4).required(),
//   age: JOI.number().required()
// })

// function validateSchema(obj) {
//   return sampleSchema.validateAsync(obj)
// }

sampleDataRout.get("/", async (req, res) => {
  await client.connect();
  const db = client.db("haridathaDataBase");
  const collection = db.collection("haridatha");
  const data = collection.find();
  let _students = [];
  await data.forEach(item => {
    _students.push(item)
  });
  await client.close();
  res.status(200).send(_students)
})

sampleDataRout.post("/", async (req, res) => {
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
                                   

sampleDataRout.put('/:id', async (req, res) => {
  await client.connect();
  const db = client.db('haridathaDataBase');
  const collection = db.collection('haridatha')
  await collection.updateOne({ _id: new ObjectId(req.params.id), },{ $set: req.body })
  res.status(200).send('Successfully Updated');
})


sampleDataRout.delete('/:id', async (req, res) => {
  await client.connect();
  const db = client.db('haridathaDataBase');
  const collection = db.collection('haridatha')
  await collection.deleteOne({ _id:new ObjectId(req.params.id) })
  res.status(200).send('Deleted Successfully');
})



module.exports = sampleDataRout
