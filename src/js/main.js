import { $ } from "./functions/selectors.js"



const cookies = document.cookie.split("=")[1]
const {username} = cookies?.length? JSON.parse(cookies) :{username:void(0)}

if(username){
    const element =$("#right-data").element
    const child = [...element.childNodes].filter((e,i,a)=>i<a.length-2)
    console.log(child)
    child.every(elementChild => element?.removeChild(elementChild))
    const welcome = element.appendChild(document.createElement("p"))
    const logOut = element.appendChild(document.createElement("button"))
    welcome.textContent = username
    welcome.style="color:azure; display:inline;"
    logOut.textContent = "log out"
    logOut.addEventListener("click", event=>{
        event.preventDefault()
        document.cookie = "data="
        location.reload()
    })
}

