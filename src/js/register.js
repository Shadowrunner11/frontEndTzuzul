import { $ } from "./functions/selectors.js";

const usernameInput = $("#username")
const emailInput = $("#email")
const passwordInput = $("#password")
const showCheckbox = $("#show-password")
const registerData =$("#send-data-register")

let password;
let email;
let username;


emailInput.onChange(event=>{
    email = event.target.value
})

passwordInput.onChange(event=>{
    password = event.target.value
})

usernameInput.onChange(event=>{
    username = event.target.value
})

showCheckbox.onChange(event=>{
    passwordInput.element.type = event.target.checked? "text":"password"
})


registerData.onClick(event=>{
    event.preventDefault()

    if($("#repeat-password").content()===passwordInput.content()){
       try {
            
            fetch("http://localhost:3000/users", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email, password, username})
            })
                .then(response=>response.json())
                .then(data=>{
                    const {accessToken} = data
                    const {username} = data.user
                    if(accessToken){
                        document.cookie = "data="+JSON.stringify({accessToken,username})
                
                        window.location.replace("./profile.html");
                    }else{
                        $("#status").setText("Datos incorectos" )
                    }
                    console.log(data)
                })
                .catch(error=>{
                    $("#status").setText("Datos incorrectos")
                    console.log(error)
                    
                })
        } catch (error) {
            $("#status").setText("Datos Incorrectos")
            console.log(error)
        

        }
    }else{
        $("#status").setText("Las contrasenias no coinciden")
    }


})

