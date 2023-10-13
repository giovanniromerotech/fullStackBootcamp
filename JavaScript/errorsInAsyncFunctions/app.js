async function makeTwoRequest(){
    try{
        let data1=await fakeRequest('/page1');
        let data2=await fakeRequest('/page1');
        console.log(data1);
    }catch(e){
        console.log("CAUGHT AN ERROR: "+e);
    }
}