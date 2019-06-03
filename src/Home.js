import React, { useState, useEffect } from 'react';
import Board from './Board';

import initializeDeck from './Deck';

export default function Home() {
  const [cards, setCards] = useState([])
  const [flipped, setFlipped] = useState([])
  const [dimension, setDimension] = useState(800)
  const [solved, setSolved] = useState([])
  const [disabled, setDisabled] = useState(false)

  useEffect(() => {
    resizeBoard()
    setCards(initializeDeck())
    preloadImages()
  }, [])

  useEffect(() => {
    preloadImages()
  }, cards)

  useEffect(() => {
    const resizeListener = window.addEventListener('resize', resizeBoard)

    return () => window.removeEventListener('resize', resizeListener)
  })

  const handleClick = (id) => {
    setDisabled(true)
    if (flipped.length == 0) {
      setFlipped([id])
      setDisabled(false)
    } else {
      if (sameCardClicked(id)) return
      setFlipped([flipped[0], id])
      if (isMatch(id)) {
        setSolved([...solved, flipped[0], id])
        resetCards()
      } else {
        setTimeout(resetCards, 1500)
      }
    }
  }

  const preloadImages = () => {
    cards.map(card => {
      const src = `/img/${card.type}.jpg`
      new Image().src = src
    })
  }

  const resetCards = () => {
    setFlipped([])
    setDisabled(false)
  }

  const isMatch = (id) => {
    const clickedCard = cards.find(card => card.id == id)
    const flippedCard = cards.find(card => flipped[0] == card.id)
    return flippedCard.type == clickedCard.type
  }

  const sameCardClicked = (id) => flipped.includes(id)

  const resizeBoard = () => {
    setDimension(Math.min(
      document.documentElement.clientWidth,
      document.documentElement.clientHeight,
    ),
   )
  }

  const restartGame = (props) => {
    setSolved([])
  }

    return (
      <div style={{'padding' : '20px'}}>
        <h1>Memory Match</h1>
        <h2>Can you remember where the cards are?</h2>
        <button type="button" onClick={restartGame}
          style={{'background-color' : 'red', 'color' : 'white', "font-size" : "25px", "padding" : "10px",}}
          >Restart?</button>
        <p></p>
        <Board
          dimension={dimension}
          cards={cards}
          flipped={flipped}
          handleClick={handleClick}
          disabled={disabled}
          solved={solved}
          />
      </div>
    )
}
