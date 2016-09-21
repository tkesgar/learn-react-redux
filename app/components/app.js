import React from 'react'

import Navbar from './navbar'
import Editor from '../containers/editor'
import Renderer from '../containers/renderer'

const App = () => (
  <div>
    <Navbar />
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-6">
          <Editor />
        </div>
        <div className="col-sm-6">
          <Renderer />
        </div>
      </div>
    </div>
  </div>
)

export default App
