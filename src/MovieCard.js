import React from 'react'

const MovieCard = ({name}) => {
 
  return (
    <div>
        <h2> {name.title} </h2>
        <h3> {name.rating}  </h3>
       
    </div>
  )
}

export default MovieCard