import React, { Component } from 'react'
import R2D2 from '../img/R2-D2.jpg'
import './random-planet.css'
import SwapiServices from '../../fetch.js'

class RandomPlanet extends Component{
    swapiService = new SwapiServices()
    state = {
        id: null,
        name: 'Yavin IV', 
        population: 1.000,
        rotationperiod: '24 days',
        size: '10,200km',
    }

    constructor(){
        super()
        this.updatePlanet()
    }

    updatePlanet() {
        const id = 10
        this.swapiService.getPlanets(id).then((planet) => {
          this.setState({
            id,
            name: planet.name,
            population: planet.population,
            rotationperion: planet.rotation_period,
            diameter: planet.diameter,
          })
        });
      }
    render(){
        const {id,population,rotationperiod,size,name} = this.state
        return(
            <div className="person-details card">
                <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="" className="person-image" />
                <div className="card-body">
                <h4>{name}</h4>
                <div className="list-group list group flush">
                    <li className="list-group-item">
                        <span className="term">Population: </span>
                    <span>{population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Size: </span>
                        <span>{size}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation Period: </span>
                        <span>{rotationperiod}</span>
                    </li>
                </div>
                </div>
            </div>
            
        )
    }
}

export default RandomPlanet