import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style/card.css';

export default function Card2({handleClick, flipped, height, width, type, disabled, solved, id }) {
  return (
    <div
      className={`flip-container ${flipped ? 'flipped' : ''}`}
      style={{
        width,
        height,
      }}
      onClick={() => (disabled ? null : handleClick(id))}
    >
      <div className='flipper'>
        <img
          className={flipped ? 'front' : 'back'}
          src={flipped || solved ? `/img/${type}.jpg` : '/img/unicorncard.jpeg'}
          style={{height, width}}
        />
      </div>
    </div>
  )
}

Card2.propTypes = {
  flipped: PropTypes.bool.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  solved: PropTypes.bool.isRequired,
}
