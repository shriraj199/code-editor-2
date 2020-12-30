import React, { useState, useEffect } from 'react'
import Editor from './Editor'
function App() {
  const [html, setHtml] = useState('')
  const [css, setCss] = useState('')
  const [javascript, setJavascript] = useState('')


  

  return (
   <>
  <div className='pane top-pane'>
  	<Editor
    language='xml'
    displayName='HTML'
    value={html}
    onChange={setHtml}
    />
    <Editor
    language='css'
    displayName='CSS'
    value={css}
    onChange={setCss}
    />
    <Editor
    language='javascript'
    displayName='JS'
    value={javascript}
    onChange={setJavascript}
    />
  </div>
  <div className='pane'>
  <iframe 
  title="output"
  frameborder="0"
  sandbox="allow-scripts"
  width="100%"
  height="100%;" 
  />
  </div>
   </>
  );
}

export default App;
