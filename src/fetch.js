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
    getAllPeople(){
      return this.getResourse("/people/")
    }
    getPerson(id){
      return this.getResourse(`/people/${id}`)
    }
    
    getStarShip(id){
        return this.getResourse(`/starships/${id}/`)
    }
    getAllStartShip(){
        return this.getResourse("/starships/")
    }
    getPlanets(id){
        return this.getResourse(`/planets/${id}/`)
    }
    getAllPlanets(){
        return this.getResourse("/planets/")
    }
    getVehicles(id){
        return this.getResourse(`/vehicles/${id}/`)
    }
    getAllVehicles(){
        return this.getResourse("/vehicles/")
    }
  }
  const swapi = new SwapiServices();
  swapi.getAllPeople().then((body)=>{
    console.log(body)
  })