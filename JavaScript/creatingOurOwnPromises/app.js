const fakeRequest=(url)=>{
    return new Promise((resolve,reject)=>{
        const rand=Math.random();
        setTimeout(()=>{
            if(rand<0.5){
                resolve("YOUR FAKE DATA HERE");
            }
            reject("Request Error!");
            
        },1000);
    });
}

fakeRequest('/dogs/1')
    .then((data)=>{
        console.log("DONE WITH REQUEST!");
    })
    .catch((err)=>{
        console.log("OH NO!",err);
    })

const delayedColorChange=(color,delay)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            document.body.style.backgroundColor=color;
            resolve();
        },delay)
    })
}

delayedColorChange('red',1000)
    .then(()=>{
        return delayedColorChange('orange',1000)
    })

    .then(()=>{
        return delayedColorChange('yellow',1000)
    })