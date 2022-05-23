import { $ } from "./functions/selectors.js"
import { showEventModal } from "./functions/showModal.js"


const EventContainer = $("#events-container")
let events =[
    {title:"titulo de prueba", description:"Descripcion de prueba1", fechaInicio:"mayo 14 2022"},
    {title:"titulo de prueba2", description:"Descripcion de prueba2", fechaInicio:"mayo 14 2022"},
    {title:"titulo de prueba3", description:"Descripcion de prueba3", fechaInicio:"mayo 14 2022"},
    {title:"titulo de prueba4", description:"Descripcion de prueba", fechaInicio:"mayo 14 2022"},
    {title:"titulo de prueba5", description:"Descripcion de prueba", fechaInicio:"mayo 14 2022"}
]

try {
    
    const cookies = document.cookie.split("=")[1].split("; ")[0]
    const {username, accessToken} = cookies?.length? JSON.parse(cookies) :{username:void(0)}
    console.log(accessToken)
    if(username){
    //fetch("http://localhost:3000/events", {    
    fetch("https://api-expres.herokuapp.com/events", {
        "method": "GET",
        "headers": {
            "authorization": accessToken
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.events);
    
        data.events.forEach(event=>{
            const card = EventContainer.appendElement("div", ["card"])
            card.element.draggable = true
            card.appendElement("h3").setText(event.name)
            card.appendElement("img").element.src="http://www.aal-europe.eu/wp-content/uploads/2013/04/events_medium.jpg"
            card.appendElement("p").setText(event.description)
            const fechas = card.appendElement("div", ["fechas"])
            fechas.appendElement("span").setText((new Date(event.date_start)).toLocaleDateString())
            fechas.appendElement("span").setText((new Date(event.date_finish)).toLocaleDateString())
            const actions =  card.appendElement("div", ["actions", "flex"])
            actions.appendElement("i", [ "delete-event","material-symbols-outlined"], event.event_id).setText("delete")
            actions.appendElement("i", [ "edit-event", "material-symbols-outlined"], event.event_id).setText("edit")
        })
        
        
    });
    
    const modal = $("#modal")
    const createEvent = $("#create-event")
    createEvent.element.classList.toggle("hidden")
    createEvent.onClick(event=>{
    
        showEventModal(modal)
        
        $("#form-modal > input[type=submit]").onClick(()=>{
            let name = $("#title").element.value
            let description = $("#description").element.value
            let date_start = $("#fecha-inicio").element.value
            let date_finish =$("#fecha-fin").element.value
            //fetch("http://localhost:3000/events", {
            fetch("https://api-expres.herokuapp.com/events", {

                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    "authorization": accessToken
                },
                
                body: JSON.stringify({name, description, date_start, date_finish})
            }).then(response => {
                console.log(response);
              })
              .catch(err => {
                console.error(err);
              });
        })
    })
    $("#exit").onClick(event=>{
        event.preventDefault()
        createEvent.element.click()
    })
    EventContainer.onClick(async (e)=>{
        let event_id = e.target.id
        console.log(e.target.className)
        if(e.target.className == "edit-event material-symbols-outlined"){
            showEventModal(modal)
            $("#form-modal > input[type=submit]").onClick(()=>{
                
                let data = {
                    event_id
                }
                
                let name = $("#title").element.value
                if (name) data["name"] = name

                let description = $("#description").element.value
                if (description) data["description"] = description

                let date_start = $("#fecha-inicio").element.value
                if (date_start) data["date_start"] = date_start

                let date_finish =$("#fecha-fin").element.value
                if (date_finish) data["date_finish"] = date_finish
                confirm(data)
                //fetch("http://localhost:3000/events", {
                fetch("https://api-expres.herokuapp.com/events", {


                "method": "PATCH",
                "headers": {
                    "authorization": accessToken,
                    "Content-Type": "application/json"
                },
                "body": JSON.stringify(data)
                })
                .then(response => {
                window.location.replace("./events.html");
                console.log(response);
                })
                .catch(err => {
                console.error(err);
                });
            })
            return
        }
        if(e.target.className!= "delete-event material-symbols-outlined")return
        let del = confirm("Seguro que quiere eleminar el evento.")
        //console.log(del)
        if (del && event_id){
            console.log(event_id)
            //fetch("http://localhost:3000/events", {
            fetch("https://api-expres.herokuapp.com/events", {

                "method": "DELETE",
                "headers": {
                    "authorization": accessToken,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({event_id})
            }).then((res)=>{
                console.log(res)
                window.location.replace("./events.html");
            })
        }
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
