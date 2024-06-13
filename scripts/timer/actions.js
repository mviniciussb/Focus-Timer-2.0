import state from "./state.js"
import * as timer from "./timer.js"

export function play() {
    state.isRunning = true
    timer.countdown()
}

export function reset() {
    state.isRunning = false
    timer.updateDisplay()
}

export function addTime() {
    if (state.isRunning == false) {
        state.minutes += 5
        timer.updateDisplay()
    }
}

export function subTime() {
    if (state.isRunning == false) {
        state.minutes -= 5
        timer.updateDisplay()
    }
}