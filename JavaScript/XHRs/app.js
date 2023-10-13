
let url="https://swapi.dev/api/people/1/";
let dataName;
const req=new XMLHttpRequest();
req.onload=function(){
    console.log("IT LOADED!!!");
    const data=JSON.parse(this.responseText);
    dataName=data.name;
}
req.onerror=function(){
    console.log("ERROR!!!");
    console.log(this);
}
req.open("GET",url);
req.send();
console.log(dataName);

