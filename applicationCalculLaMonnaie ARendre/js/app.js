"use-strict"

let btnValide = document.getElementsByClassName("btnGreen")[0];

    btnValide.addEventListener('click',()=>{
        // déclaration et initialisation des variables
        let price = parseInt(document.getElementById("ticketApayer").value),
            argentUse = parseInt(document.getElementById("paiement").value),
            reponse = document.getElementsByClassName("reponse")[0],
            billet10 = 0 ,
            billet5 = 0,
            argentRendu = argentUse-price;

        //fonction billet à rendre
            function billetArendre(somme,billet){
                let nbrBillet=0;
                while(somme >= billet){
                    nbrBillet++
                    somme= somme-billet
                }   
                return nbrBillet 
            }

        //Algorithme
            if(argentUse < price){
                reponse.style.color ="red";
                reponse.innerHTML = `erreur vous n'avez pas donner asser d'argent il manque ${price-argentUse} €`;
            }
            else{
                if(argentUse == price){
                    reponse.style.color = "white";
                    reponse.innerHTML = "le compte est bon ;)";
                }
                else{
                    reponse.style.color = "white";
                    billet10 = billetArendre(argentRendu,10);
                    argentRendu= argentRendu- billet10*10;
                    billet5 = billetArendre(argentRendu,5);
                    argentRendu = argentRendu- billet5*5; 
                    reponse.innerHTML = `on doit vous rendre ${argentUse-price} € , vous pouvez avoir ${billet10} billets de 10€ , 
                    ${billet5} de 5€ et ${argentRendu} pièces de 1€`;
                }
            }
    });

    