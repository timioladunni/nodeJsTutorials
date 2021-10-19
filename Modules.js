const amount = 12
if(amount<10){
    console.log('small number')
}else{
    console.log('large number')
}

console.log(`hey it's my first node app!!!`)


//GLOBALS - NO WINDOWSS !!!!

//__dirname - path to current directory
//__filename - file name
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about env where the program is being executed
//console.log(__dirname);
//callback function
//setInterval(()=>{ 
//console.log("hello world")
//}, 1000)


//Modules in node js
//CommonJS, every file is module (by default)
//Encapsulated Code (only share minimum)

const names = require('./nameModule');
const sayHi = require('./utivModule');
const data = require('./alternativeWayToExport')
//require('./mindGrenade')
//sayHi('susan');
//sayHi(names.john);
//sayHi(names.peter);