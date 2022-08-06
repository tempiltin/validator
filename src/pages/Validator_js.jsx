import React from 'react'


import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools"
import AceEditor from "react-ace";

const Validatorjs = () => {
  const  onChange = (newValue)=> {
    console.log("change", newValue);
  }
  
  return (
    <AceEditor
    mode="javascript"
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
  )
}

export default Validatorjs