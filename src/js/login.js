import { $ } from "./functions/selectors.js";

const usernameInput = $("#username")
const passwordInput = $("#password")
const showCheckbox = $("#show-password")
const sendData = $("#send-data")

let password;
let email;


usernameInput.onChange(event=>{
    email = event.target.value
})

passwordInput.onChange(event=>{
    password = event.target.value
})

showCheckbox.onChange(event=>{
    passwordInput.element.type = event.target.checked? "text":"password"
})

sendData.onClick(event=>{
    event.preventDefault()
    
    fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    })
        .then(response=>response.json())
        .then(data=>{
            $("#status").setText(data.accessToken? "Ingreso correcto": "Datos incorectos" )
            console.log(data)
        }
        )
        .catch(error=>{
            $("#status").setText("Datos incorrectos")
            console.log(error)
            
        })
})
