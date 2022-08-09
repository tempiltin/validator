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
    </div>
*/


const Python_page = () => {


  const [firstname, setFirstName] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState([])
  const [codesubmit, setCodesubmit] = useState(false)

  const onChange = (newValue) => {
    console.log("change", newValue);
    setCode(newValue)
  }
  const saveUser = () => {
    console.log({ lastname, firstname, phone, code });

    let data = { lastname, firstname, phone, code }
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
        setSurname={setLastname}
        setPhonenumber={setPhone}
        name={firstname}
        surname={lastname}
        phonenumber={phone}
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