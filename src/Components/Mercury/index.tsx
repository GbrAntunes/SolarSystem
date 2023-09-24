import { useTheme } from "styled-components";
import { Orbit } from "../Orbit";
import { Planet } from "../Planet";
import { Rotator } from "../Rotator";

export function Mercury() {
  const theme = useTheme()

  return (
    <Orbit size={theme.planets.mercury.orbitSize}>
      <Rotator orbitDuration={theme.planets.mercury.orbitDuration} >
        <Planet color={theme.planets.mercury.color} size={theme.planets.mercury.size} />
      </Rotator>
    </Orbit>
  )
}
