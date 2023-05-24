import React, { Component } from 'react'
import R2D2 from '../img/R2-D2.jpg'
import './person-details.css'

class PersonDetails extends Component{
    render(){
        return(
            <div className="person-details card">
                <img src='https://starwars-visualguide.com/assets/img/characters/3.jpg' alt="" className="person-image" />
                <div className="card-body">
                <h4>R2-D2</h4>
                <div className="list-group list group flush">
                    <li className="list-group-item">
                        <span className="term">Gender</span>
                        <span>male</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Birth year</span>
                        <span>43</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Eye Color</span>
                        <span>red</span>
                    </li>
                </div>
                </div>
            </div>
            
        )
    }
}
export default PersonDetails