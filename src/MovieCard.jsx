import React from 'react'
import Stars from './Stars'

const MovieCard = ({name}) => {
 
  return (
    <div className='movie-card'>
        <h2> {name.title} </h2>
        <Stars rating={name.rating} />
        
       <img src={name.image} alt="" />
       <p>{name.date}</p>
    </div>
  )
}

export default MovieCard