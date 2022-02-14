import { Link } from "gatsby";
import React from "react";

import "./header.scss";
import portfolioIcon from "../../images/icons/portfolio-3.svg";
import aboutIcon from "../../images/icons/about3.svg";
import bookmarkIcon from "../../images/icons/bookmark3.svg";
import contactIcon from "../../images/icons/contact.svg";

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
          <Link className="header-title" to="/">
            <p >Caleb Whitmore</p>
          </Link>
          <div className="header-item">
            <Link
              className={
                "nav-link " +
                (this.state.pageTag === "" ? "selected " : "unselected ")
              }
              to="/"
            >
              <img src={portfolioIcon} className="icon" />
              <p>Portfolio</p>
            </Link>
            <Link
              className={
                "nav-link " +
                (this.state.pageTag === "about" ? "selected " : "unselected ")
              }
              to="/about"
            >
              <img src={aboutIcon} className="icon" />
              <p>About</p>
            </Link>
            <Link
              className={
                "nav-link " +
                (this.state.pageTag === "bookmarks"
                  ? "selected "
                  : "unselected ")
              }
              to="/bookmarks"
            >
              <img src={bookmarkIcon} className="icon" />
              <p>Bookmarks</p>
            </Link>
            <a className={"nav-link "} href="mailto:caleb.whitmore93@gmail.com">
              <img src={contactIcon} className="icon" />
              <p>Contact</p>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
