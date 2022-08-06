import React from 'react'

import video from "../video/Planet Earth Revolving.mp4"
import '../lbs/video.css'

const Page1 = () => {

  const myhandlerEnded = (e)=>{
    alert('video ended')
  }


  return (
    <>
      <video
        id="my-video"
        className="video-js"
        controls
        preload="auto"

        poster="MY_VIDEO_POSTER.jpg"
        data-setup="{}"
        onEnded={myhandlerEnded}
      >
        <source src={video} type="video/mp4" />
        <source src="MY_VIDEO.webm" type="video/webm" />
      </video>

      <script src="../lbs/vide.js"></script>
    </>
  )
}

export default Page1