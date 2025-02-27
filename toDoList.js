//Récupération des bouton qui sont dans mon html

let ajouttache = document.getElementById("ajouttache");
let listeToDo = document.getElementById('listeTache');
let boutonAjoutToDo = document.getElementById("boutonAjoutToDo");

// Evenement pour ajouter de nouvelle tâche à ma ToDoList

boutonAjoutToDo.addEventListener("click", ajoutToDo);

//fonction de mon évènement

function ajoutToDo(event) {
    // il évite que la page se recharge quand je lance l'ajout de tâche
    event.preventDefault();

    //Création de la div qui est la ToDo elle même et on lui donne une classe
    let divTacheToDo = document.createElement("div");
    divTacheToDo.classList.add("tache");

    // Ici c'est la création de mes élements de ma ToDo
    let inputToDo = document.createElement("input");

    //ici c'est elle qui recevra le text de la ToDo
    let textToDo = document.createElement("span");

    //création des bouton de valiadation et de suppression
    let boutonV = document.createElement("button");
    let boutonS = document.createElement("button");

    //Insérer du texte dans mes bouton de Supression et VAlidation
    boutonV.textContent = "Checked";
    boutonS.textContent = "Delete";

    //Ajouter une classe à mes bouton de Validation et de suppression
    boutonS.classList.add("boutonSuprimer");
    boutonV.classList.add("boutonValider");

    //L'input céer reçoit le type de check pour la Validation
    inputToDo.type = "checkbox";

    //Je créer une div qui va réçevoit les bouton de Validation et pour 
    let divAjoutSuprime = document.createElement("div");
    divAjoutSuprime.classList.add("divAjoutSuprime");

    //Ici la div reçoit le text et l'input checkbox
    let divInputTextToDo = document.createElement("div");

    // le text de la ToDo reçoit le mot taper par l'utilisateur
    textToDo.innerText = ajouttache.value;
    
    //elle reçoit ici le text et l'input pour espacer le text des bouton suprimer et valider
    divInputTextToDo.appendChild(inputToDo);
    divInputTextToDo.appendChild(textToDo);

    //je la met dans la div de la ToDo
    divTacheToDo.appendChild(divInputTextToDo);

    //cette div reçoit les bouton suprimer valider pour les espacés
    divAjoutSuprime.appendChild(boutonV);
    divAjoutSuprime.appendChild(boutonS);

    //Et ici je la met dans la ToDo 
    divTacheToDo.appendChild(divAjoutSuprime);

    //Ici la ToDo est mise dans la Liste des ToDo
    listeToDo.appendChild(divTacheToDo);

    //input text redevient vide après l'ajout d'une ToDo
    ajouttache.value = "";
}

//l'evenement pour suprimer ou valider une tache
listeToDo.addEventListener("click", (event) => {

    //cette variable reçoit l"element sur lequel j'ai cliqué
    const suprimerOuValiderTache = event.target;

    //si je clicque sur supprimer je supprime la tache
    if (suprimerOuValiderTache.classList[0] === "boutonSuprimer") {
        let divBoutonS = suprimerOuValiderTache.parentElement;
        let toDo = divBoutonS.parentElement;
        toDo.classList.add("fall");
        
        toDo.addEventListener("transitionend", () => {
            toDo.remove();
        })
    }

    //ici je marque que la tâche est validé
    if (suprimerOuValiderTache.classList[0] === "boutonValider") {
        let divBoutonV = suprimerOuValiderTache.parentElement;
        let toDo = divBoutonV.parentElement;
        toDo.classList.toggle("complete");
    }
});