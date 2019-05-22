import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style/card.css';

export default function Card({handleClick, flipped, height, width, type }) {
  return (
    <div
      className={`flip-container ${flipped ? 'flipped' : ''}`}
      style={{
        width,
        height,
      }}
      onClick={handleClick}
    >
      <div className='flipper'>
        <img
          className={flipped ? 'front' : 'back'}
          src={flipped ? `/img/${type}.jpg` : '/img/Pkmn.png'}
          style={{height, width}}
        />
      </div>
    </div>
  )
}

Card.propTypes = {
  flipped: PropTypes.bool.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
}
