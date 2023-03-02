import React from 'react';

import Header from "../header/header"
import Footer from "../footer/footer"
import Cursor from "../cursor/cursor"
import "./layout.scss"

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      darkMode: false,
    }
    this.toggleDarkMode = this.toggleDarkMode.bind(this)
  }

  toggleDarkMode() {
    var root = document.getElementsByTagName("html")[0]
    this.setState({ darkMode: !this.state.darkMode })
    root.classList.toggle("dark-mode")
  }

  checkDarkMode() {
    if(document.getElementsByTagName("html")[0].classList.contains("dark-mode")) {
      let newState = { ...this.state }
    newState = { ...this.state, darkMode: true}
    this.setState(newState)
    }
  }

  componentDidMount() {
    this.checkDarkMode()
  }

  render(props) {
    return (
      <div className="page-container">
        <Header
          toggleDarkMode={this.toggleDarkMode}
          darkMode={this.state.darkMode}
          openAbout={this.toggleAbout}
          pageTitleLine1={this.props.pageTitleLine1}
          pageTitleLine2={this.props.pageTitleLine2}
          tags={this.props.tags}
          showBack={this.props.showBack}
        />
        <div className="page">
          {this.props.children}
        </div>
        <Footer/>
        <Cursor/>
      </div>
    )
  }
}

export default Layout
