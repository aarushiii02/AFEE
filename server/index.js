const express=require('express')
const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/Backend').then(()=>{
    console.log('connect hogya')
}).catch((err)=>{
console.log(err)
})
const app=express()
app.get('/',(req,res)=>{
    res.send('hello')
})
app.listen(3000,()=>{
    console.log('server runing')
})