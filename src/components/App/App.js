import './App.css'
import { Component } from 'react'
import PersonDetails from '../Person-details/person-details'
import RandomPlanet from '../Random-planet/random-planet'

class App extends Component {
  render(){
    return <div className="App">
      <PersonDetails/>
      <RandomPlanet/>
    </div>
  }
}

export default App