import React, { useEffect, useState } from "react";
import SearchForm from './Components/SearchForm';
import GifList from "./Components/GifList";
import NoGifs from "./Components/NoGifs";

function App() {

  const [gifs, setGifs] = useState([]);
  
  useEffect(()=>{
    //fetch(`https://api.giphy.com/v1/gifs/random?api_key=ZYdVXSUh8X1TDaiO9DpNVHCG00kCilfQ&limit=32&offset=0&rating=g&lang=en`)
    const fetchData = async () => {
      const response = await fetch('https://api.giphy.com/v1/gifs/trending?api_key=ZYdVXSUh8X1TDaiO9DpNVHCG00kCilfQ&limit=20&rating=g');
      const responseData = await response.json();
      setGifs(responseData.data);
    }
    fetchData().catch(error=>console.log(error))
    // .then(response => response.json())
    // .then(responseData =>setGifs(responseData.data))
    // .catch(error => console.log(error))
  }, []);

  const searchGif = async (title) => {
      const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=ZYdVXSUh8X1TDaiO9DpNVHCG00kCilfQ&q=${title}&limit=25&offset=0`);
      const responseData =  await response.json();
      setGifs(responseData.data)
      // fetch(`https://api.giphy.com/v1/gifs/search?api_key=ZYdVXSUh8X1TDaiO9DpNVHCG00kCilfQ&q=${title}&limit=25&offset=0`)
      //  .then(response => response.json())
      //  .then(responseData =>setGifs(responseData.data))
      //  .catch(error => console.log(error))
  }



  return (
    <div>
      <div className="main-header">
        <div className="inner">
          <h1 className="main-title">GifSearch</h1>
          <SearchForm searchGif={searchGif}/>
        </div>
      </div>
      <div className="main-content">
        {
          gifs.length<=0?
            <NoGifs/>  
          :
            <GifList gifs = {gifs}/> 
          

        }
        

      </div>
    </div>
  );
}

export default App;
