import React from 'react'

import ReactPlayer from 'react-player'

import video from "../video/Planet Earth Revolving.mp4"
const Page1 = () => {

  return (
    <ReactPlayer url={video} playing={true} />

  )
}

export default Page1