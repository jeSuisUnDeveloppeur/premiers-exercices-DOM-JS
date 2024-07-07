function controlMdp(valueInput){
    let compteur = 0,
        regexLettre = /[a-zA-Z]+/,
        regexChiffre = /[0-9]+/,
        regexMinuscule = /[a-z]+/,
        regexMajuscule = /[A-Z]+/,
        regexCaracSpecial = /[[:punct:]]/;
    console.log(valueInput);
    if(regexLettre.test(valueInput) && regexChiffre.test(valueInput)){
       compteur++;
    }
    
    if(regexMajuscule.test(valueInput)){
        compteur++;
    }

    if(regexMajuscule.test(valueInput)){
        compteur++;
    }

    if(regexMinuscule.test(valueInput)){
        compteur++;
    }

    if(regexCaracSpecial.test(valueInput)){
        compteur++;
    }

    if(valueInput.length < 8){
        compteur--;
    }
    return compteur;
}

export{controlMdp};