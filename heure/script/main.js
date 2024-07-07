"use strict"
let reponse,
    result,
    heureUser,
    minUser,
    secUser,
    inputHeureUser,
    inputMinUser,
    inputSecUser,
    btnValider;

inputHeureUser = document.getElementById("inputHeureAct");
inputMinUser = document.getElementById("inputMinAct");
inputSecUser = document.getElementById("inputSecondeAct");
btnValider = document.getElementsByTagName("button")[0];
reponse = document.getElementById("reponse");

btnValider.addEventListener("click",()=>{
    
    heureUser = parseInt(inputHeureUser.value);
    minUser = parseInt(inputMinUser.value);
    secUser = parseInt(inputSecUser.value);
console.log(heureUser,minUser,secUser);
    
    if(heureUser < 23 && minUser == 59 && secUser == 59){
        reponse.style.color = "green";
        result = `${heureUser + 1}h 00min 00sec`;
        reponse.innerHTML = result;
    }
    else{
        if(heureUser < 24 && minUser < 59 && secUser == 59){
            reponse.style.color = "green";
            result = `${heureUser}h ${minUser + 1}min 00sec`;
            reponse.innerHTML = result;
        }
        else{
            if(heureUser < 24 && minUser < 59 && secUser < 59){  
                reponse.style.color = "green";                       
                result =`${heureUser}h ${minUser}min ${secUser + 1}sec`;
                reponse.innerHTML = result;
            }
            else{
                if(heureUser == 23 && minUser == 59 && secUser == 59){
                    reponse.style.color = "green";
                    result = `00h00min00sec`;
                    reponse.innerHTML = result;
                }
                else{
                    reponse.style.color = "red";
                    result = "erreur, l'heure entré est incorrecte";
                    reponse.innerHTML = result;
                }
            }
        }
    }  
});
