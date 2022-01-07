import React, { Component } from 'react'
import dummy from '../images/dummy.png'

export class Newsitem extends Component {
   
    render() {
        let {title,description,imageurl,newsUrl} = this.props; 
        return (
            <div>
                <div className="card">
                <img className="card-img-top" src={!imageurl? dummy:imageurl} alt="news img"/>
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                </div>
                </div>
            </div>
        )
    }
}

export default Newsitem
