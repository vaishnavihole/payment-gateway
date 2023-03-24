import express from "express";
var bodyParser = require("body-parser");
const ejs = require('ejs');

const app = express();
app.use(express.json())

const PORT = 5000;

app.use(express_static(__dirname + '/views'))
app.engine('html', require('ejs').renderfile);
app.set('view engine',"html");
app.set("views", _dirname + '/views');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(PORT, ()=>{
console.log(`Server started on Port ${PORT}`)
})

// ejs help us to build html templatesin node
// embeded javascript templates
