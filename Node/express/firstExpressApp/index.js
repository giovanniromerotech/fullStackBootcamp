const express=require('express');
const app=express();
const port=3000;

/*app.use((req,res)=>{
    console.log("We got a new request");
    console.dir(req);
    res.send({color:"red"});
})*/

//cats=>'meow'
//dogs=>'woof'
//'/'

app.post('/cats',(req,res)=>{
    res.send('POST REQUEST TO /cats')
})

app.get('/cats',(req,res)=>{
    res.send('MEOW');
})

app.get('/dogs',(req,res)=>{
    res.send('WOOF');
})

app.get('/',(req,res)=>{
    res.send('This is the home page!')
})

app.get('/r/:subreddit',(req,res)=>{
    const {subreddit}=req.params;
    console.log(subreddit);
    res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`)
})

app.get('/r/:subreddit/:postId',(req,res)=>{
    const{subreddit,postId}=req.params;
    res.send(`<h1>Browsing the ${subreddit} post ${postId}</h1>`)
})

app.get('/search',(req,res)=>{
    const {q}=req.query;
    if(!q){
        res.send("NOTHING FOUND")
    }else{
        res.send(`<h1>Search results for: ${q}</h1>`)
    }
})

app.get('*',(req,res)=>{
    res.send(`I don't know that path!`);
})


app.listen(port,()=>{
    console.log('LISTENING ON PORT 3000!');
});