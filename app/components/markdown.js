import React from 'react'
import marked from 'marked'

import Panel from './panel'

const Markdown = ({ src }) => (
  <Panel title="Preview">
    <div className="preview"
      dangerouslySetInnerHTML={{ __html: marked(src || '') }}
    />
  </Panel>
)

export default Markdown
