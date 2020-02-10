const express = require('express');
const bodyParser = require ('body-parser')
const MongoClient = require('mongodb').MongoClient

const app = express();
const port = 3000

app.use(bodyParser.urlencoded({extended: true}))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

const uri = "mongodb+srv://benj:<password>@classes-pfyts.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})



app.post('/classes', (req,res) => {
    console.log(req.body)
    database
})

