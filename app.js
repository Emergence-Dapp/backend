const express = require('express');
const { ethers } = require('ethers');
const cors = require('cors');

const { Meetings } = require('./classes/exports');


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



app.post('/submit-rating', (req, res) => {

  const ratingData = req.body;

  //add rating to appropriate meeting
  meetings.addMeetingsRating(ratingData);

})



app.post('/open-meeting', (req, res) => {

  //instantiate a new Meeting in Meetings.

  console.log('a');

  const meetingId = req.body.id;

  meetings.addMeeting(meetingId);


})



app.post('/close-meeting', (req, res) => {
  
  const closingData = req.body;

  meetings.removeMeeting(closingData);


})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




