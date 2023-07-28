const express = require('express');
//const { object } = require('joi');

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://okayhari20:welcome1234@cluster0.tehugzd.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })

let PractiseRouting = express.Router();

// Getting Data
PractiseRouting.get("/", async (req, res) => {
    try {
        await client.connect();
        const db = client.db("haridathaDataBase");
        const collection = db.collection("haridatha");
        const data = collection.find();

        let _data = [];
        await data.forEach((item) => {
            _data.push(item)
        })
        res.status(200).send(_data)
    }
    catch (error) 
    {
        console.log(error)
    }
    finally 
    {
        await client.close();
    }
});

// Getting Pariticular Record
PractiseRouting.get("/:id", async (req, res) => {
    try {
        await client.connect();
        const db = client.db("haridathaDataBase");
        const collection = db.collection("haridatha");

        const dataa = await collection.findOne({ _id: new ObjectId(req.params.id) });
        res.status(200).send(dataa);
    } 
    catch (error) 
    {
        console.log(error)
    }
    finally 
    {
        await client.close();
    }
})


// Inserting New Record
PractiseRouting.post("/insert", async (req, res) => {
    try {
        await client.connect();
        const db = client.db("haridathaDataBase").collection("haridatha");
        await db.insertOne(req.body);
        res.status(200).send(" Inserted ");
    } 
    catch (error) 
    {
        console.log(error);
    } 
    finally 
    {
        await client.close();
    } 
})

// Updating Record
PractiseRouting.put("/:id", async (req, res) => {
    try {
        await client.connect();
        const db = client.db("haridathaDataBase").collection("haridatha");
        await db.updateOne({ _id: new ObjectId(req.params.id) }, { $set: req.body });
        res.status(200).send(" Updated ");
    } 
    catch (error) 
    {
        console.log(error);
    } 
    finally 
    {
        await client.close();
    }   
})

// deleting Record
PractiseRouting.delete("/:id", async (req, res) => {
    try {
        await client.connect();
        const db = client.db("haridathaDataBase")
        const collection = db.collection("haridatha");
        await collection.deleteOne({ _id: new ObjectId(req.params.id) });
        res.status(200).send(" Deleted ");
    } 
    catch (error) 
    {
        console.log(error);
    } 
    finally
    {
        await client.close();
    } 
})

module.exports = PractiseRouting;