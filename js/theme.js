import { $ } from "./functions/selectors.js"

const mode = $('.theme')
const body = $('#wrapper')

mode.onClick(() => {
    console.log("click")
  if (body.element.classList.contains('dark-theme')) {
    localStorage.setItem('tema', 'light')
  } else {
    localStorage.setItem('tema', 'dark')
  }
  body.element.classList.toggle('dark-theme')
})


if (localStorage.getItem('tema') === 'dark') 
body.element.classList.toggle('dark-theme')
