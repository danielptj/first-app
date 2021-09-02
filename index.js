/*
* Este exemplo foi baseado no código escrito em:
* Utilizando a engine EJS para aplicações em NodeJS 
* (https://www.codementor.io/@nulldreams/utilizando-a-engine-ejs-para-aplicacoes-em-nodejs-dok81l3si)
*/

const express = require("express");
const app = express();
const routes = require("./routes");
const expressLayouts = require("express-ejs-layouts");
const { urlencoded } = require("express");

const port = 3000;
const address = "localhost";

const utils = require("./utils");
const faker = require("faker");
var randomBoolean = Math.random() < 0.5;

global.users =[];

for (let cont=0;cont<20;cont++){
    if(randomBoolean){voto="Sim"} else {voto="Não"};
    users.push({name:faker.name.findName(),email:faker.internet.email(),address:faker.address.streetAddress(),age:utils.getRandomByInterval(15,50,true),height:utils.getRandomByInterval(1.50,1.70,false).toFixed(2),vote:voto});
    randomBoolean = Math.random() < 0.5;
}

app.set('view engine','ejs');
app.use(expressLayouts);

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/',routes);

const server = app.listen(port,address,()=>{
    let host = server.address().address;
    let port = server.address().port;
    console.log(`> Servidor rodando em http://${host}:${port}`);
});