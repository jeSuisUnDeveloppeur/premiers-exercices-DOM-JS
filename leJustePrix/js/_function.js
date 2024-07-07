export function genererUnChiffreEntier(valeurMax){
return Math.floor(Math.random()*Math.floor(valeurMax));
}

export function afficherUneImage(valeur){
    return `<img src="./img/${valeur}" class="img-fluid" width="30%" alt="une image du juste prix">`;
}
