import React, { useState } from 'react'

import video from "../video/Planet Earth Revolving.mp4"
import '../lbs/video.css'
import Lang from '../Components/Lang'


import py from '../images/python.jpg'
const Page1 = () => {


   const [state, setState] = useState(false)
  const myhandlerEnded = (e)=>{
    if(false){
      setState(true)
    }else{
      setState(false)
    }
    alert(state)
  }


  return (
    <>
      <div className="posit posit_true">
        <div className="container">
          <div className="row mt-4 justify-content-around align-center align-items-center">
            <div className="col-3">
              <Lang name={'Python'} url={'/python'} img={py}/>
            </div>
            <div className="col-3">
              <Lang name={'Python'} url={'/python'} img={py}/>
            </div>
            <div className="col-3">
              <Lang name={'Python'} url={'/python'} img={py}/>
            </div>
            <div className="col-3">
              <Lang name={'Python'} url={'/python'} img={py}/>
            </div>
          </div>
        </div>
      </div>
      <video
        id="my-video"
        className="video-js"
        controls
        preload="auto"

        poster="https://s3.eu-west-3.amazonaws.com/dealna/images/programming-languages-1-20200802061727.jpg"
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