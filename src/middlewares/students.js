const express = require("express")


let studentsRout = express.Router()

let students = [{
   id: 1,
   Name: "SaikumarB",
   Age: 24,
   Gender: "Male"
}, {
   id: 2,
   Name: "Priya1",
   Age: 23,
   Gender: "Female"
}, {
   id: 3,
   Name: "Haridatha",
   Age: 23,
   Gender: "Male"
}, {
   id: 4,
   Name: "Priya2",
   Age: 23,
   Gender: "Female"
}
]

studentsRout.get("/", (req, res) => {
   res.status(200).send(students)
})

studentsRout.get("/:id", (req, res) => {
   let std = students.find(item => item.id == req.params.id)
   if (std) {
      res.status(200).send(std)
   } else {
      res.status(500).send('Data Not Exist')
   }
})

studentsRout.post('/create', (req, res) => {
   let newstd = req.body;
   newstd.id = students.length + 1;
   students.push(newstd);
   res.status(200).send(newstd);

})

studentsRout.put('/:id', (req, res) => {
   const _students = req.body
   students.forEach((value, index) => {
      if (value.id == req.params.id) {
         students[index] = _students
      }
   })
   res.status(200).send(_students)
})

studentsRout.delete('/:id', (req, res) => {
   const { id } = req.params;
   const deleted = students.find(students => students.id == id)
   if (deleted) {
      //console.log(deleted)
      students = students.filter(students => students.id != id)
      res.status(200).send(deleted)
   }
   else {
     // console.log(deleted)
      res.status(404).send("not exist")
   }
})


module.exports = studentsRout