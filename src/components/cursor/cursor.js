import React from "react"
import "./cursor.scss"

class Cursor extends React.Component {

  positionCursor() {
    var cursor = document.getElementById("cursor");

    document.onmousemove = function(e){
      cursor.setAttribute("style","top: "+(e.pageY - window.scrollY)+"px; left: "+(e.pageX)+"px")
      cursor.classList.add('cursor-visible');
    }
  };

  hideCursor() {
    document.addEventListener("mouseleave", function(event){

      if(event.clientY <= 0 || event.clientX <= 0 || (event.clientX >= window.innerWidth || event.clientY >= window.innerHeight))
      {
    
        cursor.classList.remove('cursor-visible');
    
      }
    });
  }

  cursorHover() {
    var target = document.getElementsByClassName("link");
    var cursor = document.getElementById("cursor");

    for (var i = 0; i < target.length; i++) {
      target[i].addEventListener('mouseover', function (event) {
        cursor.classList.add("cursor-hover")
      })
      target[i].addEventListener('mouseout', function (event) {
        cursor.classList.remove("cursor-hover")
      })
    }
  };

  cursorHoverText() {
    var target = document.querySelectorAll('h1,h2,h3,h4,p')
    var cursor = document.getElementById("cursor");

    for (var i = 0; i < target.length; i++) {
      target[i].addEventListener('mouseover', function (event) {
        cursor.classList.add("cursor-hover-text")
      })
      target[i].addEventListener('mouseout', function (event) {
        cursor.classList.remove("cursor-hover-text")
      })
    }
  };

  componentDidMount() {
    this.positionCursor()
    this.cursorHover()
    this.cursorHoverText()
  };

  componentDidUpdate() {
    this.positionCursor()
    this.cursorHover()
    this.cursorHoverText()
  };

  render(props) {
    return (
        <div id="cursor" className="cursor ">
              <div className="rib1"></div>
              <div className="rib2"></div>
              <div className="rib3"></div>
              <div className="thumb"></div>
              <div className="finger first "></div>
              <div className="finger second "></div>
              <div className="palm"></div>  
              <div className="thumb shadow"></div>
              <div className="finger first shadow "></div>
              <div className="finger second shadow"></div>
              <div className="palm shadow" ></div>
        </div>
    )
  }
}

export default Cursor
