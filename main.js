import { playSound } from "./scripts/sounds/index.js"
import * as start from "./scripts/timer/index.js"
import * as toggleMode from "./scripts/toggleMode.js"


playSound()
start.timer(25, 0)
toggleMode.darkModeAndLightMode()
