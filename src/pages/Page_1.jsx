import React from 'react'
import VideoPlayer from '../Components/Video_Js';

const Page_1 = () => {
    const videoJsOptions = {
        autoplay: false,
        playbackRates: [0.5, 1, 1.25, 1.5, 2],
        width: 720,
        height: 300,
        controls: true,
        sources: [
          {
            src: 'https://vjs.zencdn.net/v/oceans.mp4',
            type: 'video/mp4',
          },
        ],
      };
    
  return (
    <VideoPlayer {...videoJsOptions} />

  )
}

export default Page_1