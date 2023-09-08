const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const notes = require('./data/notes');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send('API is running')
})

app.get('/api/notes',(req,res)=>{
    res.send(notes)
})

app.get('/api/note/:id',(req,res)=>{
    const note = notes.find((note)=>note._id === req.params.id);
    res.send(note)
})
const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>console.log(`Server is listening on PORT ${PORT}`))