#!/usr/bin/env node

//  lstat() - used to get some info about one single file or folder at a time


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

    /*
    //Solution 1
    const allStats = Array(fileNames.length).fill(null);
    for (const filename of fileNames) {
        const index = fileNames.indexOf(filename);
        fs.lstat(filename, (err, stats) => {
            if (err) {
                throw new Error(err);
            }
            allStats[index] = stats;

            const readyStats = allStats.every((stats) => {
                return stats;
            });

            if (readyStats) {
                allStats.forEach((stats, index) => {
                    console.log(fileNames[index], stats.isFile());
                });
            }
        });
    }
    //End of Solution 1
     */

    //  Solution 2
    //      Method #1
    // const util = require('util');
    // const lstat = util.promisify(fs.lstat);
    //      Method #2
    const lstat = (filename) => {
        return new Promise((resolve, reject) => {
            fs.lstat(filename, (err, stats) => {
                if (err) {
                    reject(err);
                }

                resolve(stats);
            });
        });
    };

    //  Method #3
    // const {lstat} = fs.promises;
});
