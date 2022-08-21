/*
  Holds all open meetings, and manages closing meetings.

  NOTE: on-chain closing call should be placed in the Meeting.closeMeeting funciton.
*/

const { Meeting } = require('./Meeting');


class Meetings {

    constructor(){
      this.meetings = {};
    }
  
    addMeeting(meetingId) {
      const newMeeting = new Meeting();
  
      if(this.meetings[meetingId] !== undefined) return;
  
      this.meetings[meetingId] = newMeeting;
    }
  


    removeMeeting(closingData) {
        const meetingId = closingData.id;

        const meetingToClose = this.meetings[meetingId];

        if(meetingToClose == undefined)return;


        meetingToClose.closeMeeting(closingData); //do neccessary closing ops.


        //TODO: questionable line..
        this.meetings[meetingId] = undefined; //set meeting to undefined
    }







    addMeetingsRating(ratingData) {
        const meetingId = ratingData.id;
        const meeting = this.meetings[meetingId];

        if(meeting == undefined)return;
        meeting.addRating(ratingData);
    }



    

}
  








module.exports = {
    Meetings
}