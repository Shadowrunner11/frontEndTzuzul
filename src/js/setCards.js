import { $ } from "./functions/selectors.js"


const EventContainer = $("#events-container")
let events =[
    {title:"titulo de prueba", description:"Descripcion de prueba1", fechaInicio:"mayo 14 2022"},
    {title:"titulo de prueba2", description:"Descripcion de prueba2", fechaInicio:"mayo 14 2022"},
    {title:"titulo de prueba3", description:"Descripcion de prueba3", fechaInicio:"mayo 14 2022"},
    {title:"titulo de prueba4", description:"Descripcion de prueba", fechaInicio:"mayo 14 2022"},
    {title:"titulo de prueba5", description:"Descripcion de prueba", fechaInicio:"mayo 14 2022"}
]

try {
    
    const cookies = document.cookie.split("=")[1]
    const {username} = cookies?.length? JSON.parse(cookies) :{username:void(0)}
    if(username){
    
    events.forEach(event=>{
        const card = EventContainer.appendElement("div", ["card"])
        card.element.draggable = true
        card.appendElement("h3").setText(event.title)
        card.appendElement("img").element.src="http://www.aal-europe.eu/wp-content/uploads/2013/04/events_medium.jpg"
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
        const overflow = document.body.style.overflow
        document.body.style.overflow = overflow.length? "":"hidden"
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
let dragElement;
let dropElement;

const dragContainer = $("#events-container")
dragContainer.on('drag', e=>e.preventDefault())
        .on('dragstart', e => dragElement = e.target)
        .on('dragover', e => e.preventDefault())
        .on('dragenter', e => {

            dropElement = e.target
            console.log(dropElement)
        })
        .on('drop', e =>{
                e.preventDefault();
                try {
                    dragContainer.element.insertBefore(dragElement, dropElement);
                    
                } catch (error) {
                    console.log(error)
                }
                //Deep clone de atributes
                /* const siblingNode = dropElement.nextElementSibling
                const prevNode = dragElement.cloneNode(true)
                if(!dropElement.isEqualNode(dragElement)){
                
                    dragContainer.insertBefore(prevNode, siblingNode)
                    dragContainer.replaceChild(dropElement, dragElement)
                }
            */
            })
