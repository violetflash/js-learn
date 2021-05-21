#!/usr/bin/env node

const fs = require('fs'); //https://nodejs.org/api/fs.html
//https://nodejs.org/api/process.html#process_process_cwd
// const process = require('process'); //dont need of this, cause it's already been added to the global scope
// automatically on every project

fs.readdir(process.cwd(), (err, fileNames) => {
    //EITHER
    //err === an error object, which means something went wrong
    //OR
    //err === null, which means everything is OK (reading files was successfully)
    if (err) {
        //err handling code here
        throw new Error('An Error occurs:', err);
    }

    console.log(fileNames);

});
