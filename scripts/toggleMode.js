const toggleMode = document.querySelector("#toggleMode")
let dark = false

export function darkModeAndLightMode() {
    toggleMode.addEventListener("click", () => {
        document.querySelector("html").classList.toggle("darkMode")

        if (dark == false) {
            toggleMode.querySelector("i:nth-child(2)").classList.toggle("hiden")
            toggleMode.querySelector("i:nth-child(1)").classList.toggle("hiden")
        }
    })
}