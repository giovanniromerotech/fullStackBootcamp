/*async function hello(){

}*/

const sing=async ()=>{
    throw new Error("UPS")
    return 'Hi'
};

sing()
.then((data)=>{
    console.log("PROMISE RESOLVE WITH: "+data);
})
.catch(err=>{
    console.log("New Error: "+err)
})


const login=async (username,password)=>{
    if(!username||!password) throw 'Missing Credentials'
    if(password==='giovanni') return 'WELCOME!'
    throw 'Invalid Password'
}

login('gio')
.then((msg)=>{
    console.log("LOGGED IN")
    console.log(msg)
})
.catch((err)=>{
    console.log(err);
})
