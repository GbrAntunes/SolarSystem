import { useTheme } from "styled-components";
import { Orbit } from "../Orbit";
import { Planet } from "../Planet";
import { Rotator } from "../Rotator";

export function Mars() {
  const theme = useTheme()

  return (
    <Orbit size={theme.planets.mars.orbitSize}>
      <Rotator orbitDuration={theme.planets.mars.orbitDuration} >
        <Planet color={theme.planets.mars.color} size={theme.planets.mars.size} />
      </Rotator>
    </Orbit>
  )
}
