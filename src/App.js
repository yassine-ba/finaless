import React, { useState } from 'react'
import MovieCard from './MovieCard'
import MovieFilter from './MovieFilter'
import MovieList from './MovieList'
import './App.css'
 const movies = [
  {   id:Math.random(),
      title :"saw",
      description:"Director: James Wan · Producer , Horror and thriller",
      posterURl:"",
      rating: 3 ,
  },
  {    id:Math.random(),
      title :"spiderman",
      description:" Director: Sam Raimi · Producer: Ian , Action and fantasy",
      posterURl:"",
      rating: 4 ,
  } ,
  {    id:Math.random(),
      title :" before sunset",
      description:"Director: Richard Linklater · Producer: Anne Walker-McBay , Romance and Drama",
      posterURl:"",
      rating:3 ,
  }
]



const App = () => {
  const [movie, setMovie] = useState(movies)
  return (
    <div className='App'>

 <MovieList  movie={movie}/>


      </div>
  
  )
}
 
export default App
