import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/global.ts'

import { Sun } from './Components/Sun'
import { defaultTheme } from './styles/themes/default'
import { Mercury } from './Components/Mercury/index.tsx'
import { Venus } from './Components/Venus/index.tsx'
import { Earth } from './Components/Earth/index.tsx'
import { Mars } from './Components/Mars/index.tsx'
import { Jupiter } from './Components/Jupiter/index.tsx'
import { Saturn } from './Components/Saturn/index.tsx'
import { Uranus } from './Components/Uranus/index.tsx'
import { Neptune } from './Components/Neptune/index.tsx'

import { SolarSystem, SunLight } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <SolarSystem>
        <SunLight />
        <Sun />

        <Mercury />
        <Venus />
        <Earth />
        <Mars />
        <Jupiter />
        <Saturn />
        <Uranus />
        <Neptune />
      </SolarSystem>

      <GlobalStyle />
    </ThemeProvider>
  )
}
