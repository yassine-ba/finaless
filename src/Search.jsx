import React from 'react'
import Stars from './Stars'

const Search = ({text,handleText,handleRating,rating}) => {
  return (
    <div>   our movies 
        <input type="text" value={text} onChange={handleText}/>
        <Stars rating={rating} handleRating={handleRating}/>
    </div>
  )
}

export default Search