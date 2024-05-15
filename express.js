// import packages
const path = require("path");
const fs = require("fs");

// get first arguments 
const firstARG = process.argv.slice(2)

// if create schema arguments
if(firstARG[0] === 'create-schema') {
    // file path
    const schemaFilePath = path.resolve(__dirname,"schema")

    // file content 
    const content = "// imoprt database\n" 

    // create file 
    fs.writeFile(schemaFilePath,)

    console.log(schemaFilePath)
}