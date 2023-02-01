import React from 'react';
import { saveAs } from 'file-saver'
import { FaDownload } from 'react-icons/fa';
import { WhatsappIcon, WhatsappShareButton } from "react-share";

const Gif = ({url, username}) => {
const downloadImage = () => {
  saveAs(url, `${username}.gif`) // Put your image url here.
}
return (
  <>
  <li className="gif-wrap">
    <img src={url} alt="" />
    <WhatsappShareButton
            url={url}
            title={username}
            separator=":: "
             >
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
    <button onClick={downloadImage}><FaDownload/> </button>
  </li>
  
  </>
)
}

export default Gif;