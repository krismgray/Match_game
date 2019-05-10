import React, { Component } from 'react';
import { Header, Grid, Image, Card } from 'semantic-ui-react';
import './style/home.css';
import Mewtwo from './img/Mewtwo.jpg';
import venasuar from './img/venasuar.jpg';
import Omanyte from './img/Omanyte.jpg';
import ninetails from './img/ninetails.jpg';
import aerodactyl from './img/aerodactyl.jpg';



class Home extends Component {
 state = { flipped: false, matched: false }

  flip = () => {
    this.setState({ flipped: !this.state.flipped })
  };

  render() {
    let array = ["Mewtwo", "Mewtwo", "venasuar", "venasuar", "Omanyte", "Omanyte", "ninetails", "ninetails", "aerodactyl", "aerodactyl"];

    let pokes = array.map(poke => {
      return <img className='img' key={poke.id} src={require(`./img/${poke}.jpg`)} />
    });
    return (
      <div>
        <Header as='h1' textAlign='center'>Memory Match!</Header>
        <br />
        <Grid centered columns='equal'>
          <div>{pokes.sort(() => 0.5 - Math.random())}</div>
        </Grid>
      </div>
    );
  }
}

export default Home;
