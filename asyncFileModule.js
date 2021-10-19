//using asynchronous
const {readFile, writeFile } = require('fs');
// we need to provide a callback for a asynchronous function
// we run the callback when we are done with the functionality
//Similar with add event listner, the callback function will run when the button is clicked


//asynchronous method takes in all the requests then starts processing
//compared to synchronous method that takes in one method, finishes processing, before taking
//in the next


//This fuction is asynchrous and it takes all the requests before starting
//to processes it
//It reads two different files using the callback function and then 
//Writes both files to a new file
readFile('./content/first.txt', // reads first file
        'utf8', //text format
(err, result)=>{ //callback function to check if there is an error
    if(err) {
        console.log(err)
        return // return error is there is one
    }
    const first = result // if no error, save the result here
    readFile('./content/second.txt', //read second file
                'utf8', //tect format
    (err,result)=>{ //callback function to check if there is an error
       if(err) {
        console.log(err)
        return  //return error if there is one
    } 
     const second = result // if no error, save the second file here
        writeFile('./content/result-async.txt', // write a new file
        `Here is the result : ${first}, ${second}`, // text to be appended
        (err, result)=>{ //callback function to check for errors
            if(err){
                console.log(err)
                return  //return error if there is one
            }
            console.log(result) //display the result but it will not show on the console, it will create a new file
        })
    })
})
