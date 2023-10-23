const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/movieApp')
.then(()=>{
    console.log("Connection open!")
})
.catch(err=>{
    console.log("Error Connection!s")
})

const movieSchema=new mongoose.Schema({
    title:String,
    year:Number,
    score:Number,
    rating:String
});

const Movie=mongoose.model('Movie',movieSchema);
const amadeus=new Movie({title:'Amadeus',year:1986,score:9.2,rating:'R'})
amadeus.save();

Movie.insertMany([
    {title:'The Godfather',year:1972,score:9.2,rating:'R'},
    {title:'Pulp Fiction',year:1994,score:8.9,rating:'R'},
    {title:'Schindler\'s List',year:1993,score:8.9,rating:'R'},
    {title:'Forrest Gump',year:1994,score:8.8,rating:'PG-13'},
    {title:'The Dark Knight',year:2008,score:9.0,rating:'PG-13'},
    {title:'Fight Club',year:1999,score:8.8,rating:'R'},
    {title:'The Matrix',year:1999,score:8.7,rating:'R'},
    {title:'The Lord of the Rings: The Return of the King',year:2003,score:8.9,rating:'PG-13'}
])