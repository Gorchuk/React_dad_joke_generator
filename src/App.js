import React, { Component } from 'react';
import './App.css';
import { jokes } from './dadJokes.json';
import DadJoke from './components/DadJokes.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      joke: "Click the button to generate a joke!"
    }
  }

  generateJoke() {
    let joke = jokes[Math.floor(Math.random()*jokes.length)];
    this.setState({joke: joke});
  }

  render() {
    return (

      <div className="App">
      
        <div className="App-header">
          <h1>Dad Joke Generator</h1>
          <button onClick={() => this.generateJoke()}>Generate</button>
        </div>

        <p className="App-intro">
          <DadJoke joke={this.state.joke} />
        </p>

        <small className="github-link">
          Made with <i className="fa fa-heart"></i> by&nbsp;
          <a href="https://www.youtube.com/watch?v=f77SKdyn-1Y" target="_blank" rel="noopener noreferrer">Anatoly Gorchuk click and relax :) 11 Hours Ocean Waves Sounds Nature Relaxation Yoga Meditation Reading Sleep Study</a>
        </small>

      </div>
    );
  }
}

export default App;