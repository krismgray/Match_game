import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


import React, { Component } from 'react';
import { Header, Grid, Image, Card } from 'semantic-ui-react';
import './style/home.css';
import Mewtwo from './img/Mewtwo.jpg';
import venasuar from './img/venasuar.jpg';
import Omanyte from './img/Omanyte.jpg';
import ninetails from './img/ninetails.jpg';
import aerodactyl from './img/aerodactyl.jpg';
import Pkmn from './img/Pkmn.png';



class Home extends Component {
 state = { flipped: false, matched: false }

  flip = () => {
    this.setState({ flipped: !this.state.flipped })
  };

  render() {
    let array = ["Mewtwo", "Mewtwo", "venasuar", "venasuar", "Omanyte", "Omanyte", "ninetails", "ninetails", "aerodactyl", "aerodactyl"];
    let array2 = ["Pkmn", "Pkmn", "Pkmn", "Pkmn", "Pkmn", "Pkmn", "Pkmn", "Pkmn", "Pkmn", "Pkmn"]

    let pokes = array.map(poke => {
      return <img className='img' key={poke.id} src={require(`./img/${poke}.jpg`)} />
    });
    let back = array2.map(back => {
      return <img className='img' key={back.id} src={require(`./img/${back}.png`)} />
    });
    return (
      <div>
        <Header as='h1' textAlign='center'>Memory Match!</Header>
        <br />
        <Grid centered columns='equal'>
          <div className='gridLayout'>
            <div>{pokes.sort(() => 0.5 - Math.random())}</div>
          </div>
        </Grid>
      </div>
    );
  }
}

export default Home;
