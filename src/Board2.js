import React from 'react'
import PropTypes from 'prop-types'

import Card from './Card2';

import './style/board.css';

export default function Board({ cards, flipped, handleClick, dimension, disabled, solved }) {
  return (
    <div className="board" style={{ width: '100%', height: dimension, "margin-left": "2%",}}>
      {cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            type={card.type}
            width={dimension / 4.6}
            height={dimension / 3.8}
            flipped={flipped.includes(card.id)}
            handleClick={handleClick}
            disabled={disabled || solved.includes(card.id)}
            solved={solved.includes(card.id)}
          />
        ))
      }
    </div>
  )
}

Board.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  flipped: PropTypes.arrayOf(PropTypes.number).isRequired,
  handleClick: PropTypes.func.isRequired,
  dimension: PropTypes.number.isRequired,
  disabled: PropTypes.bool.isRequired,
  solved: PropTypes.arrayOf(PropTypes.number).isRequired,
}
