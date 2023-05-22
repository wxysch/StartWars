// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals



class SwapiServices {
  _api = "https://swapi.dev/api/"
   async getResourse (url)  {
    const res = await fetch(`${this._api}${url}`)
    if (!res.ok) {
      throw new Error(
        `не смогли связаться с сервером ${url}`+ ` , получено ${res.status}`
      );
    }
    return await res.json();
  };
  async getAllPeople(){
    const res = await this.getResourse("/people/")
    return res.results
  }
  getPerson(id){
    return this.getResourse(`/people/${id}`)
  }
  
  getStarShip(id){
      return this.getResourse(`/starships/${id}/`)
  }
  async getAllStartShip(){
    const res = await this.getResourse("/starships/")
    return res.results
  }
  getPlanets(id){
      return this.getResourse(`/planets/${id}/`)
  }
  async getAllPlanets(){
    const res = await this.getResourse("/planets/")
      return 
  }
  getVehicles(id){
      return this.getResourse(`/vehicles/${id}/`)
  }
  async getAllVehicles(){
    const res = await this.getResourse("/vehicles/")
    return res.results
  }
}
const swapi = new SwapiServices();
swapi.getAllPeople().then((people)=>{
  people.forEach((p)=> {
    console.log(p.name);
  });
})