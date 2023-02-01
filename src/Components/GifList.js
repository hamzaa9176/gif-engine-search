import React from 'react';
import Gif from './Gif';

const GifList = ({gifs}) => { 
  
  return(
    <ul className="gif-list">
      {
  
        gifs.map((item, index)=>(
        //console.log(item)
        <Gif url={item.images.downsized.url} username={item.username} key={index}/>
        
      ))
      }
      
    </ul> 
  );
}

export default GifList;
