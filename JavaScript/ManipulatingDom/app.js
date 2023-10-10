const allImages=document.getElementsByTagName('img');
for(let img of allImages){
    console.log(img.src);
}

const squareImages=document.getElementsByClassName('square');
console.log(squareImages);

const links=document.querySelectorAll('p a');

for(let link of links){
    console.log(link.href);
}

const allLinks=document.querySelectorAll('a');
for(let link of allLinks){
    link.innerText='I AM A LINK!!!';
}

document.querySelector('#banner').id='whoops';
document.querySelector('#whoops').id='banner';
const firstLink=document.querySelector('a');
firstLink.getAttribute('href');
firstLink.setAttribute('href','www.google.com');

for(let link of allLinks){
    link.style.color='cyan';
    link.style.textDecorationColor='magenta';
}

console.log(window.getComputedStyle(h1).fontSize);

const h2=document.querySelector('h2');
h2.setAttribute('class','purple');

h2.classList.add('border');
h2.classList.remove('border');
h2.classList.contains('border');
h2.classList.toggle('purple');

const firstBold=document.querySelector('b');

const paragraph=firstBold.parentElement;

paragraph.childElementCount;

paragraph.children;

const squareImg=document.querySelector('img');

squareIma.parentElement;

squareImg.nextSibling;

squareImg.nextElementSibling;

const newH3=document.createElement('h3');
newH3.innerText='I am new!';
document.body.appendChild(newH3);

const p=document.querySelector('p');
p.append('i am new text');

const newB=document.createElement('b');
newB.append('Hi!');
p.prepend(b);

const newH2=document.createElement('h2');
h2.append('Are adorable');
const h1=document.querySelector('h1');
h1.insertAdjacentElement('afterend',h2);

const newH3=document.createElement('h3');
newH3.innerText='I am a h3';
h1.after(h3);

const firstLi=document.querySelector('li');
const ul=firstLi.parentElement;
ul.removeChild(firstLi);

const b=document.querySelector('b');
const img1=document.querySelector('img');
img.remove();

