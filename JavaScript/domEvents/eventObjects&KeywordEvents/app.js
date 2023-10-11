document.querySelector('button').addEventListener('click',function(evt){
    alert('Click');
    console.log(evt);
})

const input=document.querySelector('input');
input.addEventListener('keydown',function(){
    console.log("KEYDOWN");
});
input.addEventListener('keyup',function(e){
    console.log(e.key);
    console.log(e.code);
});

window.addEventListener('keydown',function (event){
    console.log(event.code);
    if(event.code==='KeyQ'){
        console.log("Exit");
    }
});