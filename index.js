#!/usr/bin/env node
const fs = require("fs");
let args = process.argv.splice(2,);

let flags = [];
let files = [];
for(let i of args){
    if(i[0] == "-"){
        flags.push(i);
    }else{
        files.push(i);
    }
}

for(let file of files){
    let fileData = fs.readFileSync(file, "utf-8");
    for(let flag of flags){
        if(flag  == "-rs"){
            fileData = fileData.split(" ").join("");
        }
        if(flag == "-rn"){
            console.log("Content");
            fileData = fileData.split("\n").join(" ");
        }
    }
    console.log(fileData);
}