import React, { useState } from 'react'
import MovieCard from './MovieCard'
import MovieFilter from './MovieFilter'
import MovieList from './MovieList'
import './App.css'
import AddMovie from './AddMovie'
import Search from './Search'
 const movies = [
  {   id:Math.random(),
      title :"saw",
      image :"https://pyxis.nymag.com/v1/imgs/09d/64c/95abab7ece31abcfb22867b5803384248b-24-saw-puppet.rsquare.w700.jpg",

      date:" 29 October 2009",
      rating: 3 ,
  },
  {    id:Math.random(),
      title :"spiderman",
      image:"https://img.filmsactu.net/datas/films/s/p/spider-man-3-2021/xl/spider-man-3-2021-6124f779daa76.jpg",

      date:"17 December 2021",
      rating: 4 ,
  } ,
  {    id:Math.random(),
      title :" before sunset",
      image:"https://image.jimcdn.com/app/cms/image/transf/none/path/s63ccf77ce0e97436/image/i0c3c93178af6f028/version/1564134244/image.jpg",
      date:"2 July 2004",
      rating:3 ,
  }
]



const App = () => {
  const [movie, setMovie] = useState(movies) ;
  const addMovie = (x) => setMovie([...movie,x]) ;
  const [text, setText] = useState("") ;
  const [rating, setRating] = useState(1) ;
  const handleText =(e) => setText(e.target.value) ;
  const handleRating =(x) =>setRating(x)
  
  return (
    <div className='App'>
      <MovieFilter />
    <Search rating={rating} text={text} handleText={handleText} handleRating={handleRating}/>

 <MovieList   movies={movie.filter(el=>el.title.toUpperCase().includes(text.toUpperCase()) && el.rating>= rating)} />
 <AddMovie add={addMovie} />


      </div>
  
  )
}
 
export default App
