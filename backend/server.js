const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const notes = require('./data/notes');
const {connectDB} = require('./config/db')
const userRouter = require('./routes/userRouter');
const { errorHandler, notFound } = require('./middlewares/errorMiddleware');

const app = express();

app.use(express.json());
app.use(cors(['http://localhost:3000/']));

connectDB();

app.get('/',(req,res)=>{
    res.send('API is running')
})

app.get('/api/notes',(req,res)=>{
    res.send(notes)
})



app.use('/api/auth',userRouter)

app.use(notFound)
app.use(errorHandler)


const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>console.log(`Server is listening on PORT ${PORT}`))