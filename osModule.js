//OS MODULES
//os is built-in so you don't have to download it
// but you need to download some before they can work

const os = require('os');

// info about current user
const user = os.userInfo();
console.log(user);

// method returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS);