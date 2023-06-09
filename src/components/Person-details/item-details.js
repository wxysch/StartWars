import React, { Component } from "react";
import "./person-details.css";
import SwapiServices from "../../fetch";

export default class ItemDetails extends Component {
  swapiServices = new SwapiServices()
  state={
    person:{},
    image:null,
  }
  componentDidMount(){
    this.updateItem();
  }
  updateItem(){
    const {itemId, getData,getImageUrl} = this.props;
    if(!itemId){
      return
    }
    getData(itemId)
    .then((person)=>{
      this.setState({person,
      image:getImageUrl(person)})
    })
  }
  componentDidUpdate(prevProps){
    if(this.props.itemId != prevProps.itemId){
      this.updatePerson()
    }
  }
  render() {
    const {item ,image}=this.state
    const {id,name,gender,birthYear,eyeColor} = item
    if(!this.state.person){
      return <span>Select a person from list</span>
    }
    return (
      
      <div className="person-details card">
        <img
          className="person-image"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
          alt=""
        />
        <div className=" card-body">
            <h4>{name}</h4>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <span className="term">Gender</span>
                    <span>{gender}</span>
                </li>
                <li className="list-group-item">
                    <span className="term">Birth year</span>
                    <span>{birthYear}</span>
                </li>
                <li className="list-group-item">
                    <span className="term">eye Color</span>
                    <span>{eyeColor}</span>
                </li>
                
            </ul>
        </div>
      </div>
    );
  }
}
