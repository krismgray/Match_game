import React, { Component } from 'react';
import { Header, Grid, Image } from 'semantic-ui-react';
import './style/home.css';

class Home extends Component {
 state = { flipped: false, matched: false }

  flip = () => {
    this.setState({ flipped: !this.state.flipped })
  }

  render() {
    return (
      <div>
        <Header as='h1' textAlign='center'>Memory Match!</Header>
        <br />
        <Grid className='grid'>
          <Grid.Row centered colums={4}>
            <Grid.Column width={3}>
              <img className='card' />
              <img className='back' />
              <img className='front' />
            </Grid.Column>
            <Grid.Column width={3}>
              <img className='img' src={require('./img/Mewtwo.jpg')} />
            </Grid.Column>
            <Grid.Column width={3}>
              <img className='img' src={require('./img/ninetails.jpg')} />
            </Grid.Column>
            <Grid.Column width={3}>
              <img className='img' src={require('./img/Omanyte.jpg')} />
            </Grid.Column>
          </Grid.Row>
          <br />
            <Grid.Row centered colums={4}>
              <Grid.Column width={3}>
                <img className='img'src={require('./img/ninetails.jpg')} />
              </Grid.Column>
              <Grid.Column width={3}>
                <img className='img' src={require('./img/Omanyte.jpg')} />
              </Grid.Column>
              <Grid.Column width={3}>
                <img className='img' src={require('./img/venasuar.jpg')} />
              </Grid.Column>
              <Grid.Column width={3}>
                <img className='img' src={require('./img/Mewtwo.jpg')} />
              </Grid.Column>
            </Grid.Row>
            <br />

        </Grid>
      </div>
    );
  }
}

export default Home;
