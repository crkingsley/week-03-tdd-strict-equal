const assert = require('assert');


describe('Movie Ratings', function (){
    it('3 reasons a movie is bad results in a 0 and a poor rating', function (){
        const rating = 10;
        assert.strictEqual(rating, 0)
    });
    it('3 reasons a movie is good results in a 10 and a good rating', function () {
        const rating = 0;
        assert.strictEqual(rating, 10)
    })
})
