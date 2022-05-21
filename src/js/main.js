import { $ } from "./functions/selectors.js"



const cookies = document.cookie.split("=")[1]
const {username} = cookies?.length? JSON.parse(cookies) :{username:void(0)}

if(username){
    const element =$("#right-data").element
    const child = [...element.childNodes]
    const lastChild = child.at(-2)
    child.every(elementChild => element?.removeChild(elementChild))
    const welcome = element.appendChild(document.createElement("p"))
    const logOut = element.appendChild(document.createElement("button"))
    console.log(lastChild)
    element.appendChild(lastChild)
    welcome.textContent = username
    welcome.style="color:azure; display:inline;"
    logOut.textContent = "log out"
    logOut.addEventListener("click", event=>{
        event.preventDefault()
        document.cookie = "data="
        window.location.replace("./login.html");
    })
}
$("#burger").onClick(()=>{
    console.log("menu")
    const navElement  =$("nav").element
    navElement.classList.toggle("hidden-responsive")
    navElement.classList.toggle("roll")

})