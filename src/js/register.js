import { $ } from "./functions/selectors.js";

const usernameImput = $("#username")
const passwordInput = $("#password")
const showCheckbox = $("#show-password")
const registerData =$("#send-data-register")

let password;
let email;


usernameImput.onChange(event=>{
    email = event.target.value
})

passwordInput.onChange(event=>{
    password = event.target.value
})

showCheckbox.onChange(event=>{
    passwordInput.element.type = event.target.checked? "text":"password"
})


registerData.onClick(event=>{
    event.preventDefault()
    try {
        
        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        })
            .then(response=>response.json())
            .then(data=>console.log(data.status))
            .catch(error=>{
                $("#status").setText("Datos incorrectos")
                console.log(error)
                
            })
    } catch (error) {
        $("#status").setText("Datos Incorrectos")
        console.log(error)
    }
})