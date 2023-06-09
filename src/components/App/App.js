import React from "react";
import "./app.css";
import { Component } from "react";
import RandomPlanet from "../random-planet/random-planet";
import Header from "../header/header";
import PeoplePage from "../people-page/peoplePage";
import SwapiServices from "../../fetch";
import ErrorBoundry from "../ErrorIndicator/errorBoundry";
import Row from "../row/row";
import ItemDetails from "../person-details/item-details";

export default class App extends Component {
  swapiServices = new SwapiServices();
  state = {
    selectedItem: null,
    hasError: false,
    showRandomPlanet: true,
  };
  // toggleRandomPlanet = () => {
  //   this.setState((state) => {
  //     return { showRandomPlanet: !state.showRandomPlanet };
  //   });
  // };
  componentDidCatch() {
    console.log("componentDidCatch");
    this.setState({ hasError: true });
  }
  onItemSelected = (selectedItem) => {
    this.setState({ selectedItem });
  };
  render() {
    const {getPerson,getStarship, getPersonimage, getStarshipimage}= this.swapiServices
    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;
    const personDetails = (<ItemDetails itemId ={11} getData = {getPerson} getImageUrl = {getPersonimage}/>) 
    const starShipDetails = <ItemDetails itemId = {5} getData = {getStarship} getImageUrl= {getStarshipimage}/>
    return (
      <div className="App">
        <Header />
        {/* {planet}
        <PeoplePage /> */}
        <Row left={personDetails} rigth={starShipDetails}/>
      </div> 
    );
  }
}
