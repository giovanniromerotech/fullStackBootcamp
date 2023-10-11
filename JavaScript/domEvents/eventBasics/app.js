const btn=document.querySelector('#v2');
btn.onclick=function(){
    console.log("You clicked me!");
}

btn.onmouseenter=function(){
    console.log("Stop tounching the botton");
}

const btn3=document.querySelector('#v3');
btn3.addEventListener('mouseup',()=>{
    alert('Clicked');
});

function twist(){
    console.log('TWIST');
}

function shout(){
    console.log('SHOUT');
}

const tasButton=document.querySelector('#tas');

tasButton.addEventListener('click',twist,{once:true});
tasButton.addEventListener('click',shout);

