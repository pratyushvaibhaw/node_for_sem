const fs = require('fs');
// fs.writeFileSync("./test.txt","Hello this is the test file");

fs.writeFile("./test.txt","This is file is changed for the second time",(err)=>{})



fs.readFile("./contacts.txt","utf-8",(err,res)=>{
    if(err)
        console.log("Error ",err)
    else
        console.log(res)
})

fs.appendFileSync("./contacts.txt","\nNew Person : +91 ----------")

const a = fs.readFileSync("./contacts.txt","utf-8")
console.log(a)

fs.copyFile("./contacts.txt","./copy.txt",(err)=>{})

fs.unlink("./copy.txt",(err)=>{
    if(err) console.log(err)
})