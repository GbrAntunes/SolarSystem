export const defaultTheme = {
  planets: {
    mercury: {
      name: 'mercury',
      size: 8,
      color: 'linear-gradient(90deg, #150D04 0%, #FFB35A 100%);',
      orbitSize: 190,
      orbitDuration: 9
    },
    venus: {
      name: 'venus',
      size: 11,
      color: 'linear-gradient(90deg, #151004 0%, #FFC75A 100%);',
      orbitSize: 240,
      orbitDuration: 12
    },
    earth: {
      name: 'earth',
      size: 11,
      color: 'linear-gradient(90deg, #040915 0%, #5AB0FF 100%);',
      orbitSize: 290,
      orbitDuration: 15
    },
    mars: {
      name: 'mars',
      size: 9,
      color: 'linear-gradient(90deg, #150704 0%, #FF785A 100%);',
      orbitSize: 350,
      orbitDuration: 19
    },
    jupiter: {
      name: 'jupiter',
      size: 32,
      color: 'linear-gradient(90deg, #070707 0%, #FFB798 100%);',
      orbitSize: 550,
      orbitDuration: 45
    },
    saturn: {
      name: 'saturn',
      size: 30,
      color: 'linear-gradient(90deg, #040404 0%, #FFDB80 100%);',
      orbitSize: 650,
      orbitDuration: 51
    },
    uranus: {
      name: 'uranus',
      size: 24,
      color: 'linear-gradient(90deg, #000407 0%, #1FF2FF 100%);',
      orbitSize: 750,
      orbitDuration: 65
    },
    neptune: {
      name: 'neptune',
      size: 24,
      color: 'linear-gradient(90deg, #000207 0%, #5AB0FF 100%);',
      orbitSize: 850,
      orbitDuration: 75
    },
  }
} as const
