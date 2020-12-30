import React,{useState} from 'react'
import 'codemirror/lib/codemirror.css'

import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import {Controlled as ControlledEditor} from 'react-codemirror2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompress,  faExpand} from '@fortawesome/free-solid-svg-icons'
function Editor(props) {
  const {
    displayName,
    language,
    value,
    onChange
  }=props

  const [open, setOpen] = useState(true)

    function handleChange(value){
      onChange(value)
    }

  return (
   <>
    <div className={`editor-container ${open? '' : 'collapsed'}` } >
        <div className="editor-title">
            {displayName}
            <button
            type='button'
            className="editor-btn"
            onClick ={() => setOpen(prevOpen => !prevOpen)}
            >
              <FontAwesomeIcon icon={open ? faCompress : faExpand}/>
            </button>
        </div>
        <ControlledEditor
        onBeforeChange={handleChange}  
        value={value}
        className="code-mirror-wrapper"
        options={{
          lint : true,
          mode : language,
          theme:'material',
          lineWrapping:true,
          lineNumbers:true,
        }}
       
        />
    
    </div>
   </>
  );
}

export default Editor;