import { $ } from "./selectors.js"

export function showEventModal(modal){
    modal.element.classList.toggle("hidden")
    modal.element.classList.toggle("modal")
    const overflow = document.body.style.overflow
    document.body.style.overflow = overflow.length? "":"hidden"
    $("#protector").element.classList.toggle("hidden")
    $("#wrapper").element.classList.toggle("blur")
}