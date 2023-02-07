
import "../styles/Index.module.css";
import React, { useEffect, useState } from "react";
import MovieBox from "../components/MovieBox";
import 'bootstrap/dist/css/bootstrap.min.css';



export default function MoviesList () {

 const [movies, setMovies] = useState([]);
 const [query, setQuery] = useState('');

 useEffect(() =>{
   const fetchData = async () =>{
    const response = await fetch('https://www.omdbapi.com/?apikey=a2b07930&s=red');
    const data = await response.json();
    console.log(data);
    setMovies(data.Search);
   }
   fetchData();
 }, []);

const searchMovie = async(e) =>{
  e.preventDefault();
  try{
    const url=`https://www.omdbapi.com/?apikey=a2b07930&s=${query}`;
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.Search);
  }
  catch(e){
    console.log(e)
  }

}

const changeHandler=(e) => {
  setQuery(e.target.value);
}

  return (
    <>
    <header className="menu container">
      <h1>Movie App</h1>
      <form onSubmit={searchMovie}>
      <input 
        type="search" 
        placeholder={"Movie Search" }
        name="query"
        value={query} onChange={changeHandler}/>
      <button type="submit">Search</button>
      </form>
    </header>
    <div className="container">
          <div className="grid">
          {movies.map(movie => <MovieBox movie={movie} key={movie.imdbID}/>)}
          </div>
          
        </div>
    </>
        
      
  )
  
}