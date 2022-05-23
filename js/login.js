import { $ } from "./functions/selectors.js";
//import axios from "axios";
const usernameInput = $("#username")
const passwordInput = $("#password")
const showCheckbox = $("#show-password")
const sendData = $("#send-data")

let password;
let username;


usernameInput.onChange(event=>{username = event.target.value})

passwordInput.onChange(event=>{
    password = event.target.value
})

showCheckbox.onChange(event=>{
    passwordInput.element.type = event.target.checked? "text":"password"
})

sendData.onClick(event=>{
    event.preventDefault()
    //axios.post("http://tzuzulbf.herokuapp.com/login",{username,})
    fetch("https://api-expres.herokuapp.com/login",{
    //fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        
        body: JSON.stringify({username, password})
    })
        .then(response=>response.json())
        .then(data=>{
            console.log(data)
            
            const {username, accessToken} = data
            if(accessToken){
                document.cookie = "data="+JSON.stringify({accessToken,username})
          
                window.location.replace("./events.html");
            }else{
                $("#status").setText("Datos incorectos" )
            }
            console.log(data)
        }
        )
        .catch(error=>{
            $("#status").setText("Datos incorrectos")
            console.log(error)
            
        })
})

