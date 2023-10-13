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

async function rainbow(){
    await delayedColorChange('red',1000)
    delayedColorChange('orange',1000)
    return "ALL DONE"
}

rainbow()
.then((data)=>{
    console.log(data);
})

async function printRainbow(){
    await rainbow();
    console.log("END OF RAINBOX");
}


