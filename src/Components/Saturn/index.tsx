import { useTheme } from "styled-components";
import { Orbit } from "../Orbit";
import { Planet } from "../Planet";
import { Rotator } from "../Rotator";

export function Saturn() {
  const theme = useTheme()

  return (
    <Orbit size={theme.planets.saturn.orbitSize}>
      <Rotator orbitDuration={theme.planets.saturn.orbitDuration} >
        <Planet color={theme.planets.saturn.color} size={theme.planets.saturn.size} />
      </Rotator>
    </Orbit>
  )
}
