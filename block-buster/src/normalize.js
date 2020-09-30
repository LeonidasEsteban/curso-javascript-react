function movieListAsMap(newList) {
  return newList.reduce((list, movie) => {
    list.set(movie.id, movie)
    return list
  }, new Map())
}


function getAllIds(list) {
  return list.map(movie => movie.id)
}

function getMostValuedIds(list) {
  return list.reduce((list, movie) => {
    if (movie.vote_average > 7) {
      list.push(movie.id)
    }
    return list
  }, [])
}

function getLeastValuedIds(list) {
  return list.reduce((list, movie) => {
    if (movie.vote_average <= 7) {
      list.push(movie.id)
    }
    return list
  }, [])
}


export {
  movieListAsMap,
  getAllIds,
  getMostValuedIds,
  getLeastValuedIds,
}