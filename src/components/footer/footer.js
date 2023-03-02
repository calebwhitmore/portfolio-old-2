import React from "react"
import "./footer.scss"

class Footer extends React.Component {
  currentYear = new Date().getFullYear();

  render(props) {
    return (
        <div className="footer-container">
          <div className="footer">
            <div className="footer-item">
              <p>©{this.currentYear} Caleb Whitmore</p>
              
            </div>
          </div>
        </div>
    )
  }
}

export default Footer
