import React, { Component } from 'react';
import Fm from "./form";
import movie from "./movie.json";


export default class Body extends React.Component {

    constructor(){
      super();
    this.state = {muv: movie};


  }
  updateData = (value) => {
    var newArray = this.state.muv.slice();
    newArray.push(value);


    this.setState({muv:newArray})
    console.log(this.state.muv);
}

  delete(film){

    const newState = this.state.muv;

      newState.splice(newState.indexOf(film), 1);
      this.setState({newState});
      console.log(this.state);

  }
  render(){

    const ls = <div className="App__body">
      <div className="MovieList">
      {this.state.muv.map(film => (

        <div className="MovieCard" key={film.id}><button onClick={this.delete.bind(this, film)} className="MovieCard__btn MovieCard__btn--del">"delete"</button>
          <div className="MovieInfo__info">

            <h2 className="MovieInfo__title">{film.title}</h2>
            <img src={film.cover_url}/>
            <p className="MovieInfo__descr">{film.description}</p>
            <p className="MovieInfo__rating">Rating: {film.rating}</p>
          </div>
          <ul className="ChipsList">
            <li className="ChipsList__item">sci-fi</li>
            <li className="ChipsList__item">drama</li>
            <li className="ChipsList__item">action</li>
          </ul>
        </div>
    ))
  }
  </div>
    <Fm updateData={this.updateData}/>
  </div>

  return <div>
      	{ls}

      </div>
}
};
