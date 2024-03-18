const mongoose = require('mongoose')

const connect = () => {
  return mongoose.connect('mongodb://localhost:27017/whatever', { useNewUrlParser: true })
}

const student = new mongoose.Schema({
    firstName: String
})

const Student = mongoose.model('student' , student)

connect()
    .then(connection => {
        const student = await Student.create({firstName:'Isuru'})
        console.log(student)
    })

    .catch(e => console.error(e))