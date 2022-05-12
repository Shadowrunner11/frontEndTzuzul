import { $ } from "./functions/selectors.js"

const cookies = document.cookie.split("=")[1]

const{username}=JSON.parse(cookies)
if(username){
    const element =$("#right-data").element
    const child = [...element.childNodes]
    child.every(elementChild => element.removeChild(elementChild))
    const welcome = element.appendChild(document.createElement("p"))
    welcome.textContent = "Bienvenido "+username
    welcome.style="color:azure;"
}