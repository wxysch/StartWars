export default class SwapiServices {
  _api = "https://swapi.dev/api/";
  getResourse = async (url) => {
    const res = await fetch(`${this._api}${url}`);
    if (!res.ok) {
      throw new Error(
        `не смогли связаться с сервером ${url}` + ` , получено ${res.status}`
      );
    }
    return await res.json();
  };
  getAllPeople = async () => {
    const res = await this.getResourse(`/people/`);
    return res.results.map(this._transformPerson);
  };
   getPerson=async(id)=> {
    const person = await this.getResourse(`/people/${id}/`);
    return this._transformPerson(person);
  }
   getAllStarships=async()=> {
    const res = await this.getResourse("/starships/");
    return res.results.map(this._transformStarship);
  }
   getStarship=async(id)=> {
    const starship = await this.getResourse(`/starship/${id}/`);
    return this._transformStarship(starship);
  }
   getAllPlanets=async()=> {
    const res = await this.getResourse("/planets/");
    return res.results.map(this._transformPlanet);
  }
   getPlanet=async(id)=> {
    const planet = await this.getResourse(`/planets/${id}/`);
    return this._transformPlanet(planet);
  }
  _extractId(item) {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  }
  _transformPlanet = (planet) => {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationperiod: planet.rotation_period,
      diameter: planet.diameter,
    };
  };

  _transformStarship = (startship) => {
    return {
      id: this._extractId(startship),
      name: startship.name,
      madel: startship.model,
      manufactured: startship.manufacturer,
      costInCredits: startship.costInCredits,
      length: startship.length,
      crew: startship.crew,
      passengers: startship.crew,
      cargoCapacity: startship.cargoCapacity,
    };
  };
  _transformPerson = (person) => {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eyeColor,
    };
  };
}
