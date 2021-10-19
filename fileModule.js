const {readFileSync, writeFileSync } = require('fs');
//const { writeFile } = require('fs/promises');
console.log('start')
//Reading a file path with the built in module (fs)
const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');
//console.log(first,second);

//writing a file path with the built in module (fs)
writeFileSync(
    './content/result.txt', //path to the file
    `Here is the result: ${first}, ${second}`, //text to be passed
    {flag: 'a'} //appending it to alreading exsiting text or it will delete the texts that was already existing
    )

console.log('done with this task')
console.log('starting the next one')