const http = require('http')

const server = http.createServer((req,res)=>{
if(req.url === '/home'){
return res.end('Welcome to our home page');
}
if(req.url==='/about'){
  return  res.end('Here is our short story')
}
else {
return res.end(`
<h1>Oops!</h1>
<p> We can't seem to find the page you are looking for</p>
<a href="/home"> back home</a>
`)
}

})

server.listen(5555)
