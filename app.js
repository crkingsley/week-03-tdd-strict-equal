module.exports = {
  poorMovie: {
    acting: 'bad',
    plotHoles: 'many',
    specialEffects: 'poor',
  },
  goodMovie: {
    acting: 'good',
    plotHoles: 'none to few',
    specialEffects: 'impressive',
  },

  calculateMovieRating: function (movie) {
    let rating = 5

    switch (movie.acting) {
      case 'good':
        rating = rating + 1
        break
      case 'bad':
        rating = rating - 1
        break
      default:
    }
    switch (movie.plotHoles) {
      case 'none to few':
        rating = rating + 2
        break
      case 'many':
        rating = rating - 2
        break
      default:
    }
    switch (movie.specialEffects) {
      case 'impressive':
        rating = rating + 2
        break
      case 'poor':
        rating = rating - 2
        break
      default:
    }

    return rating
  }
}
