import { $ } from "./functions/selectors.js"


const EventContainer = $("#events-container")
let events =[
    {title:"titulo de prueba", description:"Descripcion de prueba1", fechaInicio:"mayo"},
    {title:"titulo de prueba2", description:"Descripcion de prueba2", fechaInicio:"mayo"},
    {title:"titulo de prueba3", description:"Descripcion de prueba3", fechaInicio:"mayo"},
    {title:"titulo de prueba4", description:"Descripcion de prueba", fechaInicio:"mayo"},
    {title:"titulo de prueba5", description:"Descripcion de prueba", fechaInicio:"mayo"}
]

events = []

try {
    
    const cookies = document.cookie.split("=")[1]
    const {username} = cookies?.length? JSON.parse(cookies) :{username:void(0)}
    if(username){
    
    events.forEach(event=>{
        const card = EventContainer.appendElement("div", ["card"])
        card.appendElement("h3").setText(event.title)
        card.appendElement("p").setText(event.description)
        const fechas = card.appendElement("div", ["fechas"])
        fechas.appendElement("span").setText(event.fechaInicio)
        fechas.appendElement("span").setText(event.fechaInicio)
    })
    
    const modal = $("#modal")
    const createEvent = $("#create-event")
    createEvent.element.classList.toggle("hidden")
    createEvent.onClick(event=>{
    
        modal.element.classList.toggle("hidden")
        modal.element.classList.toggle("modal")
        
        $("#protector").element.classList.toggle("hidden")
        $("#wrapper").element.classList.toggle("blur")
        
    })
    $("#exit").onClick(event=>{
        event.preventDefault()
        createEvent.element.click()
    })
    }
} catch (error) {
    console.log(error)
}


//implement draggign
/* let dragElement;
let dropElement;

const dragContainer = $("#events-container") */
