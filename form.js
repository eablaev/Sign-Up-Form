const form = document.getElementById('form');
const errorElement = document.getElementById('error_message');
console.log(errorElement)
let password = document.getElementById("password");
let confirm_password = document.getElementById("confirm_password");

let messages = '';



    function onChange(){
      
    if(password.value !== confirm_password.value){
        console.log(password)
        password.style.border = "1px solid red";
        confirm_password.style.border = "1px solid red";

    messages = "*Passwords do not match";
    errorElement.innerText = messages;
    
    }

    else if(password.value === confirm_password.value){
        messages = ''
        password.style.border = "1px solid rgb(215, 215, 215)";
        confirm_password.style.border = "1px solid rgb(215, 215, 215)";
    errorElement.innerText = messages;

    }

    }


    form.addEventListener('submit', (e) =>{
        if(messages !== ''){
            e.preventDefault();

        }


        
    })
    




   
    

