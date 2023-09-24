import { useTheme } from "styled-components";
import { Orbit } from "../Orbit";
import { Planet } from "../Planet";
import { Rotator } from "../Rotator";

export function Venus() {
  const theme = useTheme()

  return (
    <Orbit size={theme.planets.venus.orbitSize}>
      <Rotator orbitDuration={theme.planets.venus.orbitDuration} >
        <Planet color={theme.planets.venus.color} size={theme.planets.venus.size} />
      </Rotator>
    </Orbit>
  )
}
