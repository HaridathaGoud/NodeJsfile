const express = require("express")
const cors = require('cors')
//const authenticate = require("./middlewares/auth");
const carsRouting = require('./middlewares/cars')
const bodyParser = require("body-parser")

const studentsRout = require("./middlewares/students")
const productsRout = require('./middlewares/products')
const sampleDataRout = require("./routing/sampledata")
const sampleMongoRoute = require("./routing/mongodata")
const PractiseRouting = require('./routing/practiceData')


const Hari = express()
//Hari.use(authenticate)
Hari.use(cors({ origin: true }));
Hari.use(bodyParser.json());

Hari.use("/mongo", sampleMongoRoute)
Hari.use("/sample", sampleDataRout)
Hari.use("/data",PractiseRouting)
Hari.use("/students", studentsRout)
Hari.use("/item", productsRout)
Hari.use("/cars", carsRouting)


Hari.get("/", (req, res) => {//App is a method and/is a default and call back two parameters
    res.status(200).send("Well come to Home Page")
})





const PORT = process.env.PORT || 5006;
Hari.listen(PORT, () => {
    console.log(`App is Listening on ${PORT}`)
})


