import { $ } from "./functions/selectors.js"

const mode = document.querySelector('.theme')
const body = document.querySelector('#wrapper')

mode.addEventListener('click', () => {
  if (body.classList.contains('dark-theme')) {
    localStorage.setItem('tema', 'light')
  } else {
    localStorage.setItem('tema', 'dark')
  }
  body.classList.toggle('dark-theme')
})
window.addEventListener('load', (e) => {
  if (localStorage.getItem('tema') === 'dark') {
    body.classList.toggle('dark-theme')
  }
})

const cookies = document.cookie.split("=")[1]

const{username}=JSON.parse(cookies)
if(username){
    const element =$("#right-data").element
    const child = [...element.childNodes]
    child.every(elementChild => element.removeChild(elementChild))
    const welcome = element.appendChild(document.createElement("p"))
    const logOut = element.appendChild(document.createElement("button"))
    welcome.textContent = "Bienvenido "+username
    welcome.style="color:azure; display:inline;"
    logOut.textContent = "log out"
    logOut.addEventListener("click", event=>{
        event.preventDefault()
        document.cookie = "data="
        location.reload()
    })
}

