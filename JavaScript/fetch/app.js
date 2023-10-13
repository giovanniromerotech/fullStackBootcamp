let url="https://swapi.dev/api/people/1/";

fetch(url)
.then(res=>{
    console.log(res);
    return res.jason();
})

.then((data)=>{
    console.log(data);
})
.catch(e=>{
 console.log(e);
})

const loadStarWarsPeople=async()=>{
    const res=await fetch(url);
    const data=await res.json();
    console.log(data);
}

loadStarWarsPeople();