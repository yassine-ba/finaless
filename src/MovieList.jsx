import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({movies}) => {
  return (
    <div className='movie-list'>
        
{movies.map((el) => (
  <MovieCard  name={el} />
))}

    </div>
  )
}

export default MovieList
