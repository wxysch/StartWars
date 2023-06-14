import React from "react"
import itemList from '../item -list/person-list'
import { withData } from "../hoc-helpers"
import SwapiServices from "../../fetch"
import ItemList from "../item -list/person-list"
const swapiServices = new SwapiServices()
const{getAllPeople,getAllPlanet,getAllStarships} = SwapiServices

const PersonList = withData(ItemList,getAllPeople)

const PlanetList = withData(ItemList,getAllPlanet)

const StarshipList = withData(ItemList,getAllStarships)

export {
    PersonList,
    PlanetList,
    StarshipList
}