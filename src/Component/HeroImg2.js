import React, {Component} from 'react'
import "./HeroImg2.css"
// import {Link} from "react-router-dom"

class HeroImg2 extends Component {
    render(){
        return (
            <div className="hero-img">
            <div className="heading">
            <h1>{this.props.heading}</h1>
            <p>{this.props.text}</p>
            </div>
            </div>
          )
    }
 
}

export default HeroImg2
