let url="https://swapi.dev/api/people/1/";

/*axios.get(url)
.then(res=>{
    console.log(res.data);
})
.catch((e)=>{
    console.log(e);
})*/

const getStarWarsPerson=async (id)=>{
    try{
        const res=await axios.get(`https://swapi.dev/api/people/${id}/`);
        console.log(res.data);
    }catch(e){
        console.log(e);
    }
}

getStarWarsPerson(3);