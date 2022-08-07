import React from 'react'
import AceEditor from "react-ace";


import "ace-builds/src-noconflict/mode-dart";
// import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-cobalt";
import "ace-builds/src-noconflict/ext-language_tools"

const Flutter_page = () => {
  const onChange = (newValue) => {
    console.log("change", newValue);
  }

  return (
    <main className='main_editor'>
      <AceEditor
        mode="dart"
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
    </main>
  )
}

export default Flutter_page