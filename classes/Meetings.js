/*
  Holds all open meetings, and manages closing meetings.

  NOTE: on-chain closing call should be placed in the Meeting.closeMeeting funciton.
*/


class Meetings {

    constructor(){
      this.meetings = {};
    }
  
    addMeeting(meetingId) {
      const newMeeting = new Meeting();
  
      if(this.meetings[meetingId] !== undefined) return;
  
      this.meetings[meetingId] = newMeeting;
    }
  
    removeMeeting(meetingId) {
      const meetingToClose = this.meetings[meetingId];
      if(meetingToClose == undefined)return;
  
  
      meetingToClose.closeMeeting(); //do neccessary closing ops.
  
      this.meetings[meetingId] = undefined; //set meeting to undefined
    }  
}
  
  
  
  
  
  
  
class Meeting {

    constructor() {
        this.ratings = []; //will be an array of Rating objects.
        this.isOpen = true;
    }


    addRating(ratingData) {
        if(!this.isOpen)return;

        const rating = new Rating(ratingData);
        this.ratings.push(rating);
    }



    closeMeeting() {
        this.isOpen = false;
        const scores = this.aggregateRatingScores();

        //whatever is needed when a meeting closes.
    }



    aggregateRatingScores() {
        const scores = this.ratings.map(rating => rating.rating);
        const numRatings = scores.length;
        const meanRating = scores.reduce((score1, score2) => score1 + score2, 0) / numRatings;

        return { numRatings, meanRating };
    }

}









class Rating {
    constructor(ratingData) {
        Object.assign(this, ratingData);
    }
}


module.exports = {
    Meetings,
    Rating,
    Meeting
}