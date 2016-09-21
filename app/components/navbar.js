import React from 'react'

const MenuDropdown = ({ title, children }) => (
  <li className="dropdown">
    <a href="#" className="dropdown-toggle" data-toggle="dropdown">{title}</a>
    <ul className="dropdown-menu">
      {children}
    </ul>
  </li>
)

const MenuElement = (props) => (
  <li><a href={props.href || '#'} {...props} /></li>
)

const MenuSeparator = () => (<li className="divider" />)

const Navbar = ({ onNew, onOpen, onSave, onImport, onExport }) => (
  <nav className="navbar navbar-inverse navbar-fixed-top">
    <div className="container-fluid">

      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#mainNavbar">
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" href="#">Utaha</a>
      </div>

      <div className="collapse navbar-collapse" id="mainNavbar">

        <ul className="nav navbar-nav navbar-right">
          <MenuElement href="https://github.com/tkesgar/utaha" target="_blank">View on GitHub</MenuElement>
        </ul>

      </div>
    </div>
  </nav>
)

export default Navbar
