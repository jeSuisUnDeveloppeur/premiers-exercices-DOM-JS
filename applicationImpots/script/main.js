"use-strict"
let age,
    genre,
    message = document.getElementById('message');

    document.querySelector("button").addEventListener("click", ()=>  {
        age = document.getElementById("age").value;
        genre = document.getElementById("Genre").options[document.getElementById("Genre").selectedIndex].value;
        if(age <= 0 || genre == "selectionnez votre genre"){
            message.classList.remove("weightGreen");
            message.classList.add("weightRed");
            message.innerHTML = "erreur veuillez selectionner un genre du type : homme ou femme et entrer un age supérieur à 0";
        }
        else{
            if(age > 20 && genre =="homme"){
                message.classList.add("weightGreen")
                message.innerHTML = "Vous payez l'impôt"
            }
            else{
                if(age > 18 && age < 35 && genre == "femme"){
                    message.classList.add("weightGreen")
                    message.innerHTML = "Vous payez l'impôt"
                }
                else{
                    message.classList.add("weightGreen")
                    message.innerHTML = "Vous êtes exonéré d'impôt"
                }
            }
        }
    }
    )
   
    


    
    