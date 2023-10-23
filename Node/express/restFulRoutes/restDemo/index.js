const express=require('express');
const app=express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.get('/tacos',(req,res)=>{
    res.send("GET /tacos response");
})

app.post('/tacos',(req,res)=>{
    const{name,age}=req.body;
    console.log("Your name is: "+name);
    console.log(`Age:${age}`);
})
app.listen(3000,()=>{
    console.log("ON PORT 3000");
});