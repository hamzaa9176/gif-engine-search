import React from 'react';
import { saveAs } from 'file-saver'
import { FaDownload } from 'react-icons/fa';


const Gif = ({url, username}) => {
const downloadImage = () => {
  saveAs(url, `${username}.gif`) // Put your image url here.
}
return (
  <>
  <li className="gif-wrap">
    <img src={url} alt="" />
    <button onClick={downloadImage}><FaDownload/></button>
  </li>
  
  </>
)
}

export default Gif;