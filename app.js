const express = require('express');
const { ethers } = require('ethers');
const cors = require('cors');



const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors({
    origin: "*"
}))

const port = process.env.PORT || 5001;



app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.post('/', (req, res) => {
    console.log(req.body);
    res.send('{"bruh": "1"}');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})