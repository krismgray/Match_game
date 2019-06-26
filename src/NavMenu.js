import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style/home.css';

class NavMenu extends Component {
  state = { width: window.innerWidth, visible: false }

  handleResize() {
    this.setState({ width: window.innerWidth });
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize())
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize());
  }

  toggleVisibility = () => this.setState({ visible: !this.state.visible });

  render() {
    const { activeItem, width, visible } = this.state;
    const isMobile = width <= 600;
    if (!isMobile ){
    return (
      <div>
      <br />
      <div className="navbar">
          <Link to="/">
            <div className='linkText'>
              <h2>Pokemon</h2>
            </div>
          </Link>
          <Link to="/Unicorns">
            <div className='linkText'>
                <h2>Unicorns</h2>
            </div>
          </Link>
      </div>
      </div>
    )} else {
      return(
        <div className='navbar'>
            <Link to="/">
              <div className='linkText'>
                <h2>Pokemon</h2>
              </div>
            </Link>
            <Link to="/Unicorns">
              <div className='linkText'>
                  <h2>Unicorns</h2>
              </div>
            </Link>
        </div>
      )
    }
  }
}

export default NavMenu;
