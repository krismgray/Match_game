function shuffle(array) {
  const _array = array.slice(0)
  for (let i = 0; i < array.length - 1; i++) {
    let randIndex = Math.floor(Math.random() * (i + 1))
    let temp = _array[i]
    _array[i] = _array[randIndex]
    _array[randIndex] = temp
  }

  return _array
}

export default function initializeDeck2() {
  let id = 0
  const cards = ['unicorn1', 'unicorn2', 'unicorn3', 'unicorn4', 'unicorn5', 'unicorn6', 'unicorn7',
  ].reduce((acc, type) => {
    acc.push({
      id: id++,
      type
    })
    acc.push({
      id: id++,
      type
    })
    return acc
  }, [])

  return shuffle(cards)
}
