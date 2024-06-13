import * as elements from "./elements.js"
import * as action from "./actions.js"

export function plantSound() {
    elements.plantButton.addEventListener("click", () => {
        action.plantAction()

    })
}

export function cloudSound() {
    elements.cloudButton.addEventListener("click", () => {
        action.cloudAction()
    })
}

export function coffeeSound() {
    elements.coffeeButton.addEventListener("click", () => {
        action.coffeeAction()

    })
}

export function campfireSound() {
    elements.campfireButton.addEventListener("click", () => {
        action.campfireAction()
    })
}