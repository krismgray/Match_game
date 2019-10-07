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

export default function initializeDeck() {
  let id = 0
  const cards = ['aerodactyl', 'Mewtwo', 'ninetails', 'Omanyte', 'venasuar', 'vaporeon', 'alakazam', 'eevee',
  'Blastoise', 'Arcanine', 'Garydos', 'machop', 'Exeggutor', 'Flareon', 'Dragonite', 'Jolteon', 'Charizard',
  'Snorlax', 'Raichu', 'Articuno', 'Beedrill', 'Zapados', 'Moltres', 'Electrode', 'pikachu', 'Gengar',
  'Pideotto', 'scyther', 'diglett', 'zubat', 'nidoking', 'ponyta', 'chansey', 'horsea', 'sandslash', 'farfetch'
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
