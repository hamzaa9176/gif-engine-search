import React from 'react';
import Gif from './Gif';
import NoGifs from './NoGifs'

const GifList = ({gifs}) => { 
  let result = gifs;
  let gif;   
  
  if(result.length>0){
  gif = gifs.map((item)=>(
   <Gif url={item.images.downsized.url} username={item.username} key={item.id}/>
  ));
  }else {
    gif=  <NoGifs/>
  }

  
  return(
    <ul className="gif-list">
      
      {gif}
      
    </ul> 
  );
}

export default GifList;
