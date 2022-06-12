/*------Ce projet est réalisé dans le cadre d'une formation, les commentaires ont un but pedagogique---*/
let pokemons = ['bellossom', 'bulbasaur', 'butterfree', 'calyrex', 'charizad', 'glastrier', 'mareep', 'marill', 'regidrago', 'regieleki',
    'squirtle', 'sudowoodo', 'xatu', 'zarude'];
let stories = ['You ran into this weird little creature ... it\'s intrigued by you, maybe she likes you, Oh wait she is about to bite you !!!!! Ruuuuun ... oh No you died :)',
    'Once upon a time, an adventurer was on his way to a long lost village, but in their way they stumbled upon what will be one of their best friends, and adorable lowkey creepy creature.'];

/*----------------------------Function pour donner élément aléatoire--------------------------*/

function genererNombre(max){
     return Math.floor(Math.random()*max)
}

/*---------------------------Générer et recupérér un pokemon aléatoire----------------------------*/


let indicePokemon = genererNombre(pokemons.length);//utlisation de function random, génere indice
let pokemonChoice = pokemons[indicePokemon];//on utilise l'indice dans le tableau 


/*--------------------------------Générer et récuperer une story------------------------------------*/


let indiceStory = genererNombre(stories.length);//utlisation de function random, génere indice
let storyChoice = stories[indiceStory];//on utilise l'indice dans le tableau 


/*------------------------------------Demander le nom à l'utilisateur--------------------------------*/


let userPrompt = prompt("Bienvenue!, tu peux donner ton nom?");



/*-----------------Recuperer le résultat et l'ajouter dans la class username HTML----------------------*/



let userName= document.querySelectorAll(".username");
userName.forEach(user => {
    user.innerText = userPrompt;
    
});

/*----------Recuperer le nom de pokemon(pokemonChoice) et l'ajouter dans la class pokemon-name--------------------*/

//Quand on a un tableau (plusieurs éléments comme dans la class) il faut le parcourir avec un for ou un forEach!

let pokemonName= document.querySelectorAll(".pokemon-name");

for(i = 0; i < pokemonName.length ; i++){
    pokemonName[i].innerText = pokemonChoice;
}


 /* ------------------------placer l'histoire dans le div avec l'id story-------------------*/


let story = document.getElementById("story");
story.innerText = storyChoice;



/*-------------------placer l'image dans le div avec l'id image-spot--------------------------*/

 
// on remarque dans assets que le nom de l'image c'est le nom du pokemon + .png




let image = document.getElementById("image-spot");
image.outerHTML = "<img src='./assets/" + pokemonChoice +".png'/>"
console.log(pokemonChoice)



