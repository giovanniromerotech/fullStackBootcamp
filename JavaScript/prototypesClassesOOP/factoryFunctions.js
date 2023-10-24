/*function hex(r,g,b){
    return '#'+((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1);
}

function makeColor(r,g,b){
    const color={};
    color.r=r;
    color.g=g;
    color.b=b;
    color.rgb=function(){
        const{r,g,b}=this;
        return `rgb(${r},${g},${b})`;
    }
    return color;
}

const firstColor=makeColor(35,255,150);
console.log(firstColor.rgb());

function Color(r,g,b){
    this.r=r;
    this.g=g;
    this.b=b;
}

console.log(new Color(255,0,0));

Color.prototype.rgb=function(){
    const{r,g,b}=this;
    return`rgb(${r},${g},${b})`;
}

class Color{
    constructor(r,g,b,name){
        this.r=r;
        this.g=g;
        this.b=b;
        this.name=name;
    }

    greet(){
        return `HELLO FROM ${this.name}`;
    }
}

const magenta=new Color(255,67,89,'Magenta');
console.log(magenta.greet())*/
class Pet{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    eat(){
        return `${this.name} is eating`;
    }
}
class Cat extends Pet{
    constructor(name,age,livesLeft=9){
        super(name,age);
        this.livesLeft=livesLeft;
    }
    meow(){
        return 'MEOWWW!!';
    }
}

class Dog extends Pet{
    bark(){
        return "WOOF!!";
    }
}


const monty=new Cat('monty',9);
console.log(monty.eat());

const wyat=new Dog('wyat',10);
console.log(wyat.eat());
