let nbrPhotocopie,
    facture;
const   prix1 = 0.10,
        prix2 = 0.09,
        prix3 = 0.08;

    document.querySelector("body > main > section > div > button").addEventListener("click",()=>{
    nbrPhotocopie = document.querySelector("body > main > section > div > div > input").value;
    if(nbrPhotocopie<11)
    {
        facture = nbrPhotocopie*prix1;
    }
    else{
        if(nbrPhotocopie < 31 && nbrPhotocopie > 10){
            facture = 10*prix1 + (nbrPhotocopie-10)*prix2; 
        }
        else{
            facture = 10*prix1 + 20*prix2 +(nbrPhotocopie-30)*prix3 ;
        }
    }
    document.getElementById("message").classList.add("messageVert");
    document.getElementById("message").innerHTML = `la facture est de : ${facture} €`;
});