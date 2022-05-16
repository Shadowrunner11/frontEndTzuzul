import { $ } from "./functions/selectors.js"


const EventContainer = $("#events-container")
const events =[{title:"titulo de prueba", description:"Descripcion de prueba", fechaInicio:"mayo"}]

events.forEach(event=>{
    const card = EventContainer.appendElement("div", ["card"])
    card.appendElement("h3").setText(event.title)
    card.appendElement("p").setText(event.description)
    const fechas = card.appendElement("div", ["fechas"])
    fechas.appendElement("span").setText(event.fechaInicio)
    fechas.appendElement("span").setText(event.fechaInicio)
})