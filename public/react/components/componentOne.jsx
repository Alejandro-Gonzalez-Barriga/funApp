import React,{Component} from 'react';
import axios from 'axios';


export default class ComponentOne extends Component{


firstF(){
  console.log('inin first');
  axios.get('https://api.chucknorris.io/jokes/random')
    .then(function (response) {
      console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

}

secondF(){
  console.log('inin2 second');
  axios.get('https://api.chucknorris.io/jokes/random')
    .then(function (response) {
      console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

thirdF(){
  console.log('inin1 third');
  axios.get('https://api.chucknorris.io/jokes/random')
    .then(function (response) {
      console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}


  render(){
    return(
      <div>
        YoYMiBeiby
        <div className="buttonContainer">
          <br></br><br></br>

          <button className="b1" onClick={this.firstF}> Push </button>
          <br></br><br></br>

          <button className="b2" onClick={this.secondF}> Push </button>
          <br></br><br></br>

          <button className="b3" onClick={this.thirdF}> Push </button>
          <br></br><br></br>
        </div>
      </div>


    )
  }
}
