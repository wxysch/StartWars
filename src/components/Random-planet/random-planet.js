import React, { Component } from "react";
import "./random-planet.css";
import SwapiServices from "../../fetch";
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../ErrorIndicator/errorIndicator";

class RandomPlanet extends Component {
  swapiService = new SwapiServices();
  state = {
    planet: {},
    loading: true,
    error: false,
  }; 
  componentDidMount(){
    this.updatePlanet()
    this.interval = setInterval(this.updatePlanet,15000)
  }
  onPLanetLoaded = (planet)=>{
    this.setState({planet,
    loading:false,
    error: false})
  }
  onError = (err)=>{
    this.setState({error:true,
    loading: false,})
  }

  updatePlanet =()=> {
    const id = Math.floor(Math.random()*25) + 2;
    this.swapiService
    .getPlanet(id)
    .then(this.onPLanetLoaded)
    .catch(this.onError);
  }

  render() {

    const { planet, loading, error } = this.state;
    const hasData = !(loading || error)
    const errorMessage = error ?<ErrorIndicator/> : null;
    const spinner = loading ? <Spinner/>: null;
    const content = hasData ? <PlanetView planet={planet}/> : null;
    return (
    
      <div className="random-planet jumbotron rounded">
        {
          errorMessage
        }
        {spinner}
        {content}
      </div>

     );
  }
}

export default RandomPlanet;

const PlanetView = ({planet} )=>{
  const {id, name, population, rotationperiod, diameter } = planet;

  return  <React.Fragment> <img
  className="planet_image"
  src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
  alt=""
/>


<div>
  <h4>{name}</h4>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">
      <span className="term">Population</span>
      <span>{population}</span>
    </li>
    <li className="list-group-item">
      <span className="term">Rotation Period</span>
      <span>{rotationperiod}</span>
    </li>
    <li className="list-group-item">
      <span className="term">Diameter</span>
      <span>{diameter}</span>
    </li>
  </ul>
  <button className="btn-warning">Toggle random planet</button>
</div> </React.Fragment>
}