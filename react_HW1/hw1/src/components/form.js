import React, {Component} from 'react';
import './../styles/form.css';


class Fm extends Component {

  state = {

    id: "",

    cover_url: "https://www.askideas.com/wp-content/uploads/2016/11/Hello-How-Are-You-Funny-Mr.-Bean-Baby-Image.jpg",
    description: "The story of what happens after a master thief achieves his last big score, when the FBI agent who promised he'd capture him is about to do just that.",
    rating: 6.2,
    title: ""
  }

submit(e) {
  e.preventDefault();

  let rand = Math.random().toString(36);
  rand = rand.slice(2);
  console.log(rand);

  this.setState ({id:rand});

  this.state.title = this.testInput.value;
  this.state.description = "";


  return this.props.updateData(this.state);






}
  render() {



    return (
      <form className = "MovieForm" >
        <label className = "MovieForm__label" > Title
        < input type = "text" ref={(input) => this.testInput = input} className = "MovieForm__input" / >
        < /label> <label className = "MovieForm__label" > Description < textarea className = "MovieForm__txtarea"
        rows = "8" > < /textarea > <
        /label><label className="MovieForm__label">Rating
        <select className = "MovieForm__input" >
        <option value = "1" > 1 < /option >
        < option value = "2" > 2 < /option >
        <option value = "3" > 3 < /option >
        < option value = "4" > 4 < /option >
        < option value = "5" > 5 < /option >
        < option value = "6" > 6 < /option >
        < option value = "7" > 7 < /option >
        < option value = "8" > 8 < /option >
        < option value = "9" > 9 < /option >
        < option value = "10" > 10 < /option >
         < /select > < /label >
        <button  onClick={this.submit.bind(this)} className = "MovieForm__submit"
        type = "submit" > submit < /button> < /
        form >
    );
  }
}

// onClick={this.submit.bind(this)}

export default Fm;
