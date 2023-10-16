const fs = require('fs');
const folderName = process.argv[2] || 'Project'
/*fs.mkdir('Dogs',{recursive:true},(err)=>{
    console.log("IN THE CALLBACK");
    if(err) throw err;
})

console.log("I COME AFTER MKDIR IN THE FILE!");*/
try {
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`);
    fs.writeFileSync(`${folderName}/app.css`);
    fs.writeFileSync(`${folderName}/app.js`);
} catch (e) {
    console.log(e);
}
