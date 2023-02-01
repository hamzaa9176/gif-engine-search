import React, { useEffect, useState } from "react";
import SearchForm from './Components/SearchForm';
import GifList from "./Components/GifList";

function App() {

  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(true);


  //show trendy gifs
  useEffect(()=>{
    setLoading(true);
    let active = true;
      fetch('https://api.giphy.com/v1/gifs/trending?api_key=ZYdVXSUh8X1TDaiO9DpNVHCG00kCilfQ&limit=20&rating=g')
      .then(response => response.json())
      .then(responseData =>{if(active){setGifs(responseData.data); setLoading(false)}})
      .catch(error => console.log(error))
  }, []);

  //return search gifs by user
  const searchGif =  (title) => {
    let active = true;
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=ZYdVXSUh8X1TDaiO9DpNVHCG00kCilfQ&q=${title}&limit=25&offset=0`)
        .then(response => response.json())
        .then(responseData =>{if(active){setGifs(responseData.data); setLoading(false)}})
        .catch(error => console.log(error))
      return()=>{active=false }
  }

  //adding shadow to nav when scrolled: start
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.onscroll = function() {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  }, []);
//end

  return (
    <div>
      <div className={scrolled ? " main-header add-shadow" : "main-header"}>
        <div className="inner">
          <h1 className="main-title">GifSearch</h1>
          <SearchForm searchGif={searchGif}/>
        </div>
      </div>
   
      <div className="main-content">
        {
         
           (loading) ? <p>Loading...</p> : <GifList gifs = {gifs}/> 

        }
        

      </div>
    </div>
  );
}

export default App;
