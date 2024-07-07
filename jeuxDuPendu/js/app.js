"use-strict"
//création du nbr aléatoire 
let nbrAleatoire = Math.floor((Math.random()*111));
//création de la variable et du tableau qui va recevoir le mot aléatoire
let motMystere = "";
let tabMotMystere = [];
let tabMotMystereTrie = [];
let imagePendu = -1;
let nbrTentative = 10;
let indexLettre;
let motCacheComplet="";
//tableaux qui contient tout les mots mystères possibles
const tabMots= ['sanctifierions','subtilisations','desintoxiquant','badigeonnerait','blanchisseries','bureaucratique','baragouineuses','camion-citerne','clairs-obscurs','cohabitassions','commercialiser','compatibilites','chronometrages','dimensionnelle','differentielle','discrimination','dupliquassions','decentralisais','decomposerions','decrocheraient','demineralisais','ecclesiastique','empoisonnement','encouragements','endoctrinaient','ensanglanterai','entre-devorees','environnements','exorciseraient','eclaboussement','eventuellement','evolutionnisme','fabriqueraient','facilitassions', 'faciliteraient','factorisassent','factorisassiez','factorisations','factoriserions', 'farfouillerais','farfouillerait','faux-monnayeur','faux-semblants','ganglionnaires','grappillerions','grenouillerent','grandiloquence','guerroieraient','gueule-de-loup','grouilleraient','gueuletonnerez','geophysicienne','gouvernemental','grammaticalite','grandiloquence','grandiloquents','immatriculerai','improvisatrice','incontestables','incinereraient','indisciplinees','insaisissables','installatrices','instrumenterez','interromprions','investigatrice','obsessionnelle','oeils-de-boeuf','orangs-outangs','obliteratrices','occidentaliser','ophtalmologies','orchestrateurs','obscurantismes','occasionnelles','uniformisation','ulterieurement','urbanisassions','universitaires','universalistes','unicellulaires','uniformisaient','reconstruiront','religieusement','renouvellerons','reprographient','repositionnees','rhinolaryngite','ridiculiserait','rouspeteraient','recapitulatifs','reconciliation','revolutionnera','retrocederions','zoologiquement','zigzagueraient','zoogeographies','zigouillerions','vulcanisations','vadrouillerais','vieillissantes','vieillissement','vigoureusement','vaporisassions','quantificateur','qualifications','quotidiennetes','quemanderaient','quemanderaient','nutritionnelle'];
//on récupère les objets boutons du DOM de chaque lettre dans des variables 
const btnLetters = document.querySelectorAll('.btnLettre');
const btnTire6 = document.querySelector('.btnLettre[value="-"]');
const btnRejouer = document.querySelector('.rejouer');
const backgroundDiv = document.querySelector('.background');
const backgroundDivRejouer = backgroundDiv.style.backgroundImage = 'url("./img/bg.jpg")';
const backgroundDivSize = backgroundDiv.style.backgroundSize = 'cover';
//génération d'un mot aléatoire en fonction du nbr aléatoire on le stock dans la variable motMystere
motMystere = tabMots.find((el,index)=>index===nbrAleatoire);
//création d'un tableaux qui récupère chaque caractere de la chaine du mot mystère
for (let i = 0; i < motMystere.length; i++) {
    tabMotMystere.push(motMystere[i]);   
}

for (let i = 0; i < tabMotMystere.length; i++) {
    tabMotMystereTrie.push(tabMotMystere[i]);   
}

btnLetters.forEach(btn => {
  btn.addEventListener('click', () => {
    const letter = btn.value;
    verifierLettre(letter, tabMotMystere);
  });
});

btnTire6.addEventListener('click', () => {
  verifierLettre('-', tabMotMystere);
});

btnRejouer.addEventListener('click', () => {
  rejouer(backgroundDivRejouer,backgroundDivSize);
});



function rejouer(backgroundDivRejouer,backgroundDivSize) {
    backgroundDivRejouer;
    backgroundDivSize;
    nbrAleatoire = Math.floor((Math.random()*111));
    motMystere = "";
    motCacheComplet="";
    tabMotMystere.length = 0;
    tabMotMystereTrie.length = 0;
    indexLettre = 0;
    nbrTentative = 10;
    imagePendu = -1;
    document.querySelector('.background').style.backgroundImage = 'url("./img/bg.jpg")';
    document.querySelector('.background').style.backgroundSize = 'cover';
    document.querySelector('.background').style.backgroundPosition = 'center';
    document.getElementsByClassName('messageTentative')[0].innerHTML = `attention tu n'as que ${nbrTentative} tentatives ou sinon tu seras pendu !`;
    document.getElementsByClassName('container-btn')[0].style.display ='flex';
    document.getElementsByClassName('rejouer')[0].style.display = 'none';
    document.getElementsByClassName('message')[0].innerHTML = '';
    document.getElementsByTagName('img')[0].setAttribute('src',``);
    document.getElementsByTagName('section')[0].style.height='100vh';
    document.getElementsByTagName('p')[0].innerHTML ='_ ';
    document.getElementsByTagName('p')[1].innerHTML ='_ ';
    document.getElementsByTagName('p')[2].innerHTML ='_ ';
    document.getElementsByTagName('p')[3].innerHTML ='_ ';
    document.getElementsByTagName('p')[4].innerHTML ='_ ';
    document.getElementsByTagName('p')[5].innerHTML ='_ ';
    document.getElementsByTagName('p')[6].innerHTML ='_ ';
    document.getElementsByTagName('p')[7].innerHTML ='_ ';
    document.getElementsByTagName('p')[8].innerHTML ='_ ';
    document.getElementsByTagName('p')[9].innerHTML ='_ ';
    document.getElementsByTagName('p')[10].innerHTML ='_ ';
    document.getElementsByTagName('p')[11].innerHTML ='_ ';
    document.getElementsByTagName('p')[12].innerHTML ='_ ';
    document.getElementsByTagName('p')[13].innerHTML ='_ ';
    motMystere = tabMots.find((el,index)=>index===nbrAleatoire);
    for (let i = 0; i < motMystere.length; i++) {
        tabMotMystere.push(motMystere[i]);   
    }

    for (let i = 0; i < tabMotMystere.length; i++) {
        tabMotMystereTrie.push(tabMotMystere[i]);   
    }

}


function verifierLettre(lettreMinuscule,tabMotMystere){
        for (let i = 0; i < tabMotMystereTrie.length; i++){
            if(tabMotMystereTrie[i]=== lettreMinuscule){
                    indexLettre = tabMotMystereTrie.indexOf(tabMotMystereTrie[i]); 
                    document.getElementsByTagName('p')[indexLettre].innerHTML = lettreMinuscule.toUpperCase();
                    tabMotMystereTrie.splice(indexLettre,1,'');
            }                      
        } 
        
        if(tabMotMystere.includes(lettreMinuscule)===false){
            nbrTentative--;
            imagePendu++;
            document.getElementsByTagName('section')[0].style.height ='80vmax';
            switch (imagePendu) {
                case 0:
                    document.getElementsByTagName('img')[0].setAttribute('src','./img/pendu0.png')
                    break;
    
                case 1:
                    document.getElementsByTagName('img')[0].setAttribute('src','./img/pendu1.png')
                    
                    break;
    
                case 2:
                    document.getElementsByTagName('img')[0].setAttribute('src','./img/pendu2.png')
                    break;
    
                case 3:
                    document.getElementsByTagName('img')[0].setAttribute('src','./img/pendu3.png')
                    break;
    
                case 4:
                    document.getElementsByTagName('img')[0].setAttribute('src','./img/pendu4.png')
                    break;
    
                case 5:
                    document.getElementsByTagName('img')[0].setAttribute('src','./img/pendu5.png')
                    break;
    
                case 6:
                    document.getElementsByTagName('img')[0].setAttribute('src','./img/pendu6.png')
                    break;
    
                case 7:
                    document.getElementsByTagName('img')[0].setAttribute('src','./img/pendu7.png')
                    break;
    
                case 8 :
                    document.getElementsByTagName('img')[0].setAttribute('src','./img/pendu8.png')
                    break;
    
                case 9:
                    nbrTentative = 0;
                    backgroundDiv.style.backgroundImage = 'url("./img/citrouilleLoose.jpg")';
                    backgroundDivSize;
                    document.getElementsByClassName('messageTentative')[0].innerHTML = `attention tu n'as que ${nbrTentative} tentatives ou sinon tu seras pendu !`;
                    document.getElementsByTagName('img')[0].setAttribute('src','./img/pendu9.png')
                    document.getElementsByTagName('section')[0].style.height ='80vmax';
                    document.getElementsByClassName('message')[0].style.color = 'red';
                    document.getElementsByClassName('message')[0].innerHTML = 'PENDU !';
                    document.getElementsByClassName('rejouer')[0].style.display = 'block';
                    document.getElementsByClassName('container-btn')[0].style.display ='none';
                    break;                  
            }  
            document.getElementsByClassName('messageTentative')[0].innerHTML = `attention tu n'as que ${nbrTentative} tentatives ou sinon tu seras pendu !`;    
        }
        else{
            motCacheComplet = document.getElementsByTagName('p')[0].innerHTML + document.getElementsByTagName('p')[1].innerHTML + document.getElementsByTagName('p')[2].innerHTML + document.getElementsByTagName('p')[3].innerHTML + document.getElementsByTagName('p')[4].innerHTML + document.getElementsByTagName('p')[5].innerHTML + document.getElementsByTagName('p')[6].innerHTML + document.getElementsByTagName('p')[7].innerHTML + document.getElementsByTagName('p')[8].innerHTML + document.getElementsByTagName('p')[9].innerHTML + document.getElementsByTagName('p')[10].innerHTML + document.getElementsByTagName('p')[11].innerHTML + document.getElementsByTagName('p')[12].innerHTML + document.getElementsByTagName('p')[13].innerHTML;
    
            if((motCacheComplet == motMystere.toUpperCase()) && nbrTentative > 0){
                backgroundDiv.style.backgroundImage = 'url("./img/freedom.jpg")';
                backgroundDivSize;
                document.getElementsByTagName('section')[0].style.height ='80vmax';
                document.getElementsByClassName('message')[0].style.color='green';
                document.getElementsByClassName('message')[0].innerHTML = 'Bien joué,vous êtes sauvé';
                document.getElementsByClassName('rejouer')[0].style.display = 'block';
                document.getElementsByClassName('container-btn')[0].style.display ='none';
            }
            
        }        
    }
