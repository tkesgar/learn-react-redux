import React from 'react'

const Panel = ({ context, title, children }) => (
  <div className={`panel panel-${ context || "default" }`}>
    <div className="panel-heading">{title}</div>
    <div className="panel-body">
      {children}
    </div>
  </div>
)

export default Panel
