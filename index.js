//https://glitch.com/~funky-blob
const express = require('express');
const app = express();
const expressip = require('express-ip');
const os = require('os');

app.use(express.json());
app.use(expressip().getIpInfoMiddleware);

const jsObj = {
    ipadress: "",
    language: "",
    software: ""
}

app.get('/', (req,res) => {
    res.send('Todo va muy bien!');
});

app.get('/whoiam', (req,res) => {
    const headers = JSON.stringify(req.headers["accept-language"]);
    const ips = JSON.stringify(req.headers.host)
    const soft = JSON.stringify(req.headers["user-agent"]);
     jsObj.ipadress = `${ips}`
     jsObj.language = `${headers}`;
     jsObj.software = `${soft}`;

    res.send(jsObj)
});
function tryOne(name){
    console.log("Hi Mr: " + name + " Are you ready to Hack?" );
}
tryOne("IanCarlo")

app.listen(3000, () => console.log('You are listening on port 3000... y siga hackeando!!'))
