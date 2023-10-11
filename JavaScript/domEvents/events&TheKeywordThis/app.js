for(let i=0;i<=50;i++){
    let button=document.createElement('button');
    button.textContent="Click";
    document.body.appendChild(button);
}

for(let i=0;i<=10;i++){
    let h2=document.createElement('h2');
    h2.textContent="Click";
    document.body.appendChild(h2);
}

const makeRandColor=()=>{
    const r=Math.floor(Math.random()*255);
    const g=Math.floor(Math.random()*255);
    const b=Math.floor(Math.random()*255);
    return `rgb(${r}, ${g}, ${b})`;
}

const buttons=document.querySelectorAll('button');

for(let button of buttons){
    button.addEventListener('click',colorize);
}

const h2s=document.querySelectorAll('h2');

for(let h2 of h2s){
    h2.addEventListener('click',colorize);
}

function colorize(){
    this.style.backgroundColor=makeRandColor();
    this.style.color=makeRandColor();
}