import { useTheme } from "styled-components";
import { Orbit } from "../Orbit";
import { Planet } from "../Planet";
import { Rotator } from "../Rotator";

export function Neptune() {
  const theme = useTheme()

  return (
    <Orbit size={theme.planets.neptune.orbitSize}>
      <Rotator orbitDuration={theme.planets.neptune.orbitDuration} >
        <Planet color={theme.planets.neptune.color} size={theme.planets.neptune.size} />
      </Rotator>
    </Orbit>
  )
}
