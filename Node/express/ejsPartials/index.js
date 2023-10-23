const express=require('express');
const app=express();
const path=require('path');
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')))
app.set('views',path.join(__dirname,'/views'));

app.get('/cats',(req,res)=>{
    const cats=[
        'Blue','Rocket','Monty','Stephanie','Winston'
    ]
    res.render('cats',{cats})
})

app.listen(3000,()=>{
    console.log('LISTENING ON PORT 3000');
});