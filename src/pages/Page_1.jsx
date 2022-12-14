import React, { useState } from 'react';
import video from "../video/Planet Earth Revolving.mp4";
import '../lbs/video.css';
import Lang from '../Components/Lang';
import py from '../images/python.jpg';
import js from '../images/Unofficial_JavaScript_logo_2.png';
import php from "../images/php-logo.jpg";
import flutter from '../images/flutter.png';
import Form from '../Components/form';
import { useNavigate } from 'react-router-dom';
const Page1 = () => {
  const [state, setState] = useState(false);
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastname] = useState("");
  const [phone, setPhone] = useState();
  const [language, setLanguage] = useState();
  const [codesubmit, setCodesubmit] = useState(false);
  const navigate = useNavigate();
  const saveUser = () => {
    let data = { last_name, first_name, phone, }
    console.log(language);
    // http://localhost/company.site/leads/
    fetch("https://jsonplaceholder.typicode.com/posts/", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((result) => {
      console.warn("result", result);
      navigate('/' + language)
    })
    //input value ni tozalash
    setFirstName("")
    setLastname("")
    setPhone("")
    setTimeout((e) => {
      setCodesubmit(false)
    }, 500)
  }
  const myhandlerEnded = (e) => setState(true)
  const myhandlerPlayer = () => setState(false)
  const onSubmit = (e, lang) => {
    e.preventDefault();
    setLanguage(lang);
    if (codesubmit) {
      codesubmit(false);
    } else {
      setCodesubmit(true);
    }
  }
  return (
    <>
      {/* foydalanuvchidan ma'lumotlarni olish  */}
      <Form saveUser={saveUser} setFirstName={setFirstName}
        setLastname={setLastname}
        setPhone={setPhone}
        first_name={first_name}
        last_name={last_name}
        phone={phone}
        codesubmit={codesubmit}
      />
      <div className={state ? "posit posit_true" : "posit posit_false"}>
        <div className="container">
          <h1>Kurslardan birini tanlang</h1>
          <div className="row mt-4 justify-content-around align-center align-items-center">
            <div className="col-3">
              <Lang name={'Python'} url={'/python'} img={py} onSubmit={(e) => onSubmit(e, "python")} />
            </div>
            <div className="col-3">
              <Lang name={'javascript'} url={'/javascript'} img={js} onSubmit={(e) => onSubmit(e, "js")} />
            </div>
            <div className="col-3">
              <Lang name={'php'} url={'/php'} img={php} onSubmit={(e) => onSubmit(e, "php")} />
            </div>
            <div className="col-3">
              <Lang name={'flutter'} url={'/flutter'} img={flutter}  onSubmit={(e) => onSubmit(e, "flutter")} />
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