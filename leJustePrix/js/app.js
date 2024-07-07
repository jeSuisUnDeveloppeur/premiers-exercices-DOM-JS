"use-strict"
import {genererUnChiffreEntier,afficherUneImage} from "./_function.js";
//déclaration des tableaux images et nom d'images
const nomObjet = ['une chaise gaming','un costume d\'haloween','un grill','une guitare','un sac-à-main'];
const imageObjet = ['chaise.png','costume-haloween.png','grill.png','guitare.png','sac-a-main.png']; 
//declaration des variables
let prixPropose,
    prixMystere,
    nbrAleatoire = 0,
    compteurDeTentative = 10,
    image = document.getElementById('objet'),
    nomImage = document.getElementById('nomObject'),
    bouton = document.getElementById('boutonValider'),
    rejouer = document.getElementById('boutonRejouer'),
    message = document.getElementById('message'),
    affichageTentative = document.getElementById('nbre-tentative'),
    audioDef = new Audio("../média/Bruitage trompette.mp3"),
    audioWin = new Audio("../média/APPLAUDISSEMENTS.mp3");
    
//creation fonction verifierProposition
    function verifierProposition(){
        prixPropose = document.getElementById('prix-propose').value;

        if(compteurDeTentative == 1){
            audioDef.play();
            affichageTentative.innerHTML = `il ne vous reste plus aucune tentative`;
            message.style.color = 'red';
            message.innerHTML = `vous avez perdu`;
            bouton.setAttribute('disabled','true');
        }
        else{
            if(prixPropose < prixMystere){
                compteurDeTentative--;
                affichageTentative.innerHTML =`il vous reste ${compteurDeTentative} tentatives`;
                message.innerHTML = `plus haut !`;
            }
            else{
                if(prixPropose > prixMystere){
                compteurDeTentative--;
                affichageTentative.innerHTML =`il vous reste ${compteurDeTentative} tentatives`;
                message.innerHTML = `plus bas !`;
                }
                else{
                    if(prixPropose == prixMystere && compteurDeTentative > 0){
                        audioWin.play();
                        message.style.color = 'green';
                        message.innerHTML = `Félicitation vous avez gagné !!`;
                        bouton.setAttribute('disabled','true');
                    }
                }
            }        
        }
}

    prixMystere = genererUnChiffreEntier(100) + 1;
    nbrAleatoire = genererUnChiffreEntier(5);
    image.innerHTML = afficherUneImage(imageObjet[nbrAleatoire]);
    nomImage.innerHTML = nomObjet[nbrAleatoire];
    affichageTentative.innerHTML = `il vous reste ${compteurDeTentative} tentatives`;

    bouton.addEventListener('click',()=>{
        verifierProposition()
    });

    rejouer.addEventListener('click',()=>{
        location.reload();
    });

