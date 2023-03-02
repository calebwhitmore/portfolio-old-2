import { Link } from "gatsby";
import React from "react";

import portfolio from '../../images/icons/portfolio.svg'
import profile from '../../images/icons/profile.svg'
import bookmarks from '../../images/icons/bookmark.svg'
import mail from '../../images/icons/mail.svg'


import "./header.scss";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      pageTag: ""
    };
  }

  componentDidMount() {
    this.setState({
      pageTag: window.location.pathname.split("/")[1]
    });
  }

  render(props) {
    return (
      <div className="header-container">
        <div className="header">
          <Link className="header-title link " to="/">
            <h4>Caleb Whitmore</h4>
          </Link>
          <div className="header-item">
            <Link
              className={
                "nav-link link " +
                (this.state.pageTag === "" ? "selected " : "unselected ")
              }
              to="/"
            >
              <img src={portfolio} className="icon"></img>
              <p>Portfolio</p>
            </Link>
            <Link
              className={
                "nav-link link " +
                (this.state.pageTag === "about" ? "selected " : "unselected ")
              }
              to="/about"
            >
              <img src={profile} className="icon"></img>
              <p>About</p>
            </Link>
            <Link
              className={
                "nav-link link " +
                (this.state.pageTag === "bookmarks"
                  ? "selected "
                  : "unselected ")
              }
              to="/bookmarks"
            >
              <img src={bookmarks} className="icon"></img>
              <p>Bookmarks</p>
            </Link>
            <a className={"nav-link link "} href="mailto:caleb.whitmore93@gmail.com">
              <img src={mail} className="icon"></img>
              <p>Contact</p>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
