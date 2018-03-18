import React, { Component } from 'react';


const Body = () => (
<div className="App__body">
  <div className="MovieList">
    <div className="MovieCard"><button className="MovieCard__btn MovieCard__btn--del">"delete"</button>
      <div className="MovieInfo__info">
        <h2 className="MovieInfo__title">Star Wars</h2>
        <p className="MovieInfo__descr">The Imperial Forces -- under orders from cruel Darth Vader (David Prowse) -- hold Princess Leia (Carrie Fisher) hostage, in their efforts to quell the rebellion against the Galactic Empire. Luke Skywalker (Mark Hamill) and Han Solo (Harrison
          Ford), c...</p>
        <p className="MovieInfo__rating">Rating: 7/10</p>
      </div>
      <ul className="ChipsList">
        <li className="ChipsList__item">sci-fi</li>
        <li className="ChipsList__item">drama</li>
        <li className="ChipsList__item">action</li>
      </ul>
    </div>
    <div className="MovieCard"><button className="MovieCard__btn MovieCard__btn--del">delete</button>
      <div className="MovieInfo__info">
        <h2 className="MovieInfo__title">Jaws</h2>
        <p className="MovieInfo__descr">When a young woman is killed by a shark while skinny-dipping near the New England tourist town of Amity Island, police chief Martin Brody (Roy Scheider) wants to close the beaches, but mayor Larry Vaughn (Murray Hamilton) overrules him, fearing
          that ...</p>
        <p className="MovieInfo__rating">Rating: 6/10</p>
      </div>
      <ul className="ChipsList">
        <li className="ChipsList__item">drama</li>
        <li className="ChipsList__item">action</li>
        <li className="ChipsList__item">horror</li>
      </ul>
    </div>
    <div className="MovieCard"><button className="MovieCard__btn MovieCard__btn--del">delete</button>
      <div className="MovieInfo__info">
        <h2 className="MovieInfo__title">Conan</h2>
        <p className="MovieInfo__descr">Orphaned boy Conan (Arnold Schwarzenegger) is enslaved after his village is destroyed by the forces of vicious necromancer Thulsa Doom (James Earl Jones), and is compelled to push "The Wheel of Pain" for many years. Once he reaches adulthood,
          Conan s...</p>
        <p className="MovieInfo__rating">Rating: 7/10</p>
      </div>
      <ul className="ChipsList">
        <li className="ChipsList__item">action</li>
      </ul>
    </div>
    <div className="MovieCard"><button className="MovieCard__btn MovieCard__btn--del">delete</button>
      <div className="MovieInfo__info">
        <h2 className="MovieInfo__title">The House</h2>
        <p className="MovieInfo__descr">Scott and Kate Johansen must figure out a way to earn some money after their daughters scholarship falls through. When all else fails, the desperate couple join forces with their neighbor Frank to start an underground casino in his home. As
          the cash...</p>
        <p className="MovieInfo__rating">{"Rating: 5/10"}</p>
      </div>
      <ul className="ChipsList">
        <li className="ChipsList__item">comedy</li>
      </ul>
    </div>
    <div className="MovieCard"><button className="MovieCard__btn MovieCard__btn--del">delete</button>
      <div className="MovieInfo__info">
        <h2 className="MovieInfo__title">Training Day</h2>
        <p className="MovieInfo__descr">Police drama about a veteran officer who escorts a rookie on his first day with the LAPDs tough inner-city narcotics unit. "Training Day" is a blistering action drama that asks the audience to decide what is necessary, what is heroic and what
          crosse...</p>
        <p className="MovieInfo__rating">Rating: 9/10</p>
      </div>
      <ul className="ChipsList">
        <li className="ChipsList__item">drama</li>
        <li className="ChipsList__item">thriller</li>
      </ul>
    </div>
  </div>
  
</div>
);
export default Body;
