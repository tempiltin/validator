import React, { useState } from 'react';
import video from "../video/Planet Earth Revolving.mp4";
import '../lbs/video.css';
import Lang from '../Components/Lang';
import py from '../images/python.jpg';
import js from '../images/Unofficial_JavaScript_logo_2.png';
import php from "../images/php-logo.jpg";
import flutter from '../images/flutter.png';

import Form from '../Components/form';
const Page1 = () => {
  const [state, setState] = useState(false);
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [codesubmit, setCodesubmit] = useState(false);
  const saveUser = () => {
    console.log({ lastname, firstname, phone, });
    let data = { lastname, firstname, phone, }
    fetch("http://localhost:3000/python ", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((result) => {
      console.warn("result", result);
    })
  }
  const myhandlerEnded = (e) => setState(true)
  const myhandlerPlayer = () => setState(false)
  const onSubmit = (e) => {
    e.preventDefault();
    if (codesubmit) {
      codesubmit(false);
    } else {
      setCodesubmit(true);
    }
  }
  return (
    <>

        {/* foydalanuvchidan ma'lumotlarni olish  */}
        <Form saveUser={saveUser} setName={setFirstName}
        setLastname={setLastname}
        setPhone={setPhone}
        firstname={firstname}
        lastname={lastname}
        phone={phone}
        codesubmit={codesubmit}
      />
      <div className={state ? "posit posit_true" : "posit posit_false"}>
    {
      codesubmit === true ? <div className="container">
      <h1>Kurslardan birini tanlang</h1>
      <div className="row mt-4 justify-content-around align-center align-items-center">
        <div className="col-3">
          <Lang name={'Python'} url={'/python'} img={py} onSubmit={onSubmit} />
        </div>
        <div className="col-3">
          <Lang name={'javascript'} url={'/javascript'} img={js} onSubmit={onSubmit} />
        </div>
        <div className="col-3">
          <Lang name={'php'} url={'/php'} img={php} onSubmit={onSubmit} />
        </div>
        <div className="col-3">
          <Lang name={'flutter'} url={'/flutter'} img={flutter} onSubmit={onSubmit} />
        </div>
      </div>
    </div> : <button onClick={onSubmit}>Yo'nalish tanlash</button>
    }
      </div>
      <video
        id="my-video"
        className="video-js"
        controls
        preload="auto"
        poster="https://s3.eu-west-3.amazonaws.com/dealna/images/programming-languages-1-20200802061727.jpg"
        data-setup="{}"
        onEnded={myhandlerEnded}
        onPause={myhandlerEnded}
        onPlay={myhandlerPlayer}
      >
        <source src={video} type="video/mp4" />
        <source src="MY_VIDEO.webm" type="video/webm" />
      </video>
      <script src="../lbs/vide.js"></script>
    </>
  )
};
export default Page1;