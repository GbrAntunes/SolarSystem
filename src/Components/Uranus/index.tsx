import { useTheme } from "styled-components";
import { Orbit } from "../Orbit";
import { Planet } from "../Planet";
import { Rotator } from "../Rotator";

export function Uranus() {
  const theme = useTheme()

  return (
    <Orbit size={theme.planets.uranus.orbitSize}>
      <Rotator orbitDuration={theme.planets.uranus.orbitDuration} >
        <Planet color={theme.planets.uranus.color} size={theme.planets.uranus.size} />
      </Rotator>
    </Orbit>
  )
}
