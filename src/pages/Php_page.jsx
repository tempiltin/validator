import { useState } from 'react'
import AceEditor from "react-ace";


import "ace-builds/src-noconflict/mode-php";
// import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools"
import Form from '../Components/form';


const Php_page = () => {


  const [firstname, setFirstName] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState([])
  const [codesubmit, setCodesubmit] = useState(false);
  const [lang, setLang] = useState('');

  const onChange = (newValue) => {
    console.log("change", newValue);
    setCode(newValue)
    setLang('php')
  }
  const saveUser = () => {
    console.log({ lastname, firstname, phone, code ,lang });

    let data = { lastname, firstname, phone, code ,lang }
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
  const onSubmit = (e)=>{
    e.preventDefault();
    if (codesubmit) {
      codesubmit(false);
    } else {
      setCodesubmit(true);
    }
  }

  return (
    <>
      <Form saveUser={saveUser} setName={setFirstName}
        setLastname={setLastname}
        setPhone={setPhone}
        firstname={firstname}
        lastname={lastname}
        phone={phone}
        codesubmit={codesubmit}
      />
      <main className='main_editor'>
        <AceEditor
          mode="php"
          theme="github"
          onChange={onChange}
          name="UNIQUE_ID_OF_DIV"
          editorProps={{ $blockScrolling: true }}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true
          }}
        />
        <button onClick={onSubmit} className="btn">Tekshirish</button>
      </main>
    </>
  )
}

export default Php_page;