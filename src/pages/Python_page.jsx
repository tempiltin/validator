import { useState } from 'react'
import AceEditor from "react-ace";


import "ace-builds/src-noconflict/mode-python";
// import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-cobalt";
import "ace-builds/src-noconflict/ext-language_tools"
import Form from '../Components/form';



/* <div>
      <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} name='name' placeholder='name' />
      <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} name='email' placeholder='email' />
      <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} name='password' placeholder='password' />

      <button type="submit" onClick={saveUser}>Submit</button>
    </div> */


const Python_page = () => {


  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [newValue, setNewValue] = useState([])
  const [codesubmit, setCodesubmit] = useState(false)

  const onChange = (newValue) => {
    console.log("change", newValue);
    setNewValue(newValue)
  }
  const saveUser = () => {
    console.log({ surname, name, phonenumber, newValue });

    let data = { surname, name, phonenumber, newValue }
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
      <Form saveUser={saveUser} setName={setName}
        setSurname={setSurname}
        setPhonenumber={setPhonenumber}
        name={name}
        surname={surname}
        phonenumber={phonenumber}
        codesubmit={codesubmit}
      />
      <main className='main_editor'>
        <AceEditor
          mode="python"
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

export default Python_page