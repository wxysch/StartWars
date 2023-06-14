import React, { Component } from "react";

const PersonList = (props)=>{
const{data,onitemselected,children:renderLabel} =props
  const items= data.map((item) => {
    const { id } = item;
    const label = renderLabel(item);
 
      return (
        <li
          className="list-group-item"
          key={id}
          onClick={() => onitemselected(id)}
        >
          {label}
        </li>
      );
    });
    return <ul className="Item-list list-group">{items}</ul>;
  }
  
const{getAllPeople}= new SwapiServices()

export default PersonList;