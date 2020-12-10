const express = require("express");
const { fork } = require('child_process');

const API_PORT = 3001

const app = express()
app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));

app.get("/heavy", async (_req, res) => {
    var compute = fork("child.js")
    compute.send('start');
    compute.on("message", result => {
        console.log(result);
        res.send({sum:result});
    })
})

app.get("/normal", async (_req, res) => {
    res.send("normal"); 
})