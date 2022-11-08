var fs = require('fs');
let output = '';

const format = data => `\t${ data }\n`;

module.exports = {
    err: done => done(format('Error: command not found')),
    pwd: done => done(format(process.execPath.trim())),
    date: done => done(format(Date().split('(')[0])),
    echo: (done, file) => done(format(file)),
    cat: (done, file) => {
        fs.readFile('.', (err, file) => {
            if (err) throw err;
            done(file);
        });
    },
    head: (done, file) => done(format(file)),
    tail: (done, file) => done(format(file)),
    ls: done => {
        fs.readdir('.', (err, files) => {
            if (err) throw err;
            files.forEach( file => {
                output += format(`- ${ file.toString() }`);
            })
            done(output);
            output = '';
        });
    },
}