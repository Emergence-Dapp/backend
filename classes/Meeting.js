const {sfAbi, sfAddress} = require('./utils');
const { ethers } = require('ethers');
const { Rating } = require('./Rating');



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



    closeMeeting(closingData) {
        this.isOpen = false;
        const scores = this.aggregateRatingScores();

        const provider = new ethers.providers.JsonRpcProvider(process.env.PROVIDER_URL);
        const signer = new ethers.Wallet(process.env.MUMBAI_KEY, provider);
        const sfContract = new ethers.Contract(sfAbi, sfAddress, signer);

        //whatever is needed when a meeting closes.
    }



    aggregateRatingScores() {
        const scores = this.ratings.map(rating => rating.rating);
        const numRatings = scores.length;
        const meanRating = scores.reduce((score1, score2) => score1 + score2, 0) / numRatings;

        return { numRatings, meanRating };
    }

}



module.exports = {
    Meeting
}