const assert = require('assert');

const app = require('../app.js')

let sharktopus = app.poorMovie
let jurassicPark = app.goodMovie

describe('Movie Ratings', function () {
    it('3 reasons a movie is bad results in a poor rating', function () {
        const rating = app.calculateMovieRating(sharktopus);
        assert.strictEqual(rating, 0);
    });

    it('3 reasons a movie is good results in a good rating', function () {
        const rating = app.calculateMovieRating(jurassicPark);
        assert.strictEqual(rating, 10);
    })
})
