const express = require('express');

const app = express();

app.route('/chat').post((req, res)=>{
    console.log("POST :: CHAT");
    res.status(200).end("POST :: CHAT");
})

app.route('/chat').get((req, res)=>{
    console.log(req);
    console.log("GET :: CHAT");
    res.status(200).end("GET :: CHAT");
})
app.route('/chat').put((req, res)=>{
    console.log("PUT :: CHAT");
    res.status(200).end("PUT :: CHAT");
})
app.route('/chat').delete((req, res)=>{
    console.log("DELETE :: CHAT");
    res.status(200).end("DELETE :: CHAT");
})
app.listen(8000, ()=>{
    console.log("8000 ON");
})