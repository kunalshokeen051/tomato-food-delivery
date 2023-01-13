const express = require ("express");
const bodyParser = require ("body-parser");
const http = require ("http");
require('dotenv').config();


app = new express();
server = http.createServer(app); 
PORT=0;
STATUS = process.env.STATUS
STATUS === 'production'?(PORT = process.env.PROD_PORT):(PORT = process.env.DEV_PORT);

app.use(express.static('public'));

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/index.html");
})



app.post("/",(request,response)=>{

});




server.listen(PORT,()=>{
    console.log("------------------------")
    console.log("Project is in "+STATUS+" mode and running on port: "+PORT)
    console.log("------------------------")
})