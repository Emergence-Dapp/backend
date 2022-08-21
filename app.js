const express = require('express');
const { ethers } = require('ethers');
const cors = require('cors');

const { Meetings, Meeting, Rating } = require('./classes/Meetings');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors({
    origin: "*"
}));



const port = process.env.PORT || 5001;
const meetings = new Meetings();





app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.post('/', (req, res) => {
    console.log(req.body);
    res.send('{"bruh": "1"}');
})


app.post('/submit-rating', (req, res) => {

  console.log(req.body);

  const rating = new Rating(req.body);
  //add rating to appropriate meeting

  console.log(rating);

  res.send('{"bruh": "1"}');

})



app.post('/open-meeting', (req, res) => {

  //instantiate a new Meeting in Meetings.

  const meetingId = req.body.id;

  console.log(meetingId);

  meetings.addMeeting(meetingId);

})



app.post('/close-meeting', (req, res) => {
  
  const meetingId = req.body.id;

  console.log(meetingId);

  meetings.removeMeeting(meetingId);

})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




