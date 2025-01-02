let express = require("express");
const { log } = require("node:console");


let app = express();
app.listen(8888);
console.log("Runnning...");

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/hi", (req, res) => {
    res.send("hi world");
});

app.get("/hello", (req, res) => {
    res.send("hello world");
});


app.get("/echo", (req, res) => {
    res.send(req.query.msg)
});

const fs = require('node:fs')
app.get('/save', (req, res) => {
    let data = req.param('data');
    console.log(data);
    fs.writeFileSync("C:/Temp/read.txt", data)
    res.send(data);
});

app.get("/read", (req, res) => {
    res.send(fs.readFileSync('C:/Temp/read.txt', 'utf-8'));
});


app.get("/google", (req, res) => {
    res.sendFile('C:/kmwork/nodeTest/public/google.html');
});

app.use('/calc', express.static(__dirname + '/public'));

app.get("/add", (req, res) => {
    var p1 = req.param('p1');
    var p2 = req.param('p2');
    var result = Number(p1) + Number(p2);
  
    res.send(result.toString());
});

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(bodyParser.text());


// curl http://localhost:8888/calculator -X POST -d "1+2" -H "Content-Type: text/plain"
app.post("/calculator", (req, res) => {
    var data = req.body;
    // console.log(data);
    var result = eval(data);
    res.send(String(result));
});
  