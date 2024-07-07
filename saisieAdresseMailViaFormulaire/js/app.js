"use-strict"
let email,
    text,
    regex;
    
    document.getElementById('InputAdresseMail').addEventListener('input',()=>{
         email = document.getElementById('InputAdresseMail').value;
         text = document.getElementById('text');
         regex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if(email.match(regex)){
            text.innerHTML = "adresse mail valide";
            text.style.color = "green";
   
        }
        else{
            text.innerHTML = "adresse non valide";
            text.style.color = "red"; 
        }
        if(email ==""){
            text.innerHTML = "";
            text.style.color = "red"; 
        }
    });

        
       