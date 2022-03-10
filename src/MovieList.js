import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({movie}) => {
  return (
    <div>
        
{movie.map((el,i) => (
  <MovieCard key={i} name={el} />
))}

    </div>
  )
}

export default MovieList
