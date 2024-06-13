import * as sounds from "./sounds.js"
import state from "./state.js"
import * as elements from "./elements.js"

export function plantAction() {
    if (state.isMutePlant) {
        sounds.plantSound.play()
        elements.musicPlayer.querySelector("button").classList.toggle("hidenButton")

    } else {
        sounds.plantSound.pause()
        elements.musicPlayer.querySelector("button").classList.toggle("hidenButton")
    }
    state.isMutePlant = !state.isMutePlant
}

export function cloudAction() {
    if (state.isMuteCloud) {
        sounds.cloudSound.play()
        elements.musicPlayer.querySelector("button:nth-child(2)").classList.toggle("hidenButton")
    } else {
        sounds.cloudSound.pause()
        elements.musicPlayer.querySelector("button:nth-child(2)").classList.toggle("hidenButton")
    }
    state.isMuteCloud = !state.isMuteCloud
}

export function coffeeAction() {
    if (state.isMuteCoffee) {
        sounds.coffeeSound.play()
        elements.musicPlayer.querySelector("button:nth-child(3)").classList.toggle("hidenButton")
    } else {
        sounds.coffeeSound.pause()
        elements.musicPlayer.querySelector("button:nth-child(3)").classList.toggle("hidenButton")
    }
    state.isMuteCoffee = !state.isMuteCoffee
}

export function campfireAction() {
    if (state.isMuteCampfire) {
        sounds.campfireSound.play()
        elements.musicPlayer.querySelector("button:nth-child(4)").classList.toggle("hidenButton")
    } else {
        sounds.campfireSound.pause()
        elements.musicPlayer.querySelector("button:nth-child(4)").classList.toggle("hidenButton")
    }
    state.isMuteCampfire = !state.isMuteCampfire
}
