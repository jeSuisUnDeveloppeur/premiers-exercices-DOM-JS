"use-strict"
import {controlMdp} from "./_function.js";

let inMdp = document.getElementById("inMdp"),
    reponse = document.getElementById("reponse");

    inMdp.addEventListener('keyup',()=>{
         
        switch (controlMdp(inMdp.value)) {
            case 0 :
                reponse.style.color = 'red';
                reponse.innerHTML = `Dangereux`;
                reponse.style.fontSize = '1.5em';
                break;

            case 1 :
                reponse.style.fontSize = '1.5em';
                reponse.style.color = '#F4661B';
                reponse.innerHTML = `Moyen`;
                break;

            case 2 :
                reponse.style.fontSize = '1.5em';
                reponse.style.color = '#F7FF3C';
                reponse.innerHTML = `Sécurisé`;
                break;

            case 3 :
                reponse.style.fontSize = '1.5em';
                reponse.style.color = '#F7FF3C';
                reponse.innerHTML = `Sécurisé`;
                break;
        
            case 4 :
                reponse.style.fontSize = '1.5em';
                reponse.style.color = 'blue';
                reponse.innerHTML = `Très sécurisé`;
                break;
        }
    });


