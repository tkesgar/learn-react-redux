import React from 'react'

import Panel from './panel'

const TextInput = ({ onInput, changed }) => (
  <Panel title="Markdown" context={ changed ? "warning" : "default" }>
    <div className="editor">
      <div contentEditable onInput={onInput} />
    </div>
  </Panel>
)

export default TextInput
